const API_KEY ="49921f5abde9c16e3ff5a497300ee795";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json()
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        console.log(city)
        city.innerText = `${data.name} :`;
        weather.innerText = `${data.weather[0].main}/ ${data.main.temp}°c`;
    }));
}

function onGeoError(){
    alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
