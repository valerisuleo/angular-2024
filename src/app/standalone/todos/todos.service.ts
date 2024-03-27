import { Injectable } from '@angular/core';
import { DataService } from '../../common/data.service';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './interfaces';

@Injectable()
export class TodosService extends DataService<ITodo> {
    constructor(http: HttpClient) {
        super('https://jsonplaceholder.typicode.com/todos', http);
    }
}
