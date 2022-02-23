import { Component, OnInit, Input } from '@angular/core';
import { TodoListItem } from 'src/app/models/TodoListItem';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
    @Input() todoListItem: TodoListItem;

    constructor() { }

    ngOnInit(): void {
    }

}
