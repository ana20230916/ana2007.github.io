// Array para almacenar las sugerencias enviadas
let sugerencias = [];

// Función para habilitar el cuadro de sugerencia al hacer clic en "Acceder"
function acceder() {
    // Mostrar el cuadro de sugerencia
    document.getElementById("cuadroSugerencia").style.display = "block";
}

// Función para enviar la sugerencia
function enviarSugerencia() {
    // Obtener el texto de la sugerencia
    const sugerenciaText = document.getElementById("sugerencia").value;

    // Verificar si el campo de sugerencia no está vacío
    if (sugerenciaText.trim() !== "") {
        // Agregar la sugerencia al array
        sugerencias.push(sugerenciaText);

        // Limpiar el campo de texto de la sugerencia
        document.getElementById("sugerencia").value = "";

        alert("Sugerencia enviada.");
    } else {
        alert("Por favor, escribe una sugerencia antes de enviar.");
    }
}

// Función para ver todas las sugerencias enviadas
function verSugerencias() {
    // Obtener el contenedor de la lista de sugerencias
    const sugerenciasList = document.getElementById("sugerenciasList");

    // Limpiar el contenido previo de la lista
    sugerenciasList.innerHTML = "";

    // Añadir cada sugerencia al elemento de lista
    sugerencias.forEach((sugerencia, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${sugerencia}`;
        sugerenciasList.appendChild(listItem);
    });

    // Mostrar la sección de sugerencias enviadas
    document.getElementById("listaSugerencias").style.display = "block";
}
