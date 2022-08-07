function relogio() {
    const relogio = document.querySelector(".relogio");
    let segundos = 0;
    let timer;

    document.addEventListener('click', function(e) {
        const elemento = e.target;

        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }

        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciarRelogio();
        }
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
}

relogio();