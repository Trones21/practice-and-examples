import { Component } from '@angular/core';

@Component({
  selector: 'app-zb-parent',
  template: `
  <app-zb-child 
    [data]="obj.data"
    (cookiesAccepted)="handleCookies()"
  ></app-zb-child>
  <app-zb-child></app-zb-child>
  <p>I am the parent</p>
  `,
  styleUrls: ['./zb-parent.component.css']
})
export class ZbParentComponent {
  obj = {
    data: 'Data sent from parent (like a prop in react)'
  }

  handleCookies(){
    console.log('Cookies Handled')
    //update cookies, maybe send an API call
  }

}
