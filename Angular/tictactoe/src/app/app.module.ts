import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsoleContainerComponent } from './console-container/console-container.component';
import { BoardRxJSComponent } from './board-rxjs/board.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    BoardRxJSComponent,
    SquareComponent,
    ConsoleContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
