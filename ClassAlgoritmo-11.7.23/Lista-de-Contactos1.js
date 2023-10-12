
// Lista de contactos con datos predefinidos
let listaDeContactos = ["Juan Pérez", "María López", "Carlos González"];

// Función para mostrar los contactos actuales
function mostrarContactos() {
    document.getElementById("contactos").textContent = listaDeContactos.join(", ");
}

// Función para añadir un nuevo contacto a la lista
function agregarContacto() {
    const nuevoContacto = document.getElementById("nuevoContacto").value;
    if (nuevoContacto) {
        listaDeContactos.push(nuevoContacto);
        document.getElementById("nuevoContacto").value = "";
    }
}

// Función para eliminar contactos existentes de la lista
function eliminarContacto() {
    const checkboxes = document.querySelectorAll("#eliminarContacto input[type=checkbox]");
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const contactoAEliminar = checkbox.value;
            const indice = listaDeContactos.indexOf(contactoAEliminar);
            if (indice !== -1) {
                listaDeContactos.splice(indice, 1);
            }
        }
    });
}

function actualizarLista() {
    const eliminarContactoDiv = document.getElementById("eliminarContacto");
    eliminarContactoDiv.innerHTML = "";
    listaDeContactos.forEach(contacto => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = contacto;
        const label = document.createElement("label");
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(contacto));
        eliminarContactoDiv.appendChild(label);
    });
}

// Asignar las funciones a los botones
document.getElementById("mostrarContactos").addEventListener("click", mostrarContactos);
document.getElementById("agregarContacto").addEventListener("click", () => {
    agregarContacto();
    actualizarLista();
});
document.getElementById("actualizarLista").addEventListener("click", actualizarLista);
document.getElementById("eliminarContactoBtn").addEventListener("click", eliminarContacto);
