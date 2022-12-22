import { NavigationExtras } from "@angular/router";
import { createAction } from "@ngrx/store";
export const GO = "[Router] Go";
export const BACK = "[Router] Back";
export const FORWARD = "[Router] Forward";

//TODO: better with maybe pick or partial
export interface NavigationPayload {
  payload: NavigationPayloadProps;
}

export interface NavigationPayloadProps {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export const Go = createAction(GO, (payload: NavigationPayloadProps) => ({
  payload,
}));

export const Back = createAction(BACK);

export const Forward = createAction(FORWARD);
