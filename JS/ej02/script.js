let contenido = document.getElementById("contenido");
contenido.textContent = "Hola mundo!";

setInterval(() => {
    let colores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];
    contenido.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}, 10);