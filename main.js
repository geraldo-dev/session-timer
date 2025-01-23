let display_times = document.querySelector(".display_times");
let btn_start = document.getElementById("btn_start");
let btn_reset = document.getElementById("btn_reset");

let min = document.getElementById("min");
let sec = document.getElementById("sec");

console.log(sec.value)

let second = Number(sec.value);
let minute = Number(min.value);
let loopInterval = undefined;

btn_start.addEventListener("click", () => {
    
    let duration = Number(minute * 60 + second);


    loopInterval = setInterval( () => {
        let time_total_seconds = parseInt(duration % 60);
        let time_total_minutes = parseInt(duration / 60);

        time_total_minutes = time_total_minutes < 10? `0${time_total_minutes}` :  `${time_total_minutes}`;
        time_total_seconds = time_total_seconds < 10? `0${time_total_seconds}` :  `${time_total_seconds}`;

        display_times.textContent = `tempo: ${time_total_minutes}:${time_total_seconds} `;

        if (duration > 0) {
            duration--;
        }
        if(duration < 0){
            clearInterval(loopInterval);
        }
        
    }, 1000);

    
});

btn_reset.addEventListener("click", ()=>{
    sec.value = '';
    min.value = '';
    display_times.textContent = 'tempo: 00:00';
    clearInterval(loopInterval);
});


