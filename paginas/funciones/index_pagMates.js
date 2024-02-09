document.addEventListener("DOMContentLoaded", function() {
    var operaciones = [
        { pregunta: "2 + 2", respuesta: 4 },
        { pregunta: "5 * 3", respuesta: 15 },
        { pregunta: "10 / 2", respuesta: 5 }
        // Puedes agregar más operaciones según sea necesario
    ];

    var operacionesContainer = document.getElementById("operacionesContainer");
    var resultadoContainer = document.getElementById("resultado");
    var enviarBtn = document.getElementById("enviarBtn");
    var intentarDeNuevoBtn;

    function mostrarOperaciones() {
        operaciones.forEach(function(operacion) {
            var operacionElement = document.createElement("div");
            operacionElement.innerHTML = `<p>${operacion.pregunta} = <input type="text" class="respuestaInput"></p>`;
            operacionesContainer.appendChild(operacionElement);
        });
    }

    function comprobarRespuestas() {
        // Desactiva los campos de entrada y agrega la clase de desvanecimiento
        var respuestaInputs = document.querySelectorAll(".respuestaInput");
        respuestaInputs.forEach(function(input) {
            input.disabled = true;
        });

        enviarBtn.disabled = true; // Desactiva el botón también
        enviarBtn.classList.add("fade-out"); // Agrega la clase de desvanecimiento

        var respuestasCorrectas = 0;

        operaciones.forEach(function(operacion, index) {
            var respuestaInput = respuestaInputs[index];
            var respuestaUsuario = parseInt(respuestaInput.value);

            if (!isNaN(respuestaUsuario) && respuestaUsuario === operacion.respuesta) {
                respuestasCorrectas++;
            }
        });

        resultadoContainer.innerHTML = `<p>A ver cuántas tienes bien... ${respuestasCorrectas} de ${operaciones.length}, bueno, esto era muy sencillito`;

        if (respuestasCorrectas === operaciones.length) {
            resultadoContainer.innerHTML += `<span class="numeroEspecial">3</span>`;
            
            // Redirige a la página pagQRS.html después de 3 segundos
            setTimeout(function() {
                window.location.href = "pagQRS.html";
            }, 3000);

        } else {
            // Si no se acertaron todas, muestra el botón "Intentar de nuevo"
            intentarDeNuevoBtn = document.createElement("button");
            intentarDeNuevoBtn.textContent = "Intentar de nuevo";
            intentarDeNuevoBtn.addEventListener("click", function() {
                reiniciarJuego();
            });
            resultadoContainer.appendChild(intentarDeNuevoBtn);
        }
    }

    function reiniciarJuego() {
        // Habilita los campos de entrada y quita la clase de desvanecimiento
        var respuestaInputs = document.querySelectorAll(".respuestaInput");
        respuestaInputs.forEach(function(input) {
            input.disabled = false;
        });

        enviarBtn.disabled = false; // Habilita el botón
        enviarBtn.classList.remove("fade-out"); // Quita la clase de desvanecimiento

        // Elimina el mensaje de resultado y el botón "Intentar de nuevo"
        resultadoContainer.innerHTML = "";

        // Elimina el botón "Intentar de nuevo" si existe
        if (intentarDeNuevoBtn) {
            resultadoContainer.removeChild(intentarDeNuevoBtn);
        }
    }

    mostrarOperaciones();

    enviarBtn.addEventListener("click", function() {
        comprobarRespuestas();
    });
});