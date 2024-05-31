function mostrarMensaje() {
    var mensaje = "¡Sigue adelante, estás haciendo un gran trabajo!";
    document.getElementById("mensaje").innerHTML = mensaje;
}

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value
    const correo = document.querySelector("#correo").value
    const mensaje = document.querySelector("#mensaje").value


    console.log("Nomnbre: ", nombre);
    console.log("Apellido: ", apellido);
    console.log("Correo: ", correo);
    console.log("mensaje: ", mensaje);
}
