import { ThisReceiver } from '@angular/compiler';
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

    visibleEditModal    = false;
    visibleFilterModal  = false;
    visibleAddModal     = false;
    modalName           = '';
    modalDate           = '';
    modalStatus         = '';
    listItem: any       = {};

    editItem(item: object) {
        this.visibleEditModal   = true;
        this.modalName          = item['name'];
        this.modalDate          = item['date'];
        this.modalStatus        = item['status'];
        this.listItem           = item;
    }

    saveItem() {
        this.visibleEditModal   = false;
        let nameInputValue      = (<HTMLInputElement>document.getElementById('item-name')).value;
        let dateInputValue      = (<HTMLInputElement>document.getElementById('item-date')).value;
        let statusInputValue    = (<HTMLInputElement>document.getElementById('item-status')).value;
        this.listItem['name']   = nameInputValue;
        this.listItem['date']   = dateInputValue;
        this.listItem['status'] = statusInputValue;
    }

    editFilter() {
        this.visibleFilterModal = true;
    }

    saveFilter() {
        this.visibleFilterModal = false;
        let dateInputValue      = (<HTMLInputElement>document.getElementById('item-date-filter')).value;
        let statusInputValue    = (<HTMLInputElement>document.getElementById('item-status-filter')).value;
        this.todoListHelper     = this.todoList;
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].date === dateInputValue && this.todoList[i].status === statusInputValue) {
                this.todoListFiltered.push(this.todoList[i]);
            }
        }
        this.todoList = this.todoListFiltered;
    }

    clearFilter() {
        this.todoList = this.todoListHelper;
        this.todoListFiltered = [];
    }

    openAddItemModal() {
        this.visibleAddModal = true;
    }

    addNewItem() {
        this.visibleAddModal = false;
        let nameInputValue      = (<HTMLInputElement>document.getElementById('item-name')).value;
        let dateInputValue      = (<HTMLInputElement>document.getElementById('item-date')).value;
        let statusInputValue    = (<HTMLInputElement>document.getElementById('item-status')).value;

        let newItem = { name: nameInputValue, date: dateInputValue, status: statusInputValue };
        this.todoList.push(newItem);
        if (this.todoListHelper.length > this.todoList.length) {
            this.todoListHelper.push(newItem);
        }
    }

    removeItem(itemName: string) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].name == itemName) {
                this.todoList.splice(i, 1);
                this.todoListHelper.splice(i, 1);
            }
        }
        if (this.todoListHelper.length === this.todoList.length) {
            this.todoListHelper = this.todoList;
        }
    }

    sortItems(sortMethod) {
        if (sortMethod === 'name') {
            this.todoList.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }
        else if (sortMethod === 'date') {
            this.todoList.sort((a, b) => {
                let fa = a.date.toLowerCase();
                let fb = b.date.toLowerCase();
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }

        else {
            this.todoList.sort((a, b) => {
                let fa = a.status.toLowerCase();
                let fb = b.status.toLowerCase();
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }
    }

    todoList: TodoListItem[] = [
        { name: "Eat", date: "2022-02-23", status: "Active" },
        { name: "Sleep", date: "2022-02-22", status: "Completed" },
        { name: "Read", date: "2022-02-21", status: "Active" },
        { name: "Exercise", date: "2022-02-20", status: "Completed" },
        { name: "Finish Labs", date: "2022-02-19", status: "Completed" },
        { name: "Play Games", date: "2022-02-19", status: "Completed" },
        { name: "Wash the car", date: "2022-02-19", status: "Completed" },
        { name: "Walk the dog", date: "2022-02-19", status: "Completed" },
    ];
    todoListHelper = this.todoList;
    todoListFiltered: TodoListItem[] = [];
}
