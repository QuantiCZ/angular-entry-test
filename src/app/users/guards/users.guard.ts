import { loadUsers } from "./../store/actions/users.action";
import { selectAllUsersLoaded } from "./../store/selectors/users.selector";
import { tap, filter, take, switchMap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
  //TODO:repetitive code
  checkStore(): Observable<boolean> {
    return this.store.select(selectAllUsersLoaded).pipe(
      tap((loaded) => {
        console.log(loaded);
        if (!loaded) {
          this.store.dispatch(loadUsers());
        }
      }),
      filter((loaded) => loaded),
      take(1)
    );
  }
}
