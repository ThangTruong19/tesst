import { ToDoItem } from "./ToDoItem";
export class Model {
  public user: string;
  public items: ToDoItem[];
  constructor() {
    this.user = 'Adam';
    this.items = [new ToDoItem("Buy Flowers",false),
                  new ToDoItem("Get Shoes",true),
                  new ToDoItem("Collect Tickets",false),
                  new ToDoItem("Call Joe",false)];
  }
}
