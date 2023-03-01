import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { HomeComponentModule } from './home/home.component';
import { OrderListComponent } from './order-list/order-list.component';
@NgModule({
  declarations: [AppComponent, HomeComponentModule, OrderListComponent],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
