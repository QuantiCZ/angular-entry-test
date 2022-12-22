import { provideMockStore } from "@ngrx/store/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { UserFormComponent } from "./user-form.component";

describe("UserFormComponent", () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [ReactiveFormsModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have create button", () => {
    const { debugElement } = fixture;

    const buttonNativeElement = debugElement.query(
      By.css("button")
    ).nativeElement;

    expect(buttonNativeElement.innerHTML).toContain("Create user");
  });

  it("should have ");
});
