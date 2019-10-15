import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./todo-list-overview/todo-list-overview.module').then(m => m.TodoListOverviewModule)
    },

    {
      path: ':guid',
      loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {}
