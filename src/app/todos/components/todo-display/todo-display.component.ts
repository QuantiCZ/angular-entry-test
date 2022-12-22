import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Todo } from "../../models/todo.model";

@Component({
  selector: "app-todo-display",
  templateUrl: "./todo-display.component.html",
  styleUrls: ["./todo-display.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDisplayComponent {
  @Input()
  todos: Todo[];

  displayedColumns: string[] = [
    "position",
    "name",
    "description",
    "created",
    "dueDate",
    "assignee",
  ];
}
