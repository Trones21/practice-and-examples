import { Component } from '@angular/core';


// 
//<!-- (click)='test("evsdd")' -->
@Component({
  selector: 'app-board',
  template: `
   <div>
        <div className="status">Winner: {{winner}}</div>
        <button class="btn btn-warning" (click)="reset()">Reset</button>
        <div className="board-row">
            <app-square 
            (click) = 'updateBoard({row: 0, col: 0})'
            (squareClicked)="parentFunc($event)"
            [playerMark]="gb[0][0]"
            ></app-square>
            <app-square 
            (click) = 'updateBoard({row: 0, col: 1})'
            (squareClicked)="parentFunc($event)"
            [playerMark]="gb[0][1]"
            ></app-square>
            <app-square 
            (click) = 'updateBoard({row: 0, col: 2})'
            (squareClicked)="parentFunc($event)"
            [playerMark]="gb[0][2]"
            ></app-square>
        </div>
        <div className="board-row">
          <app-square 
            (click) = 'updateBoard({row: 1, col: 0})'
            (squareClicked)="parentFunc($event)"
            [playerMark]="gb[1][0]"
            ></app-square>
            <app-square 
            (click) = 'updateBoard({row: 1, col: 1})'
            (squareClicked)="parentFunc($event)"
            [playerMark]="gb[1][1]"
            ></app-square>
            <app-square 
            (click) = 'updateBoard({row: 1, col: 2})'
            (squareClicked)="parentFunc($event)"
            [playerMark]="gb[1][2]"
            ></app-square>
        </div>
        <div className="board-row">
          <app-square 
            (click) = 'updateBoard({row: 2, col: 0})'
            (squareClicked)="parentFunc($event)"
            [playerMark]="gb[2][0]"
            ></app-square>
            <app-square 
            (click) = 'updateBoard({row: 2, col: 1})'
            (squareClicked)="parentFunc($event)"
            [playerMark]="gb[2][1]"
            ></app-square>
            <app-square 
            (click) = 'updateBoard({row: 2, col: 2})'
            (squareClicked)="parentFunc($event)"
            [playerMark]="gb[2][2]"
            ></app-square>
        </div>
      </div>
  `,
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  constructor(private window: Window){
    // console.log(window, '<--window')
    // this.window = window;
    //I was going to attempt to put potentialWinningCombos on the window object,
    //but I'll wait to see what stackoverflow offers
    //...the game works, this is just exploration
    //https://stackoverflow.com/questions/75552611/use-references-pointers-to-js-array-declared-outside-of-function?noredirect=1#comment133297626_75552611
  }


  players: [string, string] = ['X', 'O']
  currentPlayer: string = this.players[1]
  winner: string = ''
  gb: string[][]= [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ] 



checkForWin(){

  let potentialWinningCombos = [
  //Horizontal
  [this.gb[0][0], this.gb[0][1], this.gb[0][2]],
  [this.gb[1][0], this.gb[1][1], this.gb[1][2]],
  [this.gb[2][0], this.gb[2][1], this.gb[2][2]],
  //Vertical
  [this.gb[0][0], this.gb[1][0], this.gb[2][0]],
  [this.gb[0][1], this.gb[1][1], this.gb[2][1]],
  [this.gb[0][2], this.gb[1][2], this.gb[2][2]],
  //Diagonal
  [this.gb[0][0], this.gb[1][1], this.gb[2][2]],
  [this.gb[0][2], this.gb[1][1], this.gb[2][0]],
]

  for(let combo of potentialWinningCombos){  
    let counts: any = {}   
    for(let i of combo){
        if(counts[i]){
            counts[i] += 1
        }else{
            counts[i] = 1;
        }
    }
    //Empty strings cant win
    counts[""] = 0;

    for(let k of Object.keys(counts)){
        if(counts[k] == 3){
            console.log(counts[k], "Winner")
            this.winner = k;
        }
    }
  }
}

reset(){
  this.winner = '';
  this.gb = this.gb.map(r => r.map(c =>  c = ''));
  this.gb[0][0] = ''
}

  updateBoard(pos: position ){
    //Ignore attempts to play positions that have already been played
    if(this.gb[pos.row][pos.col] == ''){
      this.gb[pos.row][pos.col] = this.currentPlayer;
      this.checkForWin();
      this.nextPlayer();
    }


      // if(!this.checkForAndSetWinner(this.currentPlayer)){
      //   this.nextPlayer()
      // }else{
      //   console.log(this.winner, '<-- winner')
      // }

  }

  nextPlayer(){
    if(this.currentPlayer == this.players[0]){
      this.currentPlayer = this.players[1]
    } else {
      this.currentPlayer = this.players[0]
    }
  }


  checkForAndSetWinner(player: string){
    for(let r of this.gb){
      //To avoid empty string wins (the board setup at the beginning)
      if(r[0] == player){
        //This checks Horiztonally
        if(r[0] == r[1] && r[0] == r[2]){
          this.winner = player
        }
      }

    }
    //This check Vertically
    for(let x = 0; x <= 2; x++){
      if(this.gb[0][x] == player){
        if(this.gb[0][x] == this.gb[1][x] && this.gb[1][x] == this.gb[2][x])
          this.winner = player
      }
      
    }

    //Now Diagonals
    if(this.gb[0][0] == player){
      if(this.gb[0][0] == this.gb[1][1] && this.gb[1][1] == this.gb[2][2]){
        this.winner = player
        }
    }

    if(this.gb[0][2] == player){
      if(this.gb[0][2] == this.gb[1][1] && this.gb[1][1] == this.gb[2][0]){
        this.winner = player
        }
      }

    if(this.winner != ''){
      return true 
    }else{
      return false
    }
  }

  parentFunc(str: string){
    console.log(str, '<-- from vchild')
  }
}


interface position{
  row: number,
  col: number
}

