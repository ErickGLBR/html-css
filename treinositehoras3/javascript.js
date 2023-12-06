const HR = document.getElementById("horas");
const MIN = document.getElementById("minutos");
const S = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (hr < 10) hr = "0" + hr;

    if (min < 10) hr = "0" + min;

    if (s < 10) hr = "0" + s;

    HR.innerHTML = hr;
    MIN.innerHTML = min;
    S.innerHTML = s;

})



