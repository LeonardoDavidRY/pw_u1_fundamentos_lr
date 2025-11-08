let num1=0;
let num2=0;

function mostrarDisplay(valor){
    let elemento = document.getElementById("display");
    elemento.innerText = elemento.innerText + valor;
}
function sumar(){
    const display = document.getElementById("display");
    const texto = display.innerText || "";
    const elementos = texto.split("+").map(s => s.trim()).filter(s => s !== "");
    if (elementos.length < 2) {
        // nada que sumar
        return;
    }
    // convertir a números (acepta coma o punto decimal)
    const nums = elementos.map(s => parseFloat(s.replace(",", ".")));
    if (nums.some(n => isNaN(n))) {
        mostrarResultado("Error");
        return;
    }
    const total = nums.reduce((acc, n) => acc + n, 0);
    mostrarResultado(total);
}

function mostrarResultado(resultado){
    const elemento = document.getElementById("display");
    elemento.innerText = String(resultado);
}

function parseNumbers(text, separator) {
    return text.split(separator).map(s => s.trim()).filter(s => s !== "")
        .map(s => parseFloat(s.replace(",", ".")));
}
function restar(){

}
function multiplicar(){

}   
function dividir(){

}   
function porcentaje(){

}
function limpiar(){
    document.getElementById("display").innerText = "";
}

function borrarUltimo(){
    const el = document.getElementById("display");
    el.innerText = el.innerText.slice(0, -1);
}
function igual(){
    const texto = (document.getElementById("display").innerText || "");
    if (texto.includes("+")) { sumar(); return; }
    if (texto.includes("-")) { restar(); return; }
    if (texto.includes("*")) { multiplicar(); return; }
    if (texto.includes("/")) { dividir(); return; }
    if (texto.includes("%")) { porcentaje(); return; }
    // si no hay operadores, mostrar mismo valor
    mostrarResultado(texto);
}