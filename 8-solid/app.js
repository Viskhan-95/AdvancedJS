"use strict"

class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        //Реализация будет в дочерних классах
    }
}

class FixBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    calculateTotal() {
        return this.amount * this.items;
    }
}


const fixBilling = new FixBilling(100);
console.log(fixBilling.calculateTotal()); 

const hourBilling = new HourBilling(60, 10);
console.log(hourBilling.calculateTotal());

const itemBilling = new ItemBilling(25, 40);
console.log(itemBilling.calculateTotal());