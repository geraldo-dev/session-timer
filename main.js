let sessions = document.querySelector('#sessions');
let times = document.querySelector('#times');
let btn = document.querySelector('#btn');

function start() {
    console.log(sessions.value, times.value );
}

btn.addEventListener('click', start);