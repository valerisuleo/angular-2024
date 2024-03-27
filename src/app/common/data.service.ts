import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class DataService<T> {
    constructor(@Inject(String) private url: string, private http: HttpClient) {}

    public get(queryParams?: string): Observable<T[]> {
        const url = queryParams ? `${this.url}/${queryParams}` : this.url;
        return this.http.get<T[]>(url);
    }

    public post(payload: T): Observable<T> {
        return this.http.post<T>(this.url, payload);
    }

    public put(resource: T, key: keyof T): Observable<T> {
        return this.http.put<T>(`${this.url}/${resource[key]}`, resource);
    }

    public delete(resource: T, key: keyof T): Observable<T> {
        return this.http.delete<T>(`${this.url}/${resource[key]}`);
    }
}
