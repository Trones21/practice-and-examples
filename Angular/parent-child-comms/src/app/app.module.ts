import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZbParentComponent } from './zb-parent/zb-parent.component';
import { ZbChildComponent } from './zb-child/zb-child.component';
import { SettingsComponent } from './settings/settings.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ZbParentComponent,
    ZbChildComponent,
    SettingsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
