import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../../models/user.model";

@Component({
  selector: "app-user-display",
  templateUrl: "./user-display.component.html",
  styleUrls: ["./user-display.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDisplayComponent {
  @Input()
  users: User[];

  displayedColumns: string[] = ["id", "firstName", "surname", "position"];
}
