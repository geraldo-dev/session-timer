let display_times = document.querySelector(".display_times");
let btn = document.getElementById("btn");

let min = Number(document.getElementById("min").value);
let sec = Number(document.getElementById("sec").value);

let second = sec;
let minute = min;

btn.addEventListener("click", () => {

    let duration = Number(minute * 60 + second);

  //não estao atualizando a variavel

    setInterval( () => {
        let time_total_seconds = parseInt(duration % 60);
        let time_total_minutes = parseInt(duration / 60);

        time_total_minutes = time_total_minutes < 10? `0${time_total_minutes}` :  `${time_total_minutes}`;
        time_total_seconds = time_total_seconds < 10? `0${time_total_seconds}` :  `${time_total_seconds}`;

        display_times.textContent = ` ${time_total_minutes} : ${time_total_seconds} `;

        if (duration > 0) {
        duration--;
        }
    }, 1000);
});
