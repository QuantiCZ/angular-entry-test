import { take } from "rxjs/operators";
import { filter } from "rxjs/operators";
import { selectAllTodosLoaded } from "./../store/selectors/todos.selector";
import { tap } from "rxjs";
import { of } from "rxjs";
import { catchError } from "rxjs";
import { switchMap } from "rxjs";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store } from "@ngrx/store";
import { loadTodos } from "../store/actions/todos.action";

@Injectable()
export class TodosGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(selectAllTodosLoaded).pipe(
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(loadTodos());
        }
      }),
      filter((loaded) => {
        console.log(loaded);
        return loaded;
      }),
      take(1)
    );
  }
}
