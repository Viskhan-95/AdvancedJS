"use strict"

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if(!navigator.geolocation) {
            reject(new Error("Ошибка получения координат"));
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                resolve({ latitude, longitude }); 
            },
            error => {
                reject(new Error(`Координаты не получены: ${error.message}`))
            }
        )};
    }); 
}

getCurrentLocation()
    .then(data => console.log(`Ваша координаты: ${data.latitude} - ${data.longitude}`))
    .catch(error => console.log(error));
