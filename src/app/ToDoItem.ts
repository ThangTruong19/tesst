export class ToDoItem {
  public action: string;
  public done: boolean;
  constructor(action,done) {
    this.action = action;
    this.done = done;
  }
}
