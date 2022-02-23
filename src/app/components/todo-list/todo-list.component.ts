import { Component, OnInit } from '@angular/core';
import { TodoListItem } from 'src/app/models/TodoListItem';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }

    todoList: TodoListItem[] = [
        { uid: 0, name: "Eat", date: new Date("2022-02-23"), status: 0 },
        { uid: 1, name: "Sleep", date: new Date("2022-02-22"), status: 1 },
        { uid: 2, name: "Read", date: new Date("2022-02-21"), status: 1 },
        { uid: 3, name: "Exercise", date: new Date("2022-02-20"), status: 0 },
        { uid: 4, name: "Play Games", date: new Date("2022-02-19"), status: 0 }
    ];
}
