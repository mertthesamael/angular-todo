import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent {
  updateTodo:any;
  constructor(private dataService: DataService){}

  ngOnInit(){
    this.dataService.getNewTodoInfo().subscribe(info => {
      this.updateTodo = info
    })
  }

}
