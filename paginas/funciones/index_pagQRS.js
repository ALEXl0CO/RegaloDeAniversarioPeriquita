document.addEventListener("DOMContentLoaded", function() {
    var resultadoContainer = document.getElementById("resultadoContainer");
    var numeroUsuarioInput = document.getElementById("numeroUsuario");
    var comprobarBtn = document.getElementById("comprobarBtn");

    comprobarBtn.addEventListener("click", function() {
        // Desactiva el campo de texto
        numeroUsuarioInput.disabled = true;

        var resultadoUsuario = numeroUsuarioInput.value.trim();

        if (resultadoUsuario === "2049") {
            // Si el resultado es correctoo
            resultadoContainer.innerHTML = `<p class="resultadoText">Ha costado ehhhhh, muy bien churri!!!!!<span class="numeroEspecial">1</span></p>`;

            // Muestra el botón para avanzar
            var avanzarBtn = document.createElement("button");
            avanzarBtn.id = "avanzarBtn";
            avanzarBtn.textContent = "Avanzar";
            avanzarBtn.addEventListener("click", function() {
                window.location.href = "pagCarta.html";
            });
            resultadoContainer.appendChild(avanzarBtn);
        } else {
            // Si el resultado es incorrecto
            // Muestra el botón para intentar de nuevo
            var intentarDeNuevoBtn = document.createElement("button");
            intentarDeNuevoBtn.id = "intentarDeNuevoBtn";
            intentarDeNuevoBtn.textContent = "Volver a intentarlo";
            intentarDeNuevoBtn.addEventListener("click", function() {
                reiniciarIntento();
            });
            resultadoContainer.appendChild(intentarDeNuevoBtn);
        }
    });

    function reiniciarIntento() {
        // Habilita el campo de texto y borra el contenido y los botones
        numeroUsuarioInput.disabled = false;
        resultadoContainer.innerHTML = "";
    }
});
