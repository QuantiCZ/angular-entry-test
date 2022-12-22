import {
  createUser,
  createUserSuccess,
  loadUsers,
  loadUsersSuccess,
} from "./../actions/users.action";
import { TestBed } from "@angular/core/testing";
import { Actions } from "@ngrx/effects";
import { Position, User } from "../../models/user.model";
import { UsersService } from "../../services/users.service";
import { UsersEffects } from "./users.effect";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Observable, of } from "rxjs";
import { TestScheduler } from "rxjs/testing";
import { cold, hot } from "jasmine-marbles";
import { provideMockActions } from "@ngrx/effects/testing";

describe("UsersEffects", () => {
  let actions$: Observable<any>;
  let service: UsersService;
  let effects: UsersEffects;
  let testScheduler: TestScheduler;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsersService,
        UsersEffects,
        provideMockActions(() => actions$),
        // { provide: Actions, useFactory: new Actions() },
      ],
    });
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    service = TestBed.inject(UsersService);
    effects = TestBed.inject(UsersEffects);

    spyOn(service, "getUsers").and.returnValue(of(users));
    spyOn(service, "createUser").and.returnValue(of(users[0]));
  });

  describe("loadUsers$", () => {
    it("should return a collection from LoadUsersSuccess", () => {
      // const { hot, cold, expectObservable,  } = helpers;
      const action = loadUsers();
      const completion = loadUsersSuccess(users);

      actions$ = hot("-a", { a: action });
      const expected = cold("-b", { b: completion });

      expect(effects.loadUsers$).toBeObservable(expected);
    });
  });
  describe("createUser$", () => {
    it("should return a collection from LoadUsersSuccess", () => {
      const action = createUser(users[0]);
      const completion = createUserSuccess(users[0]);

      actions$ = hot("-a", { a: action });
      const expected = cold("-c", { c: completion });
      expect(effects.createUser$).toBeObservable(expected);
    });
  });

  // describe("createUser$", () => {
  //   it("should return a collection from LoadUsersSuccess", () => {
  //     testScheduler.run((helpers) => {
  //       const { hot, cold, expectObservable } = helpers;
  //       const action = loadUsers();
  //       const completion = loadUsersSuccess(users);

  //       const e$ = hot("-a", { a: action });
  //       const e2$ = cold("-b", { b: completion });
  //       const expected = "-b";
  //       expectObservable(effects.loadUsers$).toBe(expected);
  //     });
  //   });
  // });
});
