// Lógica sencilla basada en estado: num1, num2, operador y bandera para segundo operando.
let num1 = "";
let num2 = "";
let operador = null; // '+', '-', '*', '/', '%'
let esSegundoDigito = false; // false mientras se escribe num1


function mostrarDisplay(valor) {
    const elemento = document.getElementById("display");
    if (!elemento) return;

    if (valor === 'C') {
        limpiar();
        return;
    }
    if (valor === '←') {
        borrarUltimo();
        return;
    }
    if (valor === '=') {
        calcularResultado();
        return;
    }

    if (valor === '%') {
        aplicarPorcentaje();
        return;
    }

    if (['+', '-', '*', '/'].includes(valor)) {
        seleccionarOperacion(valor);
        return;
    }

    elemento.innerText = elemento.innerText + String(valor);
    concatenarNumero(String(valor));
}

function concatenarNumero(car) {

    if (!/^[0-9.,]$/.test(car)) return;
    if (car === ',') car = '.';
    if (!esSegundoDigito) {
        num1 = num1 + car;
    } else {
        num2 = num2 + car;
    }
}

// Seleccionar operador: si ya hay operador y num2 presente, calcular primero
function seleccionarOperacion(op) {
    const elemento = document.getElementById("display");
    if (!elemento) return;

    // Si no hay num1 cargado, intentar tomar lo que esté en display
    if (num1 === "") {
        const texto = (elemento.innerText || "").trim();
        // si el texto termina en un operador, quitarlo
        if (texto === "") return;
        // tomar el texto como num1 (remueve operador final si existe)
        const lastChar = texto.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            elemento.innerText = texto.slice(0, -1) + op;
            operador = op;
            esSegundoDigito = true;
            return;
        }
        num1 = texto;
    }

    // Si ya había operador y num2, calcular antes de cambiar
    if (operador && num2 !== "") {
        calcularResultado();
        // después del cálculo, num1 tendrá el resultado, num2 vacío
    }

    operador = op;
    esSegundoDigito = true;

    // Actualizar display
    let texto = elemento.innerText || "";
    texto = texto.replace(/[+\-*/%]$/, '');
    elemento.innerText = texto + operador;
}

// Calcular resultado usando num1, num2 y operador
function calcularResultado() {
    const elemento = document.getElementById("display");
    if (!elemento) return;

    if (!operador) {
        // mostrar el valor tal cual
        elemento.innerText = elemento.innerText || num1;
        return;
    }

    // Si num2 está vacío, intentar extraer del display (caso donde el usuario escribió num1+2 directo)
    if (num2 === "") {
        const texto = (elemento.innerText || "").trim();
        const parts = texto.split(operador);
        if (parts.length >= 2) {
            num2 = parts.slice(1).join(operador).trim();
        }
    }

    const a = parseFloat(num1.replace(',', '.'));
    const b = parseFloat((num2 || '0').replace(',', '.'));
    if (isNaN(a) || isNaN(b)) {
        mostrarResultado('Error');
        resetearEstado();
        return;
    }

    let res;
    switch (operador) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/': res = b === 0 ? NaN : a / b; break;
        case '%': res = a % b; break;
        default: res = NaN;
    }

    if (!isFinite(res) || isNaN(res)) {
        mostrarResultado('Error');
        resetearEstado();
        return;
    }
    mostrarResultado(res);
    num1 = String(res);
    num2 = "";
    operador = null;
    esSegundoDigito = false;
}

function mostrarResultado(resultado) {
    const elemento = document.getElementById("display");
    if (!elemento) return;
    elemento.innerText = String(resultado);
}

function limpiar() {
    const elemento = document.getElementById("display");
    if (elemento) elemento.innerText = "";
    resetearEstado();
}

function resetearEstado() {
    num1 = "";
    num2 = "";
    operador = null;
    esSegundoDigito = false;
}

function borrarUltimo() {
    const el = document.getElementById("display");
    if (!el) return;
    const texto = el.innerText || "";
    if (texto.length === 0) return;

    // quitar último carácter del display
    const ultimo = texto.slice(-1);
    el.innerText = texto.slice(0, -1);

    // sincronizar variables
    if (esSegundoDigito && num2 !== "") {
        num2 = num2.slice(0, -1);
        if (num2 === "") {
        }
        return;
    }

    if (!esSegundoDigito && num1 !== "") {
        num1 = num1.slice(0, -1);
        return;
    }

    // si el último era un operador, quitar la selección de operador
    if (['+', '-', '*', '/', '%'].includes(ultimo)) {
        operador = null;
        esSegundoDigito = false;
    }
}

// Aplica el botón de porcentaje: convierte num1 o num2 según contexto.
function aplicarPorcentaje() {
    const elemento = document.getElementById("display");
    if (!elemento) return;

    if (!esSegundoDigito) {
        if (num1 === "") {
            const texto = (elemento.innerText || "").trim();
            if (texto === "") return;
            num1 = texto;
        }
        const a = parseFloat(num1.replace(',', '.'));
        if (isNaN(a)) return;
        num1 = String(a / 100);
        elemento.innerText = num1;
        return;
    }

    // Si estamos escribiendo num2, convertir num2 en porcentaje relativo a num1 cuando aplica
    if (num2 === "") {
        const texto = (elemento.innerText || "").trim();
        const parts = texto.split(operador);
        if (parts.length >= 2) {
            num2 = parts.slice(1).join(operador).trim();
        } else {
            return;
        }
    }

    const a = parseFloat(num1.replace(',', '.'));
    const b = parseFloat(num2.replace(',', '.'));
    if (isNaN(b)) return;

    let newB;
    if (operador === '+' || operador === '-') {
        newB = (a * b) / 100;
    } else if (operador === '*' || operador === '/') {
        newB = b / 100;
    } else {
        newB = b / 100;
    }

    num2 = String(newB);
    const left = (elemento.innerText || "").split(operador)[0] || num1;
    elemento.innerText = left + operador + num2;
}


function igual() {
    calcularResultado();
}

function sumar() {
    seleccionarOperacion('+');
}
function restar() {
    seleccionarOperacion('-');
}
function multiplicar() {
    seleccionarOperacion('*');
}
function dividir() {
    seleccionarOperacion('/');
}
function porcentaje() {
    aplicarPorcentaje();
}