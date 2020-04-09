import { Component } from '@angular/core';
import { Model } from './model';
import { ToDoItem } from './ToDoItem';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string;
  public items: ToDoItem[];
  public newTask: string;
  private _model: Model;

  constructor(){
    this._model = new Model();
    this.name = this._model.user;
    this.items = this._model.items;
    this.newTask = "";
  }

  public changeDone(index: any){
    for(let i in this.items){
      if(i == index){
        if(this.items[i].done == true){
          this.items[i].done = false;
        }else {
          this.items[i].done = true;
        }
      }
    }
  }

  public addItem(){
    this.items.push(new ToDoItem(this.newTask,false));
  }

}
