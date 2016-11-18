// alert('hello');
// import {Observable,  Observer} from 'rxjs';
import { Observable } from 'rxjs/Observable';
import {Observer} from  'rxjs/Observer';
import  'rxjs/add/observable/from'
import  'rxjs/add/operator/map'
import  'rxjs/add/operator/filter'
let numbers = [1, 5, 10];
let source = Observable.from(numbers);
let anothersource = Observable.from(numbers);

let onemoresource= Observable.create(observer=>{
    let index = 0;
    let produce = ()=>{
        observer.next(numbers[index++]);
        if(index < numbers.length) {
            setTimeout(produce, 250);
        }else {
            observer.complete();
        }
    }
produce();
}).map(n => n * 2)
.filter(n => n > 4);
let yetanotherSource =  Observable.create(
    observer => {
        for (let n of numbers){
            if(n===5){
                observer.error("error occured");
            }
           observer. next(n);
        }
        observer.complete();
    }
);
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
    value => console.log(`anothersource call back value:${value}`),
    e => console.log(`error:${e}`),
    () =>console.log(`complete`)
);

yetanotherSource.subscribe(
    value => console.log(`yet another call back value:${value}`),
    e => console.log(`error:${e}`),
    () =>console.log(`complete`)
);

onemoresource.subscribe(
    value => console.log(`one another call back value:${value}`),
    e => console.log(`error:${e}`),
    () =>console.log(`complete`)
);