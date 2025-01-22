
let display_times = document.querySelector('.display_times');
let times = document.getElementById('times');
let btn = document.getElementById('btn');

let second = Number(String(times.value).split(':')[1]);
let minute = Number(String(times.value).split(':')[0]);
// let time_total_seconds;
// let time_total_minutes;

btn.addEventListener('click',()=>{

    
    let duration = Number((minute * 60) + second);

    //não estao atualizando a variavel
    
    setInterval(()=>{

        let time_total_seconds = parseInt(duration % 60);
        let time_total_minutes = parseInt(duration / 60);

        display_times.textContent = ` ${time_total_minutes} : ${time_total_seconds} `;

        if(duration > 0){
            duration --;
        }
        

    }, 1000);
    
});