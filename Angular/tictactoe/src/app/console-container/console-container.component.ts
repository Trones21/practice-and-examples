
import { Component, OnInit } from '@angular/core';
import { Observable, scan } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-console-container',
  template: `
  <p>Console</p>
  <p *ngFor="let message of messages$ | async" >{{message}}</p>
  <!-- <p *ngFor="let message of msgsArr" >{{message}}</p> -->
  `,
  styleUrls: ['./console-container.component.scss']
})
export class ConsoleContainerComponent implements OnInit{
  public messages$: Observable<string[]> | undefined
  public msgsArr: string[] = []; 
  constructor(private msgsvc: MessageService){}

  ngOnInit(): void {
    // this.messages$ = this.msgsvc.getMsgs() //get initial msg
    //this.msgsvc.getMsg().subscribe({next: msg => {this.msgsArr.push(msg)}})
    this.messages$ = this.msgsvc
    .getMsg()
    .pipe(scan((acc: string[], x: string) => [...acc, x], []));
    
  }
  
}
