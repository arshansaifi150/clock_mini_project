let time = document.querySelector('.time');
let date = document.querySelector('.data')


setInterval(function(){
    const clockTime = new Date();    
    time.innerHTML = clockTime.toLocaleTimeString() 
},1000)

const clockDate = new Date();
date.innerHTML  = clockDate.toLocaleDateString();

