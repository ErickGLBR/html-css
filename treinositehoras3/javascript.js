const H = document.getElementById('hora')
const M = document.getElementById('minuto')
const S = document.getElementById('segundo')

const relogio = setInterval(function time() {
    let dataToday = new Date()
    
    let H = document.getHours()
    let M = document.getMinutes()
    let S = document.getSeconds()
    

    if (H < 10) {
        H = '0'+H
    }

    if (M < 10) {
        M = '0'+M
    }

    if (H < 10) {
        H = '0'+S
    }

})


H.innerHTML = H;

M.innetHTML = M;

S.innetHTML = S;
