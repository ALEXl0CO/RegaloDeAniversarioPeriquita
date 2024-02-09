var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");

boton1.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    // Realiza el movimiento aleatorio solo si se hizo clic en el área del botón
    if (e.target === boton1) {
        // Obtén las dimensiones de la ventana
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        // Calcula posiciones aleatorias dentro de la ventana
        var randomX = Math.floor(Math.random() * (windowWidth - 100)); // 100 es el ancho del botón
        var randomY = Math.floor(Math.random() * (windowHeight - 40)); // 40 es la altura del botón

        // Mueve el botón a la posición aleatoria
        boton1.style.position = "absolute";
        boton1.style.left = randomX + "px";
        boton1.style.top = randomY + "px";
    }
});

boton2.addEventListener("click", function() {
    // Redirige a la nueva página
    window.location.href = "paginas/pagMates.html";
});
