export class Todo {
  constructor(
    public title: string,
    public completed: boolean = false,
    public readonly created: Date = new Date(),
    public readonly guid: string = `${title}-${created.getTime()}`
  ) { }
}
