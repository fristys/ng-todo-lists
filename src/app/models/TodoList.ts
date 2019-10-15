import { Todo } from './Todo';

export class TodoList {
  get toDosLeft(): number {
    if (!this.toDos || !this.toDos.length) {
      return 0;
    }

    return this.toDos.filter(toDo => !toDo.completed).length;
  }

  get allToDosCompleted(): boolean {
    return this.toDosLeft === 0;
  }

  constructor(
    public title: string,
    public toDos: Todo[] = [],
    public guid: string = `${title}-${new Date().getTime()}`
  ) { }
}
