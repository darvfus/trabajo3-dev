const frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana", "plátano", "naranja", "plátano", "manzana"];

function contarFrutas(array) {
    const conteo = {};
    for (let i = 0; i < array.length; i++) {
        let fruta = array[i];
        conteo[fruta] = (conteo[fruta] || 0) + 1;
    }
    return conteo;
}

function contarFrutasWhile(array) {
    const conteo = {};
    let index = 0;
    while (index < array.length) {
        let fruta = array[index];
        conteo[fruta] = (conteo[fruta] || 0) + 1;
        index++;
    }
    return conteo;
}

function mostrarResultado(id, conteo) {
    const elemento = document.getElementById(id);
    elemento.innerHTML = `<h2>${id.replace('-', ' ')}</h2>`;
    for (const fruta in conteo) {
        elemento.innerHTML += `<p>${fruta}: ${conteo[fruta]}</p>`;
    }
}

const resultadoFor = contarFrutas(frutas);
const resultadoWhile = contarFrutasWhile(frutas);

console.log("Conteo de frutas usando for:", resultadoFor);
console.log("Conteo de frutas usando while:", resultadoWhile);

mostrarResultado("resultado-for", resultadoFor);
mostrarResultado("resultado-while", resultadoWhile);
