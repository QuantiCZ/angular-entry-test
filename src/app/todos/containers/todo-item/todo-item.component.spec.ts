import { provideMockStore } from "@ngrx/store/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoItemComponent } from "./todo-item.component";

describe("TodoItemComponent", () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  const initialState = {
    entities: [
      {
        id: 1,
        name: "Buy food",
        description: "Buy bread, sausage, eggs, salad",
        status: "NEW",
        dueDate: "2020-06-18T06:59:06.951Z",
        created: "2020-06-18T06:59:06.951Z",
        assignee: 1,
      },
      {
        id: 1,
        name: "Buy food",
        description: "Buy bread, sausage, eggs, salad",
        status: "NEW",
        dueDate: "2020-06-18T06:59:06.951Z",
        created: "2020-06-18T06:59:06.951Z",
        assignee: 1,
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
