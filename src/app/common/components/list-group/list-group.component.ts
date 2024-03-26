/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IListGroup {
    collection: any[];
    propText: string;
}

@Component({
    selector: 'list-group-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './list-group.component.html',
    styleUrl: './list-group.component.scss',
})
export class ListGroupComponent {
    @Input() props = {} as IListGroup;
    @Output() onEmitEvent = new EventEmitter<any>();

    public activeIndex = -1;

    public setActiveIndex(index: number, item: any): void {
        this.activeIndex = index;
        this.onEmitEvent.emit(item);
    }
}
