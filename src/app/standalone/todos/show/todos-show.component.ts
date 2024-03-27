import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'todos-show',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './todos-show.component.html',
    styleUrl: './todos-show.component.scss',
})
export class TodosShowComponent {}
