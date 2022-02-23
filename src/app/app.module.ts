import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
