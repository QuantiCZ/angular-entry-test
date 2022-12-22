import {
  ActivatedRouteSnapshot,
  Params,
  RouterStateSnapshot,
} from "@angular/router";
import * as fromRouter from "@ngrx/router-store";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};

export const selectRouterState =
  createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>(
    "router"
  );

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl>
{
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const params = state.params;

    return { url, queryParams, params };
  }
}
