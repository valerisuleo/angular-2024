import { Route } from '@angular/router';
import { CounterComponent } from './signal/counter.component';

export const appRoutes: Route[] = [
    {
        path: 'todos',
        loadChildren: () => import('./standalone/todos/routes').then((r) => r.todosRoutes),
    },
    { path: 'signal', component: CounterComponent },
    { path: '**', redirectTo: 'todos' },
];
