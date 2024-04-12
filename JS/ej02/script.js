let contenido = document.getElementById("contenido");
contenido.textContent = "Hola mundo!";

let indice = 0;

setInterval(() => {
    let colores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];
    contenido.style.backgroundColor = colores[indice];

    indice++;
    if (indice === colores.length) {
        indice = 0;
    }

}, 10);