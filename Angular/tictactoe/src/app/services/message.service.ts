import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'

})

export class MessageService{
    private moveEmitter$ = new BehaviorSubject<string>('Start Game')

    public pushMsg(msg: string ): void {
        console.log('svc pushMsg ->', msg)
        this.moveEmitter$.next(msg)
    }
    public getMsg(): Observable<string> {
        console.log('svc getMsg -> ', this.moveEmitter$)
       return this.moveEmitter$;
    }
}