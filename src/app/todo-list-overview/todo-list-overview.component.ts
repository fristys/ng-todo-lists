import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodoList } from '../models/TodoList';
import { TodoService } from '../services/todo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-list-overview',
  templateUrl: './todo-list-overview.component.html',
  styleUrls: ['./todo-list-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListOverviewComponent {
  get toDoLists(): TodoList[] {
    return this._TodoService.toDoLists;
  }

  constructor(
    private _Title: Title,
    private _TodoService: TodoService
  ) {
    this._Title.setTitle('Not Another Todo App');
  }

  guid(list: TodoList): any {
    return list.guid;
  }
}
