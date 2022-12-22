import { provideMockStore } from "@ngrx/store/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoDisplayComponent } from "./todo-display.component";

describe("TodoDisplayComponent", () => {
  let component: TodoDisplayComponent;
  let fixture: ComponentFixture<TodoDisplayComponent>;
  const initialState = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoDisplayComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
