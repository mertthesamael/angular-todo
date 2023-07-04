import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor() { }

  private todos = new BehaviorSubject<any>([{
    id:1,
    content:'Do dishes',
    status:false
  },
  {
    id:2,
    content:'Do dishes',
    status:false
  }

]);

  setNewTodoInfo(todo: any) {
    this.todos.next(todo);
  }

  getNewTodoInfo() {
    return this.todos.asObservable();
  }




}