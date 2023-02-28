import { Node } from "@angular/compiler";
import { Component, OnInit, Input } from "@angular/core";


@Component({
    selector: 'sync',
    template: `
    <label for="size">Size:</label>
    <select id="size"
    (change) = "setSelectedSize($event)"
     >
        <option
        *ngFor="let size of sizes"
        [value]="size.val"
        [selected]='size.val === 10'
        >
      {{ size.name }}
    </option>
  </select> 
    `,
  })


  export class SyncComponent{
    sizes = [
      { val: 20, name: 'Large' },
      { val: 10, name: 'Medium' },
      { val: 0, name: 'Small' },
    ];
  
   selectedSize = this.sizes[1];
    
    setSelectedSize(ev: Event) {
        console.log(ev)
        let tgt = ev.target as HTMLElement
        let selOpt: any = Array.from(tgt.children).filter((i: any) => i.selected === true)[0]
        console.log(selOpt.value)
    }

  //   setSelectedSize(evNum: any) {
  //     console.log(evNum)
  //   for (let size of this.sizes) {
  //     if (size.val == evNum) {
  //       this.selectedSize = size;
  //     }
  //   }
  //   console.log(this.selectedSize)
  // }
}



//<!-- [(ngModel)]="selectedSize"  -->
  

// <label for="slider">Size</label>
// <div class="slider">
//   <input type="range" 
//   min="0" max="20" value={{selectedSize.val}}
//   />
// </div>


// sliderHandler(ev: any){  //SO question value does not exist on EventTarget
//   console.log(ev)
//   let num = ev.target?.value;
//   if(num < 10){
//   this.selectedSize = this.sizes[2]
// }
// console.log(this.selectedSize)
// }