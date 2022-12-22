import { tap, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Location } from "@angular/common";
import {
  BACK,
  FORWARD,
  GO,
  NavigationPayload,
} from "../actions/router.action";

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  navigate$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GO),
        map((action: NavigationPayload) => action.payload),
        tap(({ path, query: queryParams, extras }) => {
          this.router.navigate(path, { queryParams, ...extras });
        })
      );
    },
    { dispatch: false }
  );

  navigateBack$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(BACK),
        tap(() => {
          this.location.back();
        })
      );
    },
    { dispatch: false }
  );
  navigateForward$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(FORWARD),
        tap(() => {
          this.location.forward();
        })
      );
    },
    { dispatch: false }
  );
}
