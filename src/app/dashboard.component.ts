import { Component, OnInit } from '@angular/core';

// import { Hero }        from './hero';
// import { HeroService } from './hero.service';
import {Mural} from './mural';
import {MuralService} from './mural.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    murals: Mural[] = [];

    constructor(private muralService: MuralService) { }

    ngOnInit(): void {
        // this.muralService.getMurals()
        //     .then(murals => this.murals = murals.slice(1, 5));
 //       this.muralService.getItems().then(rows => this.murals = rows);
        // this.muralService.getMural().subscribe(
        //     murals => {
        //         this.murals = murals;
        //     },
        //     err => {
        //         console.log('oops **** some error happened');
        //         // handle error
        //     });
    }
}
