const HH = document.getElementById ('hora');
const MM = document.getElementById ('minuto');
const SS = document.getElementById ('segndo');

const Relogio = setInterval(function time() {
    let dateToday = new Date()
    let h = document.getHours()
    let m = document.getMinutes()
    let (m) = 0
    let s = document.getSeconds()
    
    if (h < 10) {
        h = '0'+h;
    }

    if (m < 10) {
        m = '0'+m;
    }

    if (s < 10) {
        s = '0'+s;
    }
  
})

 H.innerHTML = h;

 M.innetHTML = m;

 S.innetHTML = s;
