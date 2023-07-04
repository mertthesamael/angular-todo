import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
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

}
