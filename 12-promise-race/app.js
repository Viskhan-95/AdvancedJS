"use strict"

function race(arrayPromise) {
    return new Promise((resolve, reject) => {
        arrayPromise.forEach(promise => {
            Promise.resolve(promise)
            .then(resolve)
            .catch(reject);
        });
    });
}


function isPromise(promise) {
    return promise instanceof Promise;
  }

function race2(arrayPromise) {
    return new Promise((resolve, reject) => {
        arrayPromise.forEach(promise => {
            if(!isPromise(promise)) {
                return;
            } else {
                promise
                    .then(resolve)
                    .catch(reject);
            }
        });
    });
}


const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Промис 1 выполнен!"), 501);
  });
  
const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Промис 2 выполнен!"), 500);
  });

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Промис 3 выполнен!"), 499);
  });

  race([promise1, promise2, promise3]).then(data => console.log(data));
  race2([promise1, promise2]).then(data => console.log(data));
