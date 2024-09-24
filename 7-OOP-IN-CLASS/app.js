"use strict"

class Personage {
    #name;
    #language;

    constructor(race, name, language) {
        this.race = race;
        this.#name = name;
        this.#language = language;
    }

    speak() {
        console.log(this.#name, this.#language);
        return this;
    }
}


class Ork extends Personage {
    constructor(name, language) {
        super('Ork', name, language);
        this.weapon = true;
    }

    hit() {
        console.log('Hit him');
        return this;
    }

    speak() {
        console.log('Переопределил метод говорить для Ork')
    }
};


class Elf extends Personage {
    constructor(name, language) {
        super('Elf', name, language);
        this.spell = true;
    }

    createSpell() {
        console.log("The spell is created");
        return this;
    }

    speak() {
        console.log('Переопределил метод говорить для Elf')
    }
}

const ork = new Ork('Chapai', 'English');
const elf = new Elf('Petka', 'Russish');

console.log(ork);
console.log(elf);

ork.hit();
elf.createSpell();

ork.speak();
elf.speak();