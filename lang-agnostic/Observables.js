const observer = {
    next: (data) => console.log('My next was called with', data),
    complete: () => console.log('The observable has finished emitting data'),
    error: (err) => console.log('The following error ocurred', err)
}

const myObservable$ = (observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.complete();
}

myObservable$(observer);