let display_sessions =  document.querySelector('.display_sessions');
let sessions = document.querySelector('#sessions');
let display_times = document.querySelector(".display_times");
let minute = document.querySelector("#min");
let second = document.querySelector("#sec");
let btn_start = document.querySelector('#btn_start');

let session = Number(sessions.value);
let duration =  (Number(minute.value) * 60) + Number(second.value);


function formtaTime(time){
    let res = time < 10 ? `0${time}`: `${time}`;
    return res;
}



function session_timer(time_secunds){

    let time_renew = time_secunds;
    let time_count = time_secunds;
    
    //exibir quantidade sessoes na tela
    display_sessions.textContent = `sessões: ${session}`;
    
    let stopInterval = setInterval( () => {
        
        let time_total_seconds = parseInt(time_count % 60).toFixed(0);
        let time_total_minutes = parseInt(time_count / 60).toFixed(0);

        time_total_minutes = formtaTime(time_total_minutes);
        time_total_seconds = formtaTime(time_total_seconds);
        
        if(time_count >= 0){
            console.log('---', time_total_seconds);
            display_times.textContent = `tempo: ${time_total_minutes}:${time_total_seconds} `;
            time_count--;

        }else{

            clearInterval(stopInterval);
            //retira um da sessõa apois a primeira rodada
            session--;

            //verifica se ainda a sessões e chama a funcao de novo
            if(session > 0){
                session_timer(time_renew);
            }else{
                //
                console.log('acabou as sessoes');
            }
        }

        duration--;
        
    }, 1000);
}

//
btn_start.addEventListener('click', (e)=> {
    e.preventDefault();
    session_timer(duration)
} );
