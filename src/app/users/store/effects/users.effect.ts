import {
  LOAD_USERS,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  DELETE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  loadUsersSuccess,
  loadUsersFail,
  createUserSuccess,
  createUserFail,
  deleteUserSuccess,
  deleteUserFail,
  updateUserSuccess,
  updateUserFail,
} from "./../actions/users.action";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "../../services/users.service";
import { catchError, map, of, switchMap } from "rxjs";
import { User } from "../../models/user.model";
import { Go } from "src/app/store/actions/router.action";

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_USERS),
      switchMap(() => {
        return this.usersService.getUsers().pipe(
          map((users: User[]) => loadUsersSuccess(users)),
          catchError((error) => of(loadUsersFail({ error: error })))
        );
      })
    );
  });
  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CREATE_USER),
      //TODO: typehack
      map((action: { user: User }) => action.user),
      switchMap((user: User) => {
        return this.usersService.createUser(user).pipe(
          map((user: User) => createUserSuccess(user)),
          catchError((error) => of(createUserFail({ error: error })))
        );
      })
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DELETE_USER),
      map((action: { user: User }) => action.user),
      switchMap((user: User) => {
        return this.usersService.deleteUser(user).pipe(
          map(() => deleteUserSuccess(user)),
          catchError((error) => of(deleteUserFail({ error: error })))
        );
      })
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UPDATE_USER),
      // map((action: UpdateUser) => action.payload),
      map((action: { user: User }) => action.user),
      switchMap((user: User) => {
        return this.usersService.updateUser(user).pipe(
          map((user) => updateUserSuccess(user)),
          catchError((error) => of(updateUserFail(error)))
        );
      })
    );
  });

  handleUserSuccess$ = createEffect(() => {
    return (
      this.actions$
        // either update or delete
        .pipe(
          ofType(
            UPDATE_USER_SUCCESS,
            DELETE_USER_SUCCESS,
            CREATE_USER_SUCCESS
          ),

          map(() =>
            Go({
              path: ["/users"],
            })
          )
        )
    );
  });
}
