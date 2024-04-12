document.getElementById('btnStart').addEventListener('click', function () {

    let segundos = parseInt(document.getElementById('segundos').value);

    if (isNaN(segundos) || segundos <= 0) {

    } else {
        let tiempoRestante = segundos;
        let contador = setInterval(function () {

            tiempoRestante--;
            document.getElementById('resultado').textContent = `Tiempo restante: ${tiempoRestante} segundos`;

            if (tiempoRestante === 0) {
                clearInterval(contador);
                document.getElementById('resultado').textContent = '¡La alarma está sonando!';
            }

        }, 1000);
    }

});