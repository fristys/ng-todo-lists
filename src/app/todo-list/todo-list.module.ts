import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { ShowCompletedPipe } from './show-completed.pipe';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { SortTodosPipe } from './sort-todos.pipe';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
];

@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent,
    ShowCompletedPipe,
    TodoFormComponent,
    SortTodosPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoListModule { }
