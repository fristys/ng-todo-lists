import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo[guid]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  /** Required */
  @Input() guid: string;
  @Input() todo: Todo;

  constructor(
    private _TodoService: TodoService
  ) {}

  /**
   * Toggles the completion status for this ToDo
   */
  toggle(): void {
    this._TodoService.toggleTodo(this.guid, this.todo.guid);
  }
}
