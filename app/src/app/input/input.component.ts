import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { DataService } from '../data.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone:true,
  imports:[MatInputModule,MatButtonModule,MatFormFieldModule,FormsModule]
  
})

export class InputComponent {
  constructor(private dataService: DataService){}
  updateTodo:any;
  inputValue!: string;

  ngOnInit(){
    this.dataService.getNewTodoInfo().subscribe(info => {
      this.updateTodo = info
    })
  }
  handleClick(){
    
    this.dataService.setNewTodoInfo([
      ...this.updateTodo,
        {
          content:this.inputValue,
          id:4,
          status:false
        }
      ]
    )
    this.inputValue = ''
  }
}
