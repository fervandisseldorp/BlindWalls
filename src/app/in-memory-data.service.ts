import { InMemoryDbService } from 'angular-in-memory-web-api';
import {MuralService} from './mural.service';
import {Mural} from './mural';

export class InMemoryDataService implements InMemoryDbService {
  murals: Mural[];
  constructor(private muralService: MuralService) { }

  createDb() {
    this.muralService.getMurals()
      .subscribe((data: Mural[]) => {
          this.murals = data;
        },
        err => console.log(err));
    return (this.murals);
  }

}
