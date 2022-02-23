enum StatusType { Active, Completed }

export interface TodoListItem {
    uid: number;
    name: string;
    date: Date;
    status: StatusType;
}