import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodo } from '../standalone/todos/interfaces';
import {
    IListGroup,
    ListGroupComponent,
} from '../common/components/list-group/list-group.component';

@Component({
    selector: 'counter',
    standalone: true,
    imports: [CommonModule, ListGroupComponent],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss',
})
export class CounterComponent {
    count = signal(0); // signal is like useState()
    todos = signal<ITodo[]>([
        {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        },
        {
            userId: 1,
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: false,
        },
        {
            userId: 1,
            id: 3,
            title: 'fugiat veniam minus',
            completed: false,
        },
    ]);

    props: IListGroup = {
        collection: this.todos(),
        propText: 'title',
    };

    // A computed signal that derives its value from the counter signal
    // doubleCounter = computed(() => this.counter() * 2);

    constructor() {
        // THIS LITERALLY useEffect from REACT
        // effect(() => {
        //     if (this.todos()) {
        //         this.props.collection = this.todos();
        //     }
        // });
    }

    addTodo() {
        const newTodo = {
            userId: 1,
            id: 3,
            title: 'Update array with signal',
            completed: false,
        };

        // To be use with useEffect
        // this.todos.update((prevState) => [newTodo, ...prevState]);

        // setState() with arrow function
        this.todos.update(() => {
            const newState = [newTodo, ...this.todos()];
            this.props.collection = newState;
            return newState;
        });
    }

    incrementSet() {
        this.count.set(5);
    }

    // Method to increment the counter using 'update'
    incrementUpdate() {
        this.count.update((prevState) => prevState + 1);
    }
    // Method to decrement the counter
    decrement() {
        this.count.set(this.count() - 1);
    }
}
