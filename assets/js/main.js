const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

iniciar.addEventListener('click', function(e) {
    iniciarRelogio();
});

pausar.addEventListener('click', function(e) {
    clearInterval(timer);
});

zerar.addEventListener('click', function(e) {
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});


function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function iniciarRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
    }, 1000);
}