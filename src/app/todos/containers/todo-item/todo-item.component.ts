import { selectAllUsers } from "./../../../users/store/selectors/users.selector";
import { selectTodo } from "./../../store/selectors/todos.selector";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Todo } from "../../models/todo.model";
import { Observable } from "rxjs";
import {
  createTodo,
  deleteTodo,
  updateTodo,
} from "../../store/actions/todos.action";
import { User } from "src/app/users/models/user.model";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  constructor(private store: Store) {}

  todo$: Observable<Todo> = this.store.select(selectTodo);

  assignees$: Observable<User[]> = this.store.select(selectAllUsers);
  onCreate(event: Todo) {
    this.store.dispatch(createTodo(event));
  }

  onUpdate(event: Todo) {
    this.store.dispatch(updateTodo(event));
  }

  onDelete(event: Todo) {
    const remove = window.confirm("Are you sure?");
    if (remove) {
      this.store.dispatch(deleteTodo(event));
    }
  }
}
