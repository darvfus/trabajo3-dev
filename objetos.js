class Libro {
    constructor(titulo, autor, anio, estado = "disponible") {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
    }

    describirLibro() {
        return `"${this.titulo}" por ${this.autor} (${this.anio}) - Estado: ${this.estado}`;
    }
}

// Array para almacenar los libros
let libros = [];

// Función para agregar un nuevo libro a la lista
function agregarLibro() {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const anio = document.getElementById("anio").value.trim();
    const estado = document.getElementById("estado").value;

    if (titulo === "" || autor === "" || anio === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const nuevoLibro = new Libro(titulo, autor, anio, estado);
    libros.push(nuevoLibro);
    actualizarLista();
    limpiarFormulario();
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    const lista = document.getElementById("listaLibros");
    lista.innerHTML = "";

    libros.forEach((libro, index) => {
        const li = document.createElement("li");
        li.textContent = libro.describirLibro();

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => eliminarLibro(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un libro de la lista
function eliminarLibro(index) {
    libros.splice(index, 1);
    actualizarLista();
}

// Función para limpiar el formulario después de agregar un libro
function limpiarFormulario() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("anio").value = "";
    document.getElementById("estado").value = "disponible";
}
