import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-game></app-game>
  `,
  styleUrls: ['./app.component.scss', '../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {
  title = 'tictactoe';

}
