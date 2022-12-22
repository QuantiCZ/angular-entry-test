import { MatInputModule } from "@angular/material/input";
import { UserDisplayComponent } from "./components/user-display/user-display.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./containers/users/users.component";
import { UserItemComponent } from "./containers/user-item/user-item.component";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import { usersReducer } from "./store/reducers/users.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UsersEffects } from "./store/effects/users.effect";
import { UsersService } from "./services/users.service";
import { RouterModule, Routes } from "@angular/router";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { UsersExistsGuards } from "./guards/user-exists.guard";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { UsersGuard } from "./guards/users.guard";
import { MatRippleModule } from "@angular/material/core";
import { MatTableModule } from "@angular/material/table";
// routes
export const ROUTES: Routes = [
  {
    path: "users",
    canActivate: [UsersGuard],
    component: UsersComponent,
  },
  {
    path: "users/new",
    canActivate: [UsersGuard],
    component: UserItemComponent,
  },
  {
    path: "users/:userId",
    canActivate: [UsersGuard, UsersExistsGuards],
    component: UserItemComponent,
  },
];

@NgModule({
  declarations: [
    UsersComponent,
    UserItemComponent,
    UserFormComponent,
    UserDisplayComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature("users", usersReducer),
    EffectsModule.forFeature(UsersEffects),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatRippleModule,
  ],
  providers: [UsersService, UsersGuard, UsersExistsGuards],
  exports: [UsersComponent, UserItemComponent],
})
export class UsersModule {}
