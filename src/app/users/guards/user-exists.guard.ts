import { loadUsers } from "./../store/actions/users.action";
import {
  selectUserEntities,
  selectAllUsersLoaded,
  selectUserByIdExist,
} from "./../store/selectors/users.selector";
import { map, switchMap } from "rxjs/operators";
import { take } from "rxjs/operators";
import { filter } from "rxjs/operators";
import { tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { UsersGuard } from "./users.guard";

@Injectable()
export class UsersExistsGuards implements CanActivate {
  constructor(private store: Store, private usersGuard: UsersGuard) {}

  canActivate(
    route: ActivatedRouteSnapshot
    // state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.usersGuard.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params["userId"]);
        return this.store.select(selectUserByIdExist(id));
      })
    );
  }
}
