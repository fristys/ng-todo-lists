import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TodoListOverviewComponent } from './todo-list-overview.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFormComponent } from './todo-list-form/todo-list-form.component';

const routes: Routes = [
  {
      path: '',
      component: TodoListOverviewComponent
  }
];

@NgModule({
  declarations: [
    TodoListOverviewComponent,
    TodoListItemComponent,
    TodoListFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoListOverviewModule { }
