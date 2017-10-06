import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

// import 'rxjs/add/operator/toPromise';

 import {  } from './mural';
// import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MuralService {

    // private headers = new Headers({'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1
    // NiJ9.eyJpc3MiOiJibGluZHdhbGwiLCJleHAiOjE0NzcwNTUyNDM4Mzd
    // 9.xCUtndY08RdDTVFaSdocsfdsZZ1m4-Zu6lxrgqt5GOQ', 'Content-Type': 'application/json'});
    url: string = 'https://api.blindwalls.gallery/apiv2/murals';

    constructor(private http: Http) { }

    // getItems() {
    //     return this.http.get('https://api.blindwalls.gallery/apiv2/murals', { headers: this.headers})
    //         .toPromise()
    //         .then(res => <Mural[]> res.json().data)
    //         .then(data => { return data; });
    // }

    // getMurals(): Promise<Mural[]> {
    //     return this.http
    //         .get('https://api.blindwalls.gallery/apiv2/murals', {headers: this.headers})
    //         .toPromise()
    //         .then(response => response.json().data as Mural[])
    //         .catch(this.handleError);
    // }
    //
    // getMural(): Observable<any> {
    //     return this.http
    //         .get(this.url, { headers: this.headers })
    //         .map((res: Response) => {
    //             <Mural[]> res.json();
    //         });
    // }
    //
    // getRecommendations() {
    //     return this.http.get(this.url).map(res => res.json());
    // }
    //
    // private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
}

