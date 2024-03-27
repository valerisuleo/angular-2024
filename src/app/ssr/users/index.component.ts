import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from './user.service';
import { StateTransferService } from '../../common/state-transfer.service';
import { IUser } from './interface';
import {
    IListGroup,
    ListGroupComponent,
} from '../../common/components/list-group/list-group.component';

@Component({
    selector: 'user-index',
    standalone: true,
    imports: [CommonModule, HttpClientModule, ListGroupComponent],
    providers: [UserService, StateTransferService],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit, OnDestroy {
    private queryKey = 'users';
    private destroyed$: Subject<boolean> = new Subject();
    public listProps: IListGroup = {
        collection: [],
        propText: 'name',
    };

    constructor(
        private userService: UserService,
        private state: StateTransferService
    ) {}

    public ngOnInit(): void {
        if (this.state.hasKey(this.queryKey)) {
            this.listProps.collection = this.state.get<IUser[]>(this.queryKey, []);
        } else {
            this.getUsers();
            console.log('fire');
        }
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

    public getUsers(): void {
        this.userService
            .get()
            .pipe(takeUntil(this.destroyed$))
            .subscribe({
                next: (response: IUser[]) => {
                    this.state.set(this.queryKey, response);
                    this.listProps.collection = response;
                },
            });
    }
}
