import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  template:`
  <!-- <app-board></app-board> -->
  <app-board-rxjs></app-board-rxjs>
  <app-console-container></app-console-container>
  `, 
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

}
