function guardar() {
    validarCampos();  
}
function validarCampos(){

    let nombre = document.getElementById("id_nombre").value;
    let apellido = document.getElementById("id_apellido").value;
    let fecha = document.getElementById("id_fecha").value;
    let email = document.getElementById("id_email").value;
    let password = document.getElementById("id_password").value;

    if(nombre === ""){
        mostrarMensaje("Campo nombre incompleto");
        mostrarArterisco("id_error_nombre");
        return;
    }else if(apellido === ""){
        mostrarMensaje("Campo apellido incompleto");
        mostrarArterisco("id_error_apellido");
        return;
    }else if(fecha === ""){
        mostrarMensaje("Campo fecha incompleto");
        return;
    }else if(email === "" || !validarEmail(email)){
        mostrarMensaje("Campo email incompleto");
        return;
    }else if(password === ""){
        mostrarMensaje("Campo password incompleto");
        return;
    } else{
        limpiarMensaje();
    }

}

function mostrarMensaje(msg){
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";

}
function mostrarArterisco(idelemento){
    document.getElementById(idelemento).innerText = "*";

}
function limpiarMensaje(){
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = "";
    mensaje.style.display = "none";

    erroresAsterisco = document.querySelectorAll(".error_asterisco");
    erroresAsterisco.forEach(e => e.innerText = "");

    
}
function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}