import { initialState, usersReducer } from "./users.reducer";
import { loadUsers, loadUsersSuccess } from "../actions/users.action";
import { Position, User } from "../../models/user.model";

describe("UsersReducer", () => {
  describe("LOAD_USERS action", () => {
    it("should set loading to true", () => {
      const action = loadUsers();
      const state = usersReducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });
  });

  describe("LOAD_USERS_SUCCESS action", () => {
    it("should set loading to true", () => {
      const users: User[] = [
        {
          id: 1,
          firstName: "John",
          surname: "Doe",
          position: Position.husband,
        },
        {
          id: 2,
          firstName: "Jane",
          surname: "Doe",
          position: Position.wife,
        },
        {
          id: 3,
          firstName: "Paul",
          surname: "Doe",
          position: Position.husband,
        },
      ];
      const entities = {
        1: users[0],
        2: users[1],
        3: users[2],
      };

      const action = loadUsersSuccess(users);
      const state = usersReducer(initialState, action);

      expect(state.loading).toEqual(false);
      expect(state.loaded).toEqual(true);
      expect(state.entities).toEqual(entities);
    });
  });
});
