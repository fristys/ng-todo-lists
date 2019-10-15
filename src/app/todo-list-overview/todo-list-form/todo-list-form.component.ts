import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListFormComponent {
  title: string = '';

  constructor(
    private _TodoService: TodoService
  ) {}

  /**
   * Adds a new list
   */
  add() {
    this._TodoService.addList(this.title);
    this.title = '';
  }
}
