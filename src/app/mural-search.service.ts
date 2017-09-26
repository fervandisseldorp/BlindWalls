import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Mural }           from './mural';

@Injectable()
export class MuralSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Mural[]> {
        return this.http
            .get(`https://api.blindwalls.gallery/apiv2/${term}`)
            .map(response => response.json().data as Mural[]);
    }
}
