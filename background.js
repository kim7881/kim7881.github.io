const images = [
    "background001.jpg",
    "background002.jpg",
    "background003.jpg",
    "background004.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");

function back(){
    body.style.backgroundImage = `url(${chosenImage})`;
}

back();
