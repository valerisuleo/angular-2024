/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IBtn {
    label: string;
    classes: IClasses;
    type: 'button' | 'submit' | 'reset';
}

interface IClasses {
    custom?: string;
    size: 'lg' | 'sm' | 'md';
    contextual:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'danger'
        | 'close';
}

@Component({
    selector: 'button-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    @Input() props = {} as IBtn;
    @Output() onEmitEvent = new EventEmitter<void>();

    emitEvent() {
        this.onEmitEvent.emit();
    }
}
