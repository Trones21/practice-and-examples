import { Component, EventEmitter, Input, Output} from '@angular/core';

//Child components should be dumb we don't want them to make calls to services
//A "dumb" component should not know anything about what is happening outside of the component itself. It has its inputs, its outputs, it displays some stuff, and that's about it (we will talk about this more later).
//https://ionicstart.com/standard/modules/basic-angular-concepts/5/
@Component({
  selector: 'app-zb-child',
  template: `<p>Child Template <- -> {{data}}</p>
  <p>Do you accept cookies</p>
  <button (click)='cookiesAccepted.emit(true)'>I Accept!</button>
  `,
  styleUrls: ['./zb-child.component.css']
})
export class ZbChildComponent {
   @Input() data = 'Input not passed, default value shown'
   @Output() cookiesAccepted = new EventEmitter();
}

//An input or an output works well when a component is a direct child of another component, 
//but what about a situation where our components are siblings?
//See Settings Page and Order Page examples
  //We typically use an injectable service to shre data between both pages
  //Or what about simply using a data store (whether that's localStorage or a state mgmt tool)