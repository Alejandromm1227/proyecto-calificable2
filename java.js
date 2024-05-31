function mostrarMensaje() {
    var mensaje = "¡Sigue adelante, estás haciendo un gran trabajo!";
    document.getElementById("mensaje").innerHTML = mensaje;
}

// java.js
document.addEventListener('DOMContentLoaded', function() {
    // Función para validar el formulario
    function validarFormulario() {
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var telefono = document.getElementById('telefono').value;
        var correo = document.getElementById('correo').value;

        // Verifica que los campos no estén vacíos
        if (nombre === '' || apellido === '' || telefono === '' || correo === '') {
            console.log('Por favor, completa todos los campos.');
            return false; // Evita que el formulario se envíe
        }

        // Aquí puedes agregar más validaciones si lo necesitas

        console.log('Formulario válido, enviando datos...');
        return true; // El formulario es válido y se puede enviar
    }

    // Encuentra el formulario en el DOM y agrega un 'event listener' para el evento 'submit'
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            // Valida el formulario
            if (!validarFormulario()) {
                event.preventDefault(); // Evita que el formulario se envíe si no es válido
            }
        });
    } else {
        console.log('El formulario no se encontró en el DOM.');
    }

    // Asegúrate de que el elemento detailsButton exista antes de intentar trabajar con él
    /* var detailsButton = document.querySelector('.detailsButton'); // Asumiendo que 'detailsButton' es una clase
    if (detailsButton) {
        detailsButton.classList.add('singular');
    } else {
        console.log('El elemento detailsButton no se encontró en el DOM.');
    } */
});
