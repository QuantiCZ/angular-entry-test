import { createSelector } from "@ngrx/store";
import * as fromUserReducer from "../reducers/users.reducer";
import { User } from "../../models/user.model";
import { selectRouterState } from "src/app/store/reducers/router.reducer";

const getUsersEntities = (state: fromUserReducer.UserState) =>
  state.entities;
// const getUsersLoading = (state: fromUserReducer.UserState) =>
//   state.loading;
const getUsersLoaded = (state: fromUserReducer.UserState) => state.loaded;

export const selectUserEntities = createSelector(
  fromUserReducer.selectUsersState,
  getUsersEntities
);

export const selectAllUsers = createSelector(
  selectUserEntities,
  (entities) => {
    console.log(entities);
    return Object.keys(entities).map((id) => entities[id]);
  }
);

export const selectAllUsersLoaded = createSelector(
  fromUserReducer.selectUsersState,
  getUsersLoaded
);

export const selectUserFromRoute = createSelector(
  selectUserEntities,
  selectRouterState,
  (entities, router): User => {
    console.log(router);
    return router.state && entities[router.state.params["userId"]];
  }
);
export const selectUserById = (id: number) =>
  createSelector(
    selectUserEntities,
    (entities: { [key: number]: User }) => entities[id]
  );

export const selectUserExistsFromRoute = createSelector(
  selectUserFromRoute,
  (user) => !!user
);

export const selectUserByIdExist = (id: number) =>
  createSelector(selectUserById(id), (user) => !!user);
