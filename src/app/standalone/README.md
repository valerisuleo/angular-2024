# Standalone Components in Angular

## Introduction

Welcome to our guide on leveraging Angular's standalone components, an exciting new feature that simplifies the Angular ecosystem by allowing the creation of components without the dependency on `@NgModule`. This capability streamlines the component-building process and opens up new possibilities for optimizing your applications.

## Table of Contents

- [What & Why](#what--why)
- [Basic Standalone Components](#basic-standalone-components)
- [Adding Services](#adding-services)
- [Routing & Lazy Loading](#routing--lazy-loading)

## What & Why

Standalone components represent a shift in how we structure Angular applications. The primary benefits include:

- **Simplicity**: Eliminating the need for `@NgModule` reduces boilerplate and complexity.
- **Encapsulation**: Components can be more self-contained, promoting better encapsulation.
- **Reusability**: Easier to reuse components across different parts of your application or even across different projects.
- **Lazy Loading**: Standalone components can be lazily loaded, improving initial load times and performance.

## Basic Standalone Components

Creating a basic standalone component involves using the `standalone: true` configuration within the `@Component` decorator. This signals to Angular that the component is self-sufficient and does not require an associated NgModule.


```typescript
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  // Service logic here
}

```

or we can inject them in the `providers`


```

@Injectable()
export class MyService {
  // Service logic here
}

@Component({
  selector: 'todos-list',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  standalone: true,
  providers: [TodosService],
})
export class TodosListComponent {
  // Component logic here, leveraging TodosService
}

```


Alright! Let's update the Routing & Lazy Loading section to match the provided code snippets:

---

## Routing & Lazy Loading

Angular's standalone components simplify the routing and lazy loading setup. With the new model, you can define routes and lazy load components with ease. Here's an example of how routing is configured in our application using standalone components.

### Todos Routing

For the todos section of our application, we have a setup that allows us to lazy load components based on the user's navigation:

```typescript
import { Route } from '@angular/router';
import { TodosShowComponent } from './show/todos-show.component';

export const todosRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./index/todos.component').then((c) => c.TodosComponent),
    },
    { path: ':id', component: TodosShowComponent },
];
```

In this setup, navigating to the base todos path (`''`) will lazy load `TodosComponent`. Additionally, a specific todo can be displayed by navigating to `':id'`, where `TodosShowComponent` will be used.

### App Routing

The main application routing is defined to handle different sections of the app, including todos and signals, as well as a default redirect:

```typescript
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
```

Here, the `todos` path leverages the new lazy loading capability with standalone components, while the `signal` path directly references the `CounterComponent`. A wildcard route (`'**'`) redirects all other paths to the todos section, ensuring a smooth user experience.


For more in-depth information, refer to the official [Angular documentation](https://angular.io/guide/standalone-components).

Happy coding!
