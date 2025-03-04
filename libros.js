let librosLeidos = [];

function agregarLibro(titulo) {
    if (titulo && !librosLeidos.includes(titulo)) {
        librosLeidos.push(titulo);
        actualizarLista();
    }
}

function mostrarLibrosLeidos() {
    return librosLeidos;
}

function actualizarLista() {
    const lista = document.getElementById("lista-libros");
    lista.innerHTML = "";
    librosLeidos.forEach(libro => {
        const li = document.createElement("li");
        li.textContent = libro;
        lista.appendChild(li);
    });
}

document.getElementById("agregar").addEventListener("click", function() {
    const titulo = document.getElementById("titulo").value;
    agregarLibro(titulo);
    document.getElementById("titulo").value = "";
});
