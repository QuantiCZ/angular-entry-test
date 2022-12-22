import { User } from "./../../../users/models/user.model";
import { ChangeDetectionStrategy, Input, Output } from "@angular/core";
import { Component, EventEmitter } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Todo } from "../../models/todo.model";

@Component({
  selector: "app-todo-form",

  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent {
  @Input() todo: Todo;
  exists = false;
  statuses = ["NEW", "IN_PROGRESS", "DONE"];
  @Input()
  assignees: User[];

  @Output() update = new EventEmitter<Todo>();
  @Output() create = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    if (this.todo?.id) {
      this.exists = true;
      this.form.patchValue(this.todo);
    }
  }

  form = this.fb.group({
    name: [""],
    description: [""],
    status: [""],
    created: this.fb.control(new Date().toISOString()),
    dueDate: [""],
    //TODO: create pipe on how to transform date
    assignee: [],
  });

  get nameControl() {
    return this.form.get("name") as FormControl;
  }

  get nameControlValid() {
    return (
      this.nameControl.hasError("required") && this.nameControl.touched
    );
  }

  get descriptionControl() {
    return this.form.get("description") as FormControl;
  }

  get descriptionControlValid() {
    return (
      this.descriptionControl.hasError("required") &&
      this.descriptionControl.touched
    );
  }

  createTodo(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      this.create.emit(value);
    }
  }
  updateTodo(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.todo, ...value });
    }
  }
  deleteTodo(form: FormGroup) {
    const { value } = form;
    this.remove.emit({ ...this.todo, ...value });
  }
}
