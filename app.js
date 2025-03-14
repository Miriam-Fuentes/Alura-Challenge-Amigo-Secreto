// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = ''; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingresa un nombre válido o que no esté duplicado.");
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        lista.appendChild(listItem);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 personas para hacer el sorteo.");
        return;
    }

    // Hacer una copia del arreglo para no modificar el original
    let amigosSecretos = [...amigos];
    let resultados = [];

    // Realizar el sorteo asegurando que nadie se elija a sí mismo
    while (amigosSecretos.length > 0) {
        let amigo = amigosSecretos.pop();
        let index = Math.floor(Math.random() * amigosSecretos.length);
        let amigoSecreto = amigosSecretos.splice(index, 1)[0];

        resultados.push(`${amigo} tiene como amigo secreto a ${amigoSecreto}`);
    }

    // Mostrar los resultados en la interfaz
    mostrarResultados(resultados);
}

// Función para mostrar los resultados en la interfaz
function mostrarResultados(resultados) {
    const resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = ''; // Limpiar resultados anteriores

    resultados.forEach(result => {
        const resultItem = document.createElement('li');
        resultItem.textContent = result;
        resultadoContainer.appendChild(resultItem);
    });
}
