import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Todo } from "../../models/todo.model";
import { selectAllTodos } from "../../store/selectors/todos.selector";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  todos$: Observable<Todo[]> = this.store.select(selectAllTodos);

  displayedColumns: string[] = [
    "position",
    "name",
    "description",
    "created",
    "dueDate",
    "assignee",
  ];

  constructor(private store: Store) {}
}
