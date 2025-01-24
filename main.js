let display_sessions =  document.querySelector('.display_sessions');
let sessions = document.querySelector('#sessions');
let display_times = document.querySelector(".display_times");
let minute = document.querySelector("#min");
let second = document.querySelector("#sec");

var loopInterval;


function session_timer(){
    let duration =  (Number(minute.value) * 60) + Number(second.value);

    loopInterval = setInterval( () => {
        let time_total_seconds = parseInt(duration % 60).toFixed(0);
        let time_total_minutes = parseInt(duration / 60).toFixed(0);

        time_total_minutes = time_total_minutes < 10 ? `0${time_total_minutes}`: `${time_total_minutes}`;
        time_total_seconds = time_total_seconds < 10 ? `0${time_total_seconds}`: `${time_total_seconds}`;

        display_times.textContent = `tempo: ${time_total_minutes}:${time_total_seconds} `;

        if(duration === 0){
            clearInterval(loopInterval);
        }

        duration--;
        
    }, 1000);
}



