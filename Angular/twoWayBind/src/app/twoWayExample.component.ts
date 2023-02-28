import { Component } from '@angular/core';


@Component({
  selector: 'twoway-example',
  template: `
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" >
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" >
  <div> test </div>
  `,
})
export class TwoWayExampleComponent {
  email = 'me@example.com';

  onKeyUp() {
    console.log(this.email);
  }
}

// 
