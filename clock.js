const clock = document.querySelector("#clock")

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const secondes = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${secondes}`;
}

getClock();  
setInterval(getClock, 1000); 
