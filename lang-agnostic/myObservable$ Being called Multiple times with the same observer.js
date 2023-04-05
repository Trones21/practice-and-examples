const myObservable$ = (observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.complete();
}


const observerOne = {
    next: (data) => console.log('My next was called with', data),
    complete: () => console.log('The observable has finished emitting data'),
    error: (err) => console.log('The following error ocurred', err)
}
const observerTwo = {
    next: (data) => console.log('Double the data double the fun!', data * 2),
    complete: () => console.log('The observable has finished emitting data'),
    error: (err) => console.log('The following error ocurred', err)
}
const observerThree = {
    next: (data) => console.log('You call that doubling?', data, data),
    complete: () => console.log('The observable has finished emitting data'),
    error: (err) => console.log('The following error ocurred', err)
}
myObservable$(observerOne);
myObservable$(observerTwo);
myObservable$(observerThree);
myObservable$(observerOne);