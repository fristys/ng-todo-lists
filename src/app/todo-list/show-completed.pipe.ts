import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/Todo';

@Pipe({
  name: 'showCompleted'
})
export class ShowCompletedPipe implements PipeTransform {
  /**
   * Filters out completed ToDos from the array on demand
   * @param toDos the Todo array
   * @param showCompleted should completed items be filtered out
   */
  transform(toDos: Todo[], showCompleted: boolean = true): Todo[] {
    return (showCompleted ? toDos : [...toDos.filter(toDo => !toDo.completed)]);
  }
}
