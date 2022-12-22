import { Position, User } from "../../models/user.model";
import {
  createUser,
  CREATE_USER,
  loadUsers,
  LOAD_USERS,
} from "./users.action";

describe("Users Actions", () => {
  describe("LoadUsers Actions", () => {
    describe("LoadUsers", () => {
      it("should create an action", () => {
        const action = loadUsers();

        expect({ ...action }).toEqual({
          type: LOAD_USERS,
        });
      });
    });
  });

  describe("Create User Actions", () => {
    describe("CreateUsers", () => {
      it("should create an action", () => {
        const user: User = {
          id: 1,
          firstName: "John",
          surname: "Doe",
          position: Position.husband,
        };
        const action = createUser(user);

        expect({ ...action }).toEqual({
          type: CREATE_USER,
          user,
        });
      });
    });
  });
});
