import { Injectable } from '@angular/core';

import { TodoList } from '../models/TodoList';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly LOCAL_STORAGE_KEY: string = 'not-another-todo-app-lists';
  public toDoLists: TodoList[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  /**
   * Loads previously saved ToDo data from localStorage (if available)
   */
  private loadFromLocalStorage(): void {
    if (localStorage) {
      const saved = localStorage.getItem(this.LOCAL_STORAGE_KEY);

      if (saved) {
        try {
          this.toDoLists = JSON.parse(saved).map(({ title, toDos, guid }) => new TodoList(title, toDos, guid));
        } catch (e) { }
      }
    }
  }

  /**
   * Adds a new list
   * @param title title for the new list (cannot be empty)
   */
  addList(title: string): void {
    if (!title) {
      return;
    }

    this.toDoLists.push(new TodoList(title));
    this.saveToLocalStorage();
  }

  /**
   * Gets a specific list via its guid
   * @param guid list guid
   */
  getListByGuid(guid: string): TodoList {
    if (!guid) {
      return null;
    }

    const filtered = this.toDoLists.filter(list => list.guid === guid);

    return (filtered.length ? filtered.shift() : null);
  }

  /**
   * Adds a new ToDo to a specific list
   * @param guid parent list guid
   * @param title toDo title
   */
  addTodo(guid: string, title: string): void {
    if (!guid || !title) {
      return;
    }

    const listIndex = this.getListIndex(guid);

    if (listIndex === -1) {
      return;
    }

    this.toDoLists[listIndex].toDos.push(new Todo(title));
    this.saveToLocalStorage();
  }

  /**
   * Toggles the completion status of a specific ToDo
   * @param guid parent list guid
   * @param toDoGuid toDo guid
   */
  toggleTodo(guid: string, toDoGuid: string): void {
    if (!guid || !toDoGuid) {
      return;
    }

    const listIndex = this.getListIndex(guid);

    if (listIndex === -1) {
      return;
    }

    const taskIndex = this.toDoLists[listIndex].toDos.map(toDo => toDo.guid).indexOf(toDoGuid);

    if (taskIndex === -1) {
      return;
    }

    const { title, completed } = this.toDoLists[listIndex].toDos[taskIndex];

    this.toDoLists[listIndex].toDos.splice(taskIndex, 1, new Todo(title, !completed));

    this.saveToLocalStorage();
  }

  /**
   * Gets the index of a list in the toDoLists array via its guid
   * @param guid list guid
   */
  getListIndex(guid: string): number {
    return this.toDoLists.map(list => list.guid).indexOf(guid);
  }

  /**
   * Saves data to localStorage (if possible)
   */
  private saveToLocalStorage(): void {
    if (localStorage) {
      try {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.toDoLists));
      } catch (e) { }
    }
  }
}
