import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListOverviewComponent } from './todo-list-overview.component';

describe('TodoListOverviewComponent', () => {
  let component: TodoListOverviewComponent;
  let fixture: ComponentFixture<TodoListOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
