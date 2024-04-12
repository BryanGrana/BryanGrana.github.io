let elementosNow = document.querySelectorAll('.now');

setInterval(() => {

    let fecha = new Date();

    let colores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];

    elementosNow.forEach(elemento => {
        elemento.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        elemento.textContent = fecha.toLocaleString("es-ES");
    });


}, 1000);