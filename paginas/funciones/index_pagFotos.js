document.addEventListener("DOMContentLoaded", function () {
    var imagenContainer = document.getElementById("imagenContainer");

    // Número total de imágenes en la carpeta
    var numeroDeImagenes = 2;

    // Crea las filas de la tabla con dos columnas y botones de descarga
    for (var i = 1; i <= numeroDeImagenes; i += 2) {
        var fila = document.createElement("tr");

        // Columna para la primera imagen y botón de descarga
        var columna1 = document.createElement("td");
        var imagen1 = document.createElement("img");
        imagen1.src = "FondosPantalla/Fondo" + i + ".png";
        imagen1.classList.add("dynamic-image"); // Asigna la clase a la imagen
        columna1.appendChild(imagen1);

        var botonDescarga1 = document.createElement("button");
        botonDescarga1.textContent = "Descargar";
        botonDescarga1.addEventListener("click", function () {
            descargarImagen(imagen1.src, "imagen" + i + ".jpg");
        });
        columna1.appendChild(botonDescarga1);

        // Columna para la segunda imagen y botón de descarga
        var columna2 = document.createElement("td");
        var imagen2 = document.createElement("img");
        var botonDescarga2 = document.createElement("button");

        if (i + 1 <= numeroDeImagenes) {
            imagen2.src = "FondosPantalla/Fondo" + (i + 1) + ".png";
            imagen2.classList.add("dynamic-image"); // Asigna la clase a la imagen

            botonDescarga2.textContent = "Descargar";
            botonDescarga2.addEventListener("click", function () {
                descargarImagen(imagen2.src, "imagen" + (i + 1) + ".jpg");
            });
        } else {
            // Si no hay una segunda imagen, deja la columna vacía
            imagen2.style.display = "none";
            botonDescarga2.style.display = "none";
        }

        columna2.appendChild(imagen2);
        columna2.appendChild(botonDescarga2);

        // Agrega las columnas a la fila
        fila.appendChild(columna1);
        fila.appendChild(columna2);

        // Agrega la fila a la tabla
        imagenContainer.appendChild(fila);
    }

    function descargarImagen(url, nombre) {
        // Crea un enlace temporal para descargar la imagen
        var enlaceDescarga = document.createElement("a");
        enlaceDescarga.href = url;
        enlaceDescarga.download = nombre;

        // Simula un clic en el enlace para iniciar la descarga
        enlaceDescarga.click();
    }
});