import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button class="btn btn-secondary btn-lg"
    (click)="handleClick(mybtn.value)"
    #mybtn
  >
    {{playerMark}}
  </button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input('playerMark') playerMark: string = '';
  @Output() squareClicked = new EventEmitter<string>();
  
  //markFinal: string = ''


  handleClick(ev: string){
    console.log(ev)
    //Set local state to update square
    //this.markFinal = this.playerMark;
    
    //console.log(ev.btnval)
    //console.log(ev.target)
    this.squareClicked.emit('ww')
  }

}
