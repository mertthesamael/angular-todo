import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { DataService } from './data.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputComponent } from './input/input.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
    AppComponent,
    ContainerComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    InputComponent
    


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
