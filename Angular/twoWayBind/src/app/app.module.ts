import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TwoWayExampleComponent } from './twoWayExample.component';
  import { SyncComponent } from './sync.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayExampleComponent,
    SyncComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
