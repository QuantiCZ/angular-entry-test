import { Observable } from "rxjs";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { User } from "../../models/user.model";
import { Store } from "@ngrx/store";
import { selectAllUsers } from "../../store/selectors/users.selector";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  users$: Observable<User[]> = this.store.select(selectAllUsers);

  constructor(private store: Store) {}
}
