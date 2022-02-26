const secondHandElement = document.querySelector(".second-hand");
const minuteHandElement = document.querySelector(".minute-hand");
const hourHandElement = document.querySelector(".hour-hand");
let secondHandAngle = 0;
let hourHandAngle = 0;
let minuteHandAngle = 0;

const now = new Date();
const hour = now.getHours();
const hourFormatted = hour < 12? hour: (hour - 12);
hourHandAngle = 30*hourFormatted;

const minute = now.getMinutes();
minuteHandAngle = minute*6;


const second = now.getSeconds();
secondHandAngle = second*6;


hourHandElement.style.transform =`rotate(${hourHandAngle}deg)`
minuteHandElement.style.transform =`rotate(${minuteHandAngle}deg)`;
secondHandElement.style.transform =`rotate(${secondHandAngle}deg)`;


setInterval(()=>{
secondHandAngle = secondHandAngle + 6;
if(secondHandAngle >= 360){
    secondHandAngle = 0;
    updateMinuteHand();
}
secondHandElement.style.transform =`rotate(${secondHandAngle}deg)`;

}, 1000)

function updateMinuteHand(){
    minuteHandAngle = minuteHandAngle + 6;
    if(minuteHandAngle >= 360){
        minuteHandAngle = 0;
        updateHourHand();
    }
    minuteHandElement.style.transform =`rotate(${minuteHandAngle}deg)`;
}
function updateHourHand(){
    hourHandAngle = hourHandAngle + 6;
    if(hourHandAngle >= 360){
        hourHandAngle = 0;
    }
    hourHandElement.style.transform =`rotate(${hourHandAngle}deg)`;
}