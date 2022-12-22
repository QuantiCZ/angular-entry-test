import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodosComponent } from "./containers/todos/todos.component";
import { RouterModule, Routes } from "@angular/router";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { TodoDisplayComponent } from "./components/todo-display/todo-display.component";
import { TodoItemComponent } from "./containers/todo-item/todo-item.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { todosReducer } from "./store/reducers/todos.reducer";
import { TodosGuard } from "./guards/todos.guard";
import { EffectsModule } from "@ngrx/effects";
import { TodosEffects } from "./store/effects/todos.effect";
import { TodosService } from "./services/todos.service";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatTableModule } from "@angular/material/table";
import { MatRippleModule } from "@angular/material/core";
import { UsersService } from "../users/services/users.service";
import { UsersGuard } from "../users/guards/users.guard";

export const ROUTES: Routes = [
  {
    path: "",
    canActivate: [TodosGuard, UsersGuard],
    component: TodosComponent,
  },
  {
    path: "new",
    canActivate: [TodosGuard, UsersGuard],
    component: TodoItemComponent,
  },
  {
    path: ":todoId",
    canActivate: [TodosGuard, UsersGuard],
    component: TodoItemComponent,
  },
];
@NgModule({
  declarations: [
    TodosComponent,
    TodoFormComponent,
    TodoDisplayComponent,
    TodoItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    EffectsModule.forFeature(TodosEffects),
    StoreModule.forFeature("todos", todosReducer),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatRippleModule,
  ],
  providers: [
    TodosGuard,
    TodosService,
    UsersGuard,
    UsersService,
    MatDatepickerModule,
  ],

  exports: [TodosComponent],
})
export class TodosModule {}
