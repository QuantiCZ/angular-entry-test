import {
  createUser,
  deleteUser,
  updateUser,
} from "./../../store/actions/users.action";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "../../models/user.model";

import { selectUserFromRoute } from "../../store/selectors/users.selector";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent {
  constructor(private store: Store) {}

  user$: Observable<User> = this.store.select(selectUserFromRoute);

  onCreate(event: User) {
    this.store.dispatch(createUser(event));
  }

  onUpdate(event: User) {
    this.store.dispatch(updateUser(event));
  }

  onDelete(event: User) {
    const remove = window.confirm("Are you sure?");
    if (remove) {
      this.store.dispatch(deleteUser(event));
    }
  }
}
