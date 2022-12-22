import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { User } from "../../models/user.model";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnChanges {
  @Input() user: User;
  exists = false;
  positions = ["wife", "husband"];

  //TODO: crud
  @Output() update = new EventEmitter<User>();
  @Output() create = new EventEmitter<User>();
  @Output() remove = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    if (this.user?.id) {
      this.exists = true;
      this.form.patchValue(this.user);
    }
  }

  form = this.fb.group({
    firstName: ["", Validators.required],
    surname: ["", Validators.required],
    //TODO: bude husband nebo wife
    position: ["", Validators.required],
  });

  get firstNameControl() {
    return this.form.get("firstName") as FormControl;
  }

  get firstNameControlValid() {
    return (
      this.firstNameControl.hasError("required") &&
      this.firstNameControl.touched
    );
  }

  get surNameControl() {
    return this.form.get("surname") as FormControl;
  }

  get surNameControlValid() {
    return (
      this.surNameControl.hasError("required") &&
      this.surNameControl.touched
    );
  }

  createUser(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      this.create.emit(value);
    }
  }
  updateUser(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.user, ...value });
    }
  }
  deleteUser(form: FormGroup) {
    const { value } = form;
    this.remove.emit({ ...this.user, ...value });
  }
}
