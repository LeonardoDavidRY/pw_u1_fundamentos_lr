function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}
function agregarElemento(id_elementoPadre, html) {
    document.getElementById(id_elementoPadre).innerHTML += html;
}
function construirH1() {
    return '<h1 id="id_calculadora">Calculadora</h1>';
}
function eliminarElemento(id_elemento) {
    document.getElementById(id_elemento).remove();
}
function ocultarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'none';
}
function mostrarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'block';
}
function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;
    if (tipo == '+') {
        resultado = sumar(num1, num2);
    } else if (tipo == '-') {
        resultado = restar(num1, num2);

    } else if (tipo == '*') {
        resultado = multiplicar(num1, num2);
    } else if (tipo == '/') {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = 'Resultado: ' + resultado;
}
function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}
function fundamentosJS() {
    /** 3 Tipos de variables */
    var nombre = "Michael"; //antigua, ya se considera obsoleta
    let apellido = "Barrionuevo"; //variables cambiantes
    let apellido2 = 15; // Tipado Dinamico
    var nombre2 = "Leonardo";
    apellido2 = "Ramirez";
    let arreglo = [1, 2, 3, 4, 5, 6];
    let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    // Constantes
    const IVA = 12.8;
    console.log("Fundamentos de JS");
    console.log(nombre);
    console.log(IVA);
    console.log(arreglo);

    // Manejo de arreglos
    const arreglosDiasSemana = ["Lunes", "Martes", "Miercoles"];
    arreglosDiasSemana.push("Jueves");
    console.log(arreglosDiasSemana);
    arreglosDiasSemana.unshift("Dias");
    console.log(arreglosDiasSemana);
    console.log(arreglosDiasSemana[0]);
    console.log("Manejo de nulos, undefined y vacio");
    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push("");
    console.log(arreglosDiasSemana[5]);
    console.log(arreglosDiasSemana[6]);
    console.log(arreglosDiasSemana[7]);

    const numerosPares = [2, 4, 6, 8];
    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    /**
     * Sentencias de control
     */
    let edad = 19;
    if (edad >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("Es menor de edad");
    }

    let dia = "lunes";
    switch (dia) {
        case "lunes":
            console.log("Es lunes");
            break;
        case "martes":
            console.log("Es martes");
            break;
        default:
            console.log("No es ninguno de esos dias");
    }

    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }

    const frutas = ["Manzana", "Banana", "Cereza", "Naranja"];
    for (let fruta of frutas) {
        console.log(fruta);
    }

    /* Manejo de objetos */
    const profesor = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatoriano: true,
        genero: "M",
        ciudad: "Quito"
    }
    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido = "Teran";
    console.log(profesor);

    if (profesor.ciudad === "Quito") {
        console.log("Es Quiteño");
    }

    if (profesor.edad !== 36) {
        console.log("Es diferente de 36 años");

    } else {
        console.log("Es 36 años");
    }

    for (let clave in profesor) {
        console.log(clave)
        console.log(profesor[clave]);
    }

}