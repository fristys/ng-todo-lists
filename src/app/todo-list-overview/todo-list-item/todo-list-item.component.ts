import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { TodoList } from '../../models/TodoList';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent {
  @Input() list: TodoList;

  constructor(
    private _Router: Router
  ) { }

  /**
   * Navigates to the list
   */
  navigate(): void {
    if (!this.list || !this.list.guid) {
      return;
    }

    this._Router.navigateByUrl(`/${this.list.guid}`);
  }
}
