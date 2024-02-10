document.addEventListener("DOMContentLoaded", function() {
    var numeroInput = document.getElementById("numeroInput");
    var comprobarBtn = document.getElementById("comprobarBtn");
    var resultadoContainer = document.getElementById("resultadoContainer");
    var redirigirBtn; // Declare la variable redirigirBtn aquí para que sea accesible en todas las funciones

    comprobarBtn.addEventListener("click", function() {
        var numeroUsuario = parseInt(numeroInput.value.trim());

        if (!isNaN(numeroUsuario)) {
            if (esResultadoCorrecto(numeroUsuario)) {
                resultadoContainer.innerHTML = "SIIIIIIIII ";
                resultadoContainer.style.color = "#2ecc71";
                mostrarBotonRedireccion();
            } else {
                resultadoContainer.innerHTML = "NO TE LOS HAS APUNTADO?";
                resultadoContainer.style.color = "#e74c3c"; // Rojo para resultado incorrecto
                ocultarBotonRedireccion();
            }
        } else {
            resultadoContainer.innerHTML = "NÚMEROS MOR, NÚMEROS...";
            resultadoContainer.style.color = "#e74c3c"; // Rojo para entrada inválida
            ocultarBotonRedireccion();
        }
    });

    function esResultadoCorrecto(numero) {
        // Cambié el número de prueba según tu requisito
        return numero === 3131273;
    }

    function mostrarBotonRedireccion() {
        if (!redirigirBtn) {
            // Crea el botón de redirección si aún no existe
            redirigirBtn = document.createElement("button");
            redirigirBtn.id = "redirigirBtn";
            redirigirBtn.textContent = "Sorpresa final";
            redirigirBtn.addEventListener("click", function() {
                window.location.href = "pagFotos.html";
            });
            resultadoContainer.appendChild(redirigirBtn);
        }
    }

    function ocultarBotonRedireccion() {
        // Oculta el botón de redirección si existe
        if (redirigirBtn) {
            redirigirBtn.style.display = "none";
        }
    }
});