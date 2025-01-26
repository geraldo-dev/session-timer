let btn_start = document.querySelector('#btn_start');

let display_sessions =  document.querySelector('.display_sessions');
let display_times = document.querySelector(".display_times");

btn_start.addEventListener('click', ()=> {
    
    //variables that can be called as soon as the button is clicked
    let session = Number(document.querySelector('#sessions').value);
    let minute = document.querySelector("#min");
    let second = document.querySelector("#sec");
    let duration =  (Number(minute.value) * 60) + Number(second.value);
    
    btn_start.disabled = true;
    btn_start.style.background = '#91ffb270';

    session_timer(duration, session);
});

function formtaTime(time){

    let res = time < 10 ? `0${time}`: `${time}`;
    return res;
}

function session_timer(duration, session){

    let time_renew = duration;
    let time_count = duration;
    
    //display number of sessions on screen
    display_sessions.textContent = `sessões: ${session}`;
    
    let stopInterval = setInterval( () => {
        
        let time_total_seconds = parseInt(time_count % 60).toFixed(0);
        let time_total_minutes = parseInt(time_count / 60).toFixed(0);

        //format time
        time_total_minutes = formtaTime(time_total_minutes);
        time_total_seconds = formtaTime(time_total_seconds);
        
        if(time_count >= 0){

            display_times.textContent = `tempo: ${time_total_minutes}:${time_total_seconds} `;
            time_count--;

        }else{

            clearInterval(stopInterval);
            session--;

            //check if there are still sessions and call the function again
            if(session > 0){

                session_timer(time_renew, session);
            }else{

                btn_start.disabled = false;
                btn_start.style.background = '#0a8f32';
            }
        }

        duration--;
        
    }, 1000);
}

