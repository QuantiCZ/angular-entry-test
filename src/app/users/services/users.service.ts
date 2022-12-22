import { usersApi } from "./../utils/constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { catchError } from "rxjs";
import { throwError } from "rxjs";

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(usersApi)
      .pipe(catchError((error) => throwError(() => error.json())));
  }

  createUser(payload: User): Observable<User> {
    return this.http
      .post<User>(usersApi, payload)
      .pipe(catchError((error) => throwError(() => error.json())));
  }

  updateUser(payload: User): Observable<User> {
    return this.http
      .put<User>(`${usersApi}/${payload.id}`, payload)
      .pipe(catchError((error) => throwError(() => error.json())));
  }

  deleteUser(payload: User): Observable<User> {
    console.log(payload.id);
    return this.http
      .delete<User>(`${usersApi}/${payload.id}`)
      .pipe(catchError((error) => throwError(() => error.json())));
  }
}
