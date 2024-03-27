import { Route } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'todos' },
    { path: 'todos', component: TodosComponent },
];
