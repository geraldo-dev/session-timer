let sessions = document.querySelector('#sessions');
let display_sessions = document.querySelector('.display_sessions');
let display_times = document.querySelector('.display_times');
let times = document.querySelector('#times');
let btn = document.querySelector('#btn');

function start() {
    display_times.textContent = `tempo: ${times.value}`;

    let count_session = Number(sessions.value);

    //count sessions
    setInterval(()=>{
        display_sessions.textContent = `sessões: ${count_session}`;
        if(count_session > 0){
            count_session--;
        }
    }, 1000);
}

btn.addEventListener('click', start);