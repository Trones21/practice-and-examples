import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `
  <!-- <twoway-example></twoway-example> -->
  <sync></sync>
  ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twoWayBind';
}
