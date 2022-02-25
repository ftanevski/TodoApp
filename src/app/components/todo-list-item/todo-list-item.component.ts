import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from 'src/app/models/TodoListItem';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
    @Input() todoListItem: TodoListItem;
    @Output() removeItemEvent = new EventEmitter<string>();
    @Output() editItemEvent = new EventEmitter<object>();

    removeItem(name: string) {
        this.removeItemEvent.emit(name);
    }

    editItem(item: object) {
        this.editItemEvent.emit(item);
    }

    constructor() { }

    ngOnInit(): void {
    }

}
