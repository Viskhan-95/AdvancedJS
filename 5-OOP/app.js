"use strict"

const Personage = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Personage.prototype.speak = function() {
    console.log(this.name, this.language);
}

const ork = new Personage('Ork', 'Chapai', 'English');
ork.weapon = true;

ork.hit = function () {
    console.log('Hit him');
}

const elf = new Personage('Elf', 'Petka', 'Russish');
elf.spell = true;

elf.createSpell = function() {
    console.log("The spell is created")
}

console.log(ork);
console.log(elf);

ork.hit();
elf.createSpell();