import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Blind Walls Gallery';
  mDisplay = 'block';

  changeDisplay() {
    if (this.mDisplay === 'block') {
      this.mDisplay = 'none';
    } else {
      this.mDisplay = 'block';
    }
  }

  getVisibility(newValue: number) {
    if (newValue === 0 && this.mDisplay === 'block') {
      return 'none';
    } else if (newValue === 0 && this.mDisplay === 'none') {
      return 'block';
    } else {
      return this.mDisplay;
    }
  }
}
