const observer = {
  next: (value) => {return null},
  error: (err) => ,
  complete: () => void ,
}

class Observable {
  constructor(private _subscribe: (observer) => void) {}
  subscribe(observer) {
    this._subscribe(observer);
  }
}


const emitOneToFive$ = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
  observer.next(5);
});
