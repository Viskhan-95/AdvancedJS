const diceSides = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d16: 16,
    d20: 20,
};

const dice = diceType => {
    const sides = diceSides[diceType];
    if(!sides) {
        return 'Неправильная грань';
    }

    return Math.floor(Math.random() * sides) + 1;
}

console.log(dice('d5'))