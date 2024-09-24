"use strict"

const buttons = document.querySelector('.buttons');
const counter = document.querySelector('.counter');

let count = 0;

// Функция создает кнопки и добавляет в buttons
function createButtons (countButton) {
    for (let i = 0; i < countButton; i++) {
        const el = document.createElement('button');
        el.textContent = 'Нажми меня';
        el.className = 'button';
        el.addEventListener('click', () => updateTextContent(i))
        buttons.appendChild(el);
    }
}

// Функция обновляет текст кнопки и счетчик
const updateTextContent = clickedIndex => {
    counter.innerHTML = ++count;

    buttons.childNodes.forEach((button, index) => {
        button.textContent = clickedIndex === index ? 'Нажата' : 'Нажми меня'
    });
}

createButtons(5);