import { Injectable } from '@angular/core';
import { DataService } from '../../common/data.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from './interface';

@Injectable()
export class UserService extends DataService<IUser> {
    constructor(http: HttpClient) {
        super('https://jsonplaceholder.typicode.com/users', http);
    }
}
