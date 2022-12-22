import { provideMockStore } from "@ngrx/store/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoFormComponent } from "./todo-form.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("TodoFormComponent", () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [ReactiveFormsModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
