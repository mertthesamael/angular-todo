import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {

  todos:any;
  constructor(private dataService: DataService){}

  ngOnInit(){
    this.dataService.getNewTodoInfo().subscribe(info => {
      this.todos = info
    })
  }
  removeTodo(id:number){
    const newTodos = this.todos.filter((el:any) => el.id!==id)
    this.dataService.setNewTodoInfo(newTodos)
  }

  todoHandle(id:number,status:boolean){
   
      this.dataService.updateTodoStatus(id,status)
   console.log(this.todos)
  }
  
  getButtonStyle(status: boolean): any {
    return { 'background-color': status ? 'green' : 'red' };
  }
}
