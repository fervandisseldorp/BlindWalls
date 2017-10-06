import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Mural} from './mural';

@Injectable()
export class MuralService {

  private mural_url = 'https://api.blindwalls.gallery/apiv2/murals';

  constructor(private http: HttpClient) { }

  getMurals(): Observable<Mural[]> {
    return this.http.get(this.mural_url);
  }

  getMural(): Observable<Mural[]> {
    return this.http.get('/assets/mural.json');
  }
}

