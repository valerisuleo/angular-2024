import { Route } from '@angular/router';
import { TodosShowComponent } from './show/todos-show.component';

export const todosRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./index/todos.component').then((c) => c.TodosComponent),
    },
    { path: ':id', component: TodosShowComponent },
];
