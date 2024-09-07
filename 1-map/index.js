const array = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 1, name: "Вася"}
];

const uniqueArray = [...new Set(array.map(item => item.id))]
    .map(id => array.find(item => item.id === id));

console.log(uniqueArray);