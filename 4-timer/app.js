"use strict"
//Функция определяет окончание
function formatWordWithNumber(number, wordForms) {
    const absNumber = Math.abs(number) % 100;
    const lastDigit = absNumber % 10;

    if (absNumber > 10 && absNumber < 20) {
        return wordForms[2]; 
    }
    if (lastDigit > 1 && lastDigit < 5) {
        return wordForms[1];
    }
    if (lastDigit === 1) {
        return wordForms[0];
    }
    return wordForms[2];
}

const main = document.getElementById('main');

//Функция создает элементы и добавляет в body
function createElementCanvas(elementID) {
    const canvas = document.createElement('canvas');
    canvas.id = elementID;
    canvas.width = 230;
    canvas.height = 230;
    main.appendChild(canvas);

    return canvas;
}

const monthsElement = createElementCanvas('canvas-months');
const daysElement = createElementCanvas('canvas-days');
const hoursElement = createElementCanvas('canvas-hours');
const minutesElement = createElementCanvas('canvas-minutes');
const secondsElement = createElementCanvas('canvas-seconds');

//Функция перевода времени в градусы
function timeToAngle(time, stringTime) {
    switch(stringTime) {
        case 'seconds' : 
        case 'minutes' : return (time / 60) * 2 * Math.PI - Math.PI / 2;
        case 'hours' : return (time / 24) * 2 * Math.PI - Math.PI / 2;
        case 'days' : return (time / 30) * 2 * Math.PI - Math.PI / 2;
        case 'months': return (time / 12) * 2 * Math.PI - Math.PI / 2;
    }
}


function drawClock(element, time, stringTime, textTime) {
    const ctx = element.getContext('2d');
    ctx.clearRect(0, 0, element.width, element.height);

    const radius = element.width / 2 - 20;
    const centerX = element.width / 2;
    const centerY = element.height / 2;

    // Перевод времени в градусы
    const angle = timeToAngle(time, stringTime);

    // Фон
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#1c1b29';
    ctx.fill();
    ctx.shadowColor = '#176fb2';
    ctx.shadowBlur = 20;

    // Круг секунд
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 4, -Math.PI / 2, angle);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#04b0ee';
    ctx.stroke();
    
    ctx.font = 'italic 38px sans-serif';
    ctx.strokeText(time, centerX - ctx.measureText(time).width + 10, centerY - 10);
    ctx.fillText(time, centerX - ctx.measureText(time).width + 10, centerY - 10);

    ctx.strokeText(textTime, centerX - ctx.measureText(textTime).width / 2, centerY  + 40);
    ctx.fillText(textTime, centerX - ctx.measureText(textTime).width / 2, centerY + 40);
}


function getTimeUntilNewYear() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeDifference = nextYear - now;

    const months = 12 - (now.getMonth() + 1);
    const days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate() - now.getDate();
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);
  
    return { months, days, hours, minutes, seconds };
  }
  
  function updateTimer() {
    const { months, days, hours, minutes, seconds } = getTimeUntilNewYear();

    drawClock(monthsElement, months, 'months', formatWordWithNumber(months, ['месяц', 'месяца', 'месяцев']));
    drawClock(daysElement, days, 'days', formatWordWithNumber(days, ['день', 'дня', 'дней']));
    drawClock(hoursElement, hours, 'hours', formatWordWithNumber(hours, ['час', 'часа', 'часов']));
    drawClock(minutesElement, minutes, 'minutes', formatWordWithNumber(minutes, ['минута', 'минуты', 'минут']));
    drawClock(secondsElement, seconds, 'seconds', formatWordWithNumber(seconds, ['секунда', 'секунды', 'секунд']));
  }
  
  setInterval(updateTimer, 1000);
  
