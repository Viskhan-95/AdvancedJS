"use strict"

class Car {
    #make;
    #model;
    #run;

    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    get getRun () {
        return this.#run;
    }

    set setRun (run) {
        if(this.#run >= run) {
            this.#run = run;
        }
        else {
            console.log('Нельзя скручивать пробег))')
        }
    }

    info() {
        console.log(this.#make, this.#model, this.#run);
    }
}

const audi = new Car('Audi', 'A3', '110 000');
console.log(audi);
audi.setRun = '10100';
console.log(audi.getRun);
audi.info();