import { UsersEffects } from "./../effects/users.effect";
import { loadUsers, loadUsersSuccess } from "./../actions/users.action";
import {
  selectAllUsers,
  selectUserEntities,
  selectUserFromRoute,
} from "./users.selector";
import { usersReducer } from "./../reducers/users.reducer";
import { TestBed } from "@angular/core/testing";
import { Store, StoreModule } from "@ngrx/store";
import { Position, User } from "../../models/user.model";
import { selectRouterState } from "src/app/store/reducers/router.reducer";

describe("Testing user selector", () => {
  let store: Store;

  const users: User[] = [
    {
      id: 1,
      firstName: "John",
      surname: "Doe",
      position: Position.husband,
    },
    { id: 2, firstName: "Jane", surname: "Doe", position: Position.wife },
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          users: usersReducer,
        }),
      ],
    });

    store = TestBed.inject(Store);
    spyOn(store, "dispatch").and.callThrough();
  });

  describe("selectUserEntities", () => {
    it("should return users as entities", () => {
      let result;

      store
        .select(selectUserEntities)
        .subscribe((value) => (result = value));
      //prvni zavolani nedispatchnuta akce mel by byt prazdny
      expect(result).toEqual({});

      //dispatch akce
      store.dispatch(loadUsersSuccess(users));

      expect(result).toEqual(entities);
    });

    it("should return all users", () => {
      let result;

      store.select(selectAllUsers).subscribe((value) => (result = value));
      //prvni zavolani nedispatchnuta akce mel by byt prazdny
      expect(result).toEqual([]);

      //dispatch akce
      store.dispatch(loadUsersSuccess(users));

      expect(result).toEqual(users);
    });
  });
});
