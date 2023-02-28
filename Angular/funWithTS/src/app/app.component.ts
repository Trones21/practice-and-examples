import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <p>asdad</p>
  `
  ,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'funWithTS';

   my2DArr: twoDArr = [['X', 'X', 'O'], ['x', 'x']]
   console.log(my2DArr)

  myTuple: aTuple = ['abc', 3, '12', ['12']]

}

type aTuple = [string, number, string, string[]];
type twoDArr = Array<string[]>

//Proper way to declare and initialize a 2D Array in Typescript.