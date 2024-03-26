import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, IBtn } from '../common/components/button/button.component';
import {
    IListGroup,
    ListGroupComponent,
} from '../common/components/list-group/list-group.component';
import {
    InputGroupComponent,
    InputGroup,
} from '../common/components/forms/input-group/input-group.component';

interface ITodo {
    id: number;
    task: string;
    done: boolean;
}
@Component({
    selector: 'todos-list',
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        ListGroupComponent,
        ButtonComponent,
        InputGroupComponent,
        ReactiveFormsModule,
    ],
})
export class TodosComponent {
    public items = [
        { id: 1, task: 'washing', done: false },
        { id: 2, task: 'cleaning', done: false },
        { id: 3, task: 'homework', done: false },
        { id: 4, task: 'sleep', done: false },
        { id: 5, task: 'buy shoes', done: false },
    ];

    public newTodo = new FormGroup({
        taskName: new FormControl(''),
    });

    public handleEvent(current: ITodo): void {
        console.log('fire', current);
    }

    public handleSubmit(e: Event): void {
        e.preventDefault();
        const { taskName } = this.newTodo.value;
        const newTodo = {
            id: 4,
            task: taskName,
            done: true,
        } as ITodo;

        this.items.unshift(newTodo);
    }

    public propsList: IListGroup = {
        collection: this.items,
        propText: 'task',
    };

    public propsBtn: IBtn = {
        label: 'Save',
        type: 'submit',
        classes: {
            contextual: 'primary',
            size: 'md',
        },
    };
    public propsInput: InputGroup = {
        label: 'New todo',
        name: 'taskName',
        type: 'text',
    };
}
