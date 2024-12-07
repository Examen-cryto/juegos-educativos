// Preguntas del cuestionario
const preguntas = [
    {
        pregunta: "¿Cuál es el resultado de 5 x 7?",
        opciones: ["30", "35", "40", "25"],
        respuesta: "35"
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        opciones: ["Mario Vargas Llosa", "Gabriel García Márquez", "Pablo Neruda", "Isabel Allende"],
        respuesta: "Gabriel García Márquez"
    },
    {
        pregunta: "¿Qué planeta es conocido como el planeta rojo?",
        opciones: ["Venus", "Marte", "Júpiter", "Saturno"],
        respuesta: "Marte"
    },
    {
        pregunta: "¿Cuál es el valor de π (pi) aproximado?",
        opciones: ["3.14", "2.71", "1.62", "1.41"],
        respuesta: "3.14"
    },
    {
        pregunta: "¿Cuál es la capital de Perú?",
        opciones: ["Cusco", "Lima", "Arequipa", "Trujillo"],
        respuesta: "Lima"
    }
];

// Elementos del DOM
const preguntaDiv = document.getElementById("pregunta");
const opcionesUl = document.getElementById("opciones");
const siguienteBtn = document.getElementById("siguiente");
const resultadoDiv = document.getElementById("resultado");
const puntosSpan = document.getElementById("puntos");

// Variables del juego
let preguntaActual = 0;
let puntos = 0;

// Mostrar la pregunta actual
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaDiv.textContent = pregunta.pregunta;
    opcionesUl.innerHTML = "";

    pregunta.opciones.forEach(opcion => {
        const li = document.createElement("li");
        li.textContent = opcion;
        li.addEventListener("click", () => verificarRespuesta(opcion));
        opcionesUl.appendChild(li);
    });

    resultadoDiv.textContent = "";
}

// Verificar la respuesta del usuario
function verificarRespuesta(opcionSeleccionada) {
    const respuestaCorrecta = preguntas[preguntaActual].respuesta;

    if (opcionSeleccionada === respuestaCorrecta) {
        puntos += 10;
        resultadoDiv.textContent = "¡Correcto!";
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.textContent = `Incorrecto. La respuesta era: ${respuestaCorrecta}`;
        resultadoDiv.style.color = "red";
    }

    puntosSpan.textContent = puntos;
    siguienteBtn.disabled = false;
}

// Mostrar la siguiente pregunta
function siguientePregunta() {
    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        preguntaDiv.textContent = "¡Has completado el cuestionario!";
        opcionesUl.innerHTML = "";
        siguienteBtn.style.display = "none";
    }
}

// Inicializar el juego
siguienteBtn.addEventListener("click", () => {
    siguienteBtn.disabled = true;
    siguientePregunta();
});

mostrarPregunta();

