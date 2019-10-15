import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form[guid]',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent {
  @Input() guid: string;

  title: string = '';

  constructor (
    private _TodoService: TodoService
  ) {}

  /**
   * Adds the new ToDo
   */
  add(): void {
    if (!this.title) {
      return;
    }

    this._TodoService.addTodo(this.guid, this.title);
    this.title = '';
  }
}
