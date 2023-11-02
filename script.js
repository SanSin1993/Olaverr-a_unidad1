document.addEventListener("DOMContentLoaded", function() {
    var estado = document.getElementById("estado");   
    var estadoSeleccionado = document.getElementById("estadoSeleccionado");
    var form = document.querySelector("form");
    var enviarButton = document.querySelector("button[type='submit']");

    estado.addEventListener("change", function() {
        var opcionElegida = estado.options[estado.selectedIndex].text;
        estadoSeleccionado.textContent = opcionElegida;
    });

    enviarButton.addEventListener("click", function(event) {
        if (form.checkValidity()) {
            event.preventDefault();
            Swal.fire(
                'Formulario enviado',
                '¡Gracias por completar!',
                'success'
            ).then(() => {
                window.location.href = 'index.html';
            });
        } else {
            Swal.fire(
                'Error',
                'Por favor, complete todos los campos requeridos',
                'error'
            );
        }
    });
});