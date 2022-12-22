import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";

// load users
export const LOAD_USERS = "[Users] Load Users";
export const LOAD_USERS_FAIL = "[Users] Load Users Fail";
export const LOAD_USERS_SUCCESS = "[Users] Load Users Success";

export const CREATE_USER = "[Users] Create User";
export const CREATE_USER_FAIL = "[Users] Create User Fail";
export const CREATE_USER_SUCCESS = "[Users] Create User Success";

export const DELETE_USER = "[Users] Delete User";
export const DELETE_USER_FAIL = "[Users] Delete User Fail";
export const DELETE_USER_SUCCESS = "[Users] Delete User Success";

export const UPDATE_USER = "[Products] Update User";
export const UPDATE_USER_FAIL = "[Products] Update User Fail";
export const UPDATE_USER_SUCCESS = "[Products] Update User Success";

export const loadUsers = createAction(LOAD_USERS);

export const loadUsersFail = createAction(
  LOAD_USERS_FAIL,
  props<{ error }>()
);

export const loadUsersSuccess = createAction(
  LOAD_USERS_SUCCESS,
  (users: User[]) => ({ users })
);

export const createUser = createAction(CREATE_USER, (user: User) => ({
  user,
}));

export const createUserFail = createAction(
  CREATE_USER_FAIL,
  props<{ error }>()
);

export const createUserSuccess = createAction(
  CREATE_USER_SUCCESS,
  (user: User) => ({ user })
);

export const deleteUser = createAction(DELETE_USER, (user: User) => ({
  user,
}));

export const deleteUserFail = createAction(
  DELETE_USER_FAIL,
  props<{ error }>()
);

export const deleteUserSuccess = createAction(
  DELETE_USER_SUCCESS,
  (user: User) => ({ user })
);

export const updateUser = createAction(UPDATE_USER, (user: User) => ({
  user,
}));

export const updateUserFail = createAction(
  UPDATE_USER_FAIL,
  (user: User) => ({ user })
);

export const updateUserSuccess = createAction(
  UPDATE_USER_SUCCESS,
  (user: User) => ({ user })
);
