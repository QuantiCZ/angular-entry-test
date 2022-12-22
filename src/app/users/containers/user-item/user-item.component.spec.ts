import { provideMockStore } from "@ngrx/store/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserItemComponent } from "./user-item.component";

describe("UserItemComponent", () => {
  let component: UserItemComponent;
  let fixture: ComponentFixture<UserItemComponent>;
  const initialState = { entities: [] };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserItemComponent],
      imports: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(UserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
