import { UsersComponent } from "./users/containers/users/users.component";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { NgModule } from "@angular/core";
import {
  PreloadingStrategy,
  Route,
  RouterModule,
  Routes,
} from "@angular/router";

import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from "@ngrx/router-store";
import { CustomSerializer } from "./store/reducers/router.reducer";

const routes: Routes = [
  // {
  //   path: "users",
  //   component: UsersComponent,
  //   // loadChildren: () =>
  //   //   import("./users/users.module").then((m) => m.UsersModule),
  // },
  {
    path: "todos",
    loadChildren: () =>
      import("./todos/todos.module").then((m) => m.TodosModule),
  },
];

// class CustomPreload implements PreloadingStrategy {
//   preload(route: Route, fn: () => Observable<any>): Observable<any> {
//     return route.data && route.data.preload ? fn() : of(null);
//   }
// }

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot({
      stateKey: "router",
    }),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
