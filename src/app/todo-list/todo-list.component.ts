import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { TodoService } from 'src/app/services/todo.service';
import { TodoList } from 'src/app/models/TodoList';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnDestroy {
  guid: string;
  showCompletedToDos: boolean = true;

  get list(): TodoList {
    if (!this.guid) {
      return null;
    }

    return this._TodoService.getListByGuid(this.guid);
  }

  private paramMapSubscription: Subscription;

  constructor(
    private _Router: Router,
    private _Title: Title,
    private _ActivatedRoute: ActivatedRoute,
    private _TodoService: TodoService
  ) {
    this.paramMapSubscription = this._ActivatedRoute.paramMap.subscribe(map => {
      const guid = map.get('guid');
      const list = this._TodoService.getListByGuid(guid);

      if (!list) {
        this._Router.navigateByUrl('/');
        return;
      }

      this.guid = guid;
      this._Title.setTitle(list.title);
    });
  }

  ngOnDestroy() {
    if (this.paramMapSubscription) {
      this.paramMapSubscription.unsubscribe();
    }
  }

  taskGuid(todo: Todo) {
    return todo.guid;
  }
}
