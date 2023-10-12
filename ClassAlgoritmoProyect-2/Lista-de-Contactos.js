
// Lista de contactos como un array de objetos
let listaDeContactos = [];

// Función para crear un nuevo contacto
function crearContacto() {
    const id = listaDeContactos.length + 1; // ID incremental
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    const ciudad = document.getElementById("ciudad").value;
    const direccion = document.getElementById("direccion").value;

     // Verificar si se han ingresado nombres y apellidos
 if (nombres && apellidos) {

    // Obtener el ID máximo actual
    let idMaximo = 0;
    listaDeContactos.forEach(contacto => {
        if (contacto.id > idMaximo) {
            idMaximo = contacto.id;
        }
    });

        // Generar un nuevo ID mayor que el máximo actual
        const id = idMaximo + 1;

        const nuevoContacto = {
            id,
            nombres,
            apellidos,
            telefono,
            ubicaciones: { ciudad, direccion }
        };
        listaDeContactos.push(nuevoContacto);
        actualizarListaContactos();
        limpiarCampos();
    } else {
        alert("Por favor, ingresa al menos nombres y apellidos.");
    }
    // Al guardar un nuevo contacto, actualizamos los datos en el almacenamiento local
    guardarContactosEnLocalStorage();
}


// Función para guardar los contactos en el almacenamiento local
 function guardarContactosEnLocalStorage() {
    localStorage.setItem("listaDeContactos", JSON.stringify(listaDeContactos));
}

// Función para cargar los contactos desde el almacenamiento local
function cargarContactosDesdeLocalStorage() {
    const contactosGuardados = localStorage.getItem("listaDeContactos");
    if (contactosGuardados) {
        listaDeContactos = JSON.parse(contactosGuardados);
        actualizarListaContactos();
    }
}

// Al cargar la página, intentamos cargar los contactos desde el almacenamiento local
cargarContactosDesdeLocalStorage();

// Función para limpiar los campos después de crear un nuevo contacto
function limpiarCampos() {
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("direccion").value = "";
}

// Función para actualizar la lista de contactos en el HTML
function actualizarListaContactos() {
    const listaContactos = document.getElementById("listaContactos");
    listaContactos.innerHTML = "";

    listaDeContactos.forEach(contacto => {
        const item = document.createElement("li");
        item.textContent = `ID: ${contacto.id}, Nombres: ${contacto.nombres}, Apellidos: ${contacto.apellidos}, Teléfono: ${contacto.telefono}, Ciudad: ${contacto.ubicaciones.ciudad}, Dirección: ${contacto.ubicaciones.direccion}`;
        listaContactos.appendChild(item);
    });
}

// Función para seleccionar un contacto por ID
function seleccionarContacto() {
    const nombreBuscado = prompt("Ingresa el nombre del contacto a buscar:");
    
    if (nombreBuscado) {
        const contactoEncontrado = listaDeContactos.find(contacto => {
            return `${contacto.nombres} ${contacto.apellidos}` === nombreBuscado;
        });

        if (contactoEncontrado) {
            alert(`ID del contacto ${nombreBuscado}: ${contactoEncontrado.id}`);
        } else {
            alert("No se encontró un contacto con ese nombre.");
        }
    }
}


// Función para eliminar un contacto por ID
function eliminarContacto() {
    const idEliminar = prompt("Ingresa el ID del contacto a eliminar:");
    if (idEliminar) {
        const indice = listaDeContactos.findIndex(contacto => contacto.id === parseInt(idEliminar));
        if (indice !== -1) {
            listaDeContactos.splice(indice, 1);
            actualizarListaContactos();
        } else {
            alert("No se encontró un contacto con ese ID.");
        }
    }
    guardarContactosEnLocalStorage();
}

window.addEventListener("beforeunload", function (event) {
    event.returnValue = "Si refrescas la página, perderás los datos guardados. ¿Deseas continuar?";
});

// Asignar la función para crear un contacto al botón correspondiente
document.getElementById("crearContacto").addEventListener("click", crearContacto);
document.getElementById("seleccionarContacto").addEventListener("click", seleccionarContacto);
document.getElementById("eliminarContacto").addEventListener("click", eliminarContacto);
