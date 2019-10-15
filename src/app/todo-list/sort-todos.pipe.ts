import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/Todo';

@Pipe({
  name: 'sortTodos',
  pure: false
})
export class SortTodosPipe implements PipeTransform {

  /**
   * Sorts ToDos by completed first, then todo, each ordered by creation date
   * ascending
   */
  transform(toDos: Todo[]): Todo[] {
    const { completed, todo } = toDos.reduce((obj, current) => {
      if (current.completed) {
        obj.completed.push(current);
      } else {
        obj.todo.push(current);
      }

      return obj;
    }, { completed: [], todo: [] });

    return [
      ...completed.sort((a, b) => this.sortToDosByCreated(a, b)),
      ...todo.sort((a, b) => this.sortToDosByCreated(a, b))
    ];
  }

  /**
   * Sorts ToDos by creation date
   */
  private sortToDosByCreated(a: Todo, b: Todo): any {
    return (a.created as any) - (b.created as any);
  }
}
