import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

export interface InputGroup {
    type: string;
    label: string;
    name: string;
    placeholder?: string;
}

@Component({
    selector: 'input-group-component',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './input-group.component.html',
    styleUrl: './input-group.component.css',
})
export class InputGroupComponent {
    @Input() props = {} as InputGroup;
    @Input() formGroup!: FormGroup;
}
