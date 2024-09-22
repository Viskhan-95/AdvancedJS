"use strict"

const getData = (url, errorMessage) => {
    return fetch(url)
    .then(res => {
        if(!res.ok) {
            throw new Error(`${errorMessage}`);
        }
        return res.json();
    });
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Can not get ditto')
    .then(({ abilities }) => {
        return getData(abilities[0].ability.url, 'Can not get effect_entries')
        .then(({ effect_entries }) => {
            console.log(effect_entries[1].effect);
        })
        .catch(error => error.message);
    });
