function procesarPago() {
    validarCamposPago();
}

function validarCamposPago() {
    let cardholderName = document.getElementById("id_cardholder_name").value;
    let cardNumber = document.getElementById("id_card_number").value;
    let expDate = document.getElementById("exp").value;
    let cvv = document.getElementById("id_cvv").value;

    // Limpiar errores previos
    limpiarErrores();

    if (cardholderName.trim() === "") {
        mostrarError("Cardholder name is required", "id_error_cardholder_name");
        return;
    } else if (!validarNombre(cardholderName)) {
        mostrarError("Please enter a valid cardholder name", "id_error_cardholder_name");
        return;
    } else if (cardNumber.trim() === "") {
        mostrarError("Card number is required", "id_error_card_number");
        return;
    } else if (!validarNumeroTarjeta(cardNumber)) {
        mostrarError("Please enter a valid card number", "id_error_card_number");
        return;
    } else if (expDate.trim() === "") {
        mostrarError("Expiration date is required", "id_error_expiration_date");
        return;
    } else if (!validarFechaExpiracion(expDate)) {
        mostrarError("Please enter a valid expiration date (MM/YY)", "id_error_expiration_date");
        return;
    } else if (cvv.trim() === "") {
        mostrarError("CVV is required", "id_error_cvv");
        return;
    } else if (!validarCVV(cvv)) {
        mostrarError("Please enter a valid CVV", "id_error_cvv");
        return;
    } else {
        
        mostrarExito();
    }
}

function mostrarError(mensaje, elementoId) {
    document.getElementById(elementoId).innerText = "*";
    console.log(mensaje);
}

function limpiarErrores() {
    const erroresAsterisco = document.querySelectorAll(".error_asterisco");
    erroresAsterisco.forEach(e => e.innerText = "");
}

function validarNombre(nombre) {
    const patron = /^[a-zA-Z\s]{2,}$/;
    return patron.test(nombre.trim());
}

function validarNumeroTarjeta(numero) {
    const numeroLimpio = numero.replace(/\s/g, '');
    const patron = /^[0-9]{13,19}$/;
    return patron.test(numeroLimpio) && validarLuhn(numeroLimpio);
}

function validarLuhn(numero) {
    let suma = 0;
    let alternar = false;
    
    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero.charAt(i));
        
        if (alternar) {
            digito *= 2;
            if (digito > 9) {
                digito = digito % 10 + 1;
            }
        }
        
        suma += digito;
        alternar = !alternar;
    }
    
    return (suma % 10) === 0;
}

function validarFechaExpiracion(fecha) {
    const patron = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!patron.test(fecha)) {
        return false;
    }
    
    const [mes, año] = fecha.split('/');
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear() % 100;
    const mesActual = fechaActual.getMonth() + 1;
    
    const añoTarjeta = parseInt(año);
    const mesTarjeta = parseInt(mes);
    
    if (añoTarjeta < añoActual || (añoTarjeta === añoActual && mesTarjeta < mesActual)) {
        return false;
    }
    
    return true;
}

function validarCVV(cvv) {
    const patron = /^[0-9]{3,4}$/;
    return patron.test(cvv);
}

function mostrarExito() {
    alert("Payment processed successfully!");
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("id_cardholder_name").value = "";
    document.getElementById("id_card_number").value = "";
    document.getElementById("exp").value = "";
    document.getElementById("id_cvv").value = "";
    limpiarErrores();
}
