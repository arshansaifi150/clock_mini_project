const date = document.querySelector('.date');
const time = document.querySelector('.time');

const clockDate = new Date();
date.innerHTML = clockDate.toLocaleDateString()

setInterval(function (){
    const clockTime = new Date();
    time.innerHTML = clockTime.toLocaleTimeString()
     
},1000);
