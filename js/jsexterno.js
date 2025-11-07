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
    const e1 = {
        nombre: "Leonardo",
        apellido: "Ramirez",
        edad: 25,
        ecuatoriano: true,
        genero: "M",
        ciudad: "Quito"
    }
    const e2 = {
        nombre: "Michael",
        apellido: "Barrionuevo",
        edad: 24,
        ecuatoriano: true,
        genero: "M",
        ciudad: "Quito"
    }
    const arregloEstudiantes = [e1, e2, {
        nombre: "Byron",
        apellido: "Flores",
        edad: 24,
        ecuatoriano: true,
        genero: "M",
        ciudad: "Quito"
    }];
    console.log(arregloEstudiantes[0]);
    console.log(arregloEstudiantes[2]);


    /*Desestructuración de arreglos */
    const ar1 = [1, 2, 3, 4, 5, 6, 7];
    const [p1, p2, p3, p4, p5] = ar1;
    console.log(p1);
    console.log(p5);

    const [primero, , , , , , ultimo] = ar1;
    console.log(primero);
    console.log(ultimo);

    const [pos1,pos2] = [1, 2, 3, 4, 5, 6, 7];

    imprime(ar1);

    //Desestructuración de objetos
    const e3 = {
        nombre1: "Santiago",
        apellido1: "Ramirez",
        edad: 24,
        ecuatoriano: true,
        genero: "M",
        ciudad1: "Quito"
    }
    const { nombre1, ciudad1} = e3;
    console.log(nombre1);
    console.log(ciudad1);

    const{nombre2:n, ciudad2:ciu} = {
        nombre2: "Santiago",
        apellido2: "Ramirez",
        edad: 24,
        ecuatoriano: true,
        genero: "M",
        ciudad2: "Quito"
    }
    console.log(n);
    console.log(ciu);

    const e4 = {
        nombre: "Fatima",
        apellido: "Fiallos",
        edad: 24,
        ecuatoriano: true,
        genero: "F",
        ciudad: "Quito",
        direccion: {
            calle: "Av. America",
            barrio: "La Gasca",
            numeracion:"2343-B"
        }
    }
    console.log(e4.direccion);
    console.log(e4.direccion.barrio);

    const { edad:ed, direccion} = e4;
    console.log(ed);
    console.log(direccion);

    const{ calle} = direccion;
    console.log(calle);

    const{ direccion:{barrio, calle:c1, numeracion}} =e4;
    console.log(barrio);
    console.log(c1);
    console.log(numeracion);

}
function imprime([a,b,c]){
    console.log(a);
    console.log(b);
    console.log(c);
}