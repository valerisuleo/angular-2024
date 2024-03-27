import { Routes } from '@angular/router';

export const usersRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./index.component').then((c) => c.IndexComponent),
    },
];
