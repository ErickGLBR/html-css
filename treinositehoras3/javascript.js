const hora = document.getElementById('horas');
const minuto = document.getElementById('minutos');
const segundo = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    hora.innetHTML = hr;
    minuto.innetHTML = min;
    segundo.innetHTML = s;

})



