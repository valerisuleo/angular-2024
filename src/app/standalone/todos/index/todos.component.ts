import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../common/components/button/button.component';
import { ListGroupComponent } from '../../../common/components/list-group/list-group.component';
import { InputGroupComponent } from '../../../common/components/forms/input-group/input-group.component';
import { propsBtn, propsInput, propsList } from '../config';
import { TodosService } from '../todos.service';
import { HttpClientModule } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { ITodo } from '../interfaces';

@Component({
    selector: 'todos-list',
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss',
    standalone: true,
    providers: [TodosService],
    imports: [
        CommonModule,
        ListGroupComponent,
        ButtonComponent,
        InputGroupComponent,
        ReactiveFormsModule,
        HttpClientModule,
    ],
})
export class TodosComponent implements OnInit, OnDestroy {
    public todos: ITodo[] = [];
    public propsBtn = propsBtn;
    public propsInput = propsInput;
    public propsList = propsList;
    private destroyed$: Subject<boolean> = new Subject();

    constructor(private service: TodosService) {}

    public ngOnInit(): void {
        this.getTodos();
    }
    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

    private getTodos(): void {
        const params = '?_limit=10';
        this.service
            .get(params)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((response: ITodo[]) => {
                this.propsList.collection = response;
            });
    }

    public newTodo = new FormGroup({
        title: new FormControl(''),
    });

    public handleEvent(current: ITodo): void {
        console.log('fire', current);
    }

    public handleSubmit(e: Event): void {
        e.preventDefault();
        const { title } = this.newTodo.value;
        const newTodo = {
            id: 4,
            userId: 1,
            title: title,
            completed: true,
        } as ITodo;

        this.propsList.collection = [newTodo, ...this.propsList.collection];
        this.newTodo.reset();
    }
}
