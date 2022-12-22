import * as UsersAction from "./../actions/users.action";
import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { User } from "../../models/user.model";

export interface UserState {
  entities: { [id: number]: User };
  loaded: boolean;
  loading: boolean;
}

export const usersFeatureName = "users";

export const selectUsersState =
  createFeatureSelector<UserState>(usersFeatureName);

export const initialState: UserState = {
  entities: {},
  loaded: false,
  loading: false,
};

export const usersReducer = createReducer<UserState>(
  initialState,
  on(
    UsersAction.loadUsers,
    (state): UserState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    UsersAction.loadUsersFail,
    (state): UserState => ({
      ...state,
      loading: false,
      loaded: false,
    })
  ),
  on(UsersAction.loadUsersSuccess, (state, { users }): UserState => {
    const entities = users.reduce(
      (entities: { [id: number]: User }, user: User) => {
        return {
          ...entities,
          [user?.id]: user,
        };
      },
      {
        ...state.entities,
      }
    );
    return {
      ...state,
      loading: false,
      loaded: true,
      entities,
    };
  }),
  on(
    UsersAction.createUserSuccess,
    UsersAction.updateUserSuccess,
    (state, { user }): UserState => {
      const entities = {
        ...state.entities,
        [user?.id]: user,
      };

      return {
        ...state,
        entities,
      };
    }
  ),
  on(UsersAction.deleteUserSuccess, (state, { user }): UserState => {
    const { [user?.id]: removed, ...entities } = state.entities;

    return {
      ...state,
      entities,
    };
  })
);
