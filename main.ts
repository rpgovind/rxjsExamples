// alert('hello');
import {Observable,  Observer} from 'rxjs';

let numbers = [1, 5, 10];
let source = Observable.from(numbers);
let anothersource = Observable.from(numbers);
class MyObserver implements Observer<number>{
    next (value){
        console.log(`value:${value}`);
    }
    error(e) {
        console.log(`error:${e}`);
    }
    complete() {
        console.log(`complete`);
    }
}


//source.subscribe(new MyObserver());

//alternate method without using class overhead
source.subscribe(
    value => console.log(`call back value:${value}`),
    e => console.log(`error:${e}`),
    () =>console.log(`complete`)
);
anothersource .subscribe(
    value => console.log(`call back value:${value}`),
    e => console.log(`error:${e}`),
    () =>console.log(`complete`)
);