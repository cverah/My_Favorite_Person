//Listas de canciones
const playlist = [
  "./assets/audio/audio2.mp3",
  "./assets/audio/audio1.mp3",
  "./assets/audio/audio3.mp3",
];

let currentTrack = 0; // Índice de la canción actual
const audio = document.getElementById("musica");

// Función para reproducir la siguiente canción
function playNextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length; // Avanza al siguiente índice (o vuelve al inicio)
  audio.src = playlist[currentTrack]; // Cambia la fuente del audio
  audio.play(); // Reproduce la canción
}

// Evento cuando la canción actual termina
audio.addEventListener("ended", playNextTrack);

// Función para iniciar la lista de reproducción
function startPlaylist() {
  currentTrack = 0; // Reinicia al primer track
  audio.src = playlist[currentTrack]; // Establece la primera canción
  audio.play(); // Reproduce la primera canción
}

// Contraseña predefinida
const CONTRASENA = "092177"; // Cambia esto por la contraseña que desees

// Variable para almacenar la contraseña ingresada
let contrasenaIngresada = "";

// Función para agregar números al display
function agregarNumero(numero) {
  const textoCodigo = document.getElementById("texto-codigo");
  const display = document.querySelector(".display");

  // Si el texto actual es "Contraseña", lo limpiamos
  if (textoCodigo.textContent === "Contraseña") {
    textoCodigo.textContent = "";
  }

  // Agregamos el número al texto (en modo contraseña)
  textoCodigo.textContent += "*"; // Usamos un punto como carácter de contraseña

  // Almacenamos el número real en la variable
  contrasenaIngresada += numero;

  // Añadimos la clase para modo de contraseña
  display.classList.add("modo-password");

  // Validar la clave cuando se ingrese la longitud correcta
  if (contrasenaIngresada.length === CONTRASENA.length) {
    if (contrasenaIngresada === CONTRASENA) {
      mostrarGaleria(); // Mostrar el contador si la contraseña es correcta
    } else {
      alert("Contraseña incorrecta. Inténtalo de nuevo."); // Mostrar un mensaje de error
      textoCodigo.textContent = "Contraseña"; // Restablecer el texto
      display.classList.remove("modo-password"); // Quitar el modo de contraseña
      contrasenaIngresada = ""; // Reiniciar la contraseña ingresada
    }
  }
}

// Función para mostrar la galería de fotos
function mostrarGaleria() {
  const container = document.querySelector(".container");
  const seccionGaleria = document.getElementById("seccion-galeria");
  const seccionCarta = document.getElementById("seccion-carta");

  // Ocultar otras secciones
  container.style.display = "none";
  seccionCarta.style.display = "none";
  // Mostrar la galería
  seccionGaleria.style.display = "block";

  // Iniciar la lista de reproducción
  startPlaylist();
}

//funcion ocultar galeria
function ocultarGaleria() {
  const seccionGaleria = document.getElementById("seccion-galeria");
  seccionGaleria.style.display = "none";

  // Pausar la música
  // Detener la música y reiniciar la lista de reproducción
  const audio = document.getElementById("musica");
  audio.pause(); // Pausa la reproducción
  audio.currentTime = 0; // Reinicia la canción al principio
  currentTrack = 0; // Reinicia el índice de la lista de reproducción/ Reinicia la música al principio
}

// Función para mostrar la carta
function mostrarCarta() {
  const seccionGaleria = document.getElementById("seccion-galeria");
  const seccionCarta = document.getElementById("seccion-carta");

  // Ocultar la galería
  seccionGaleria.style.display = "none";

  // Mostrar la carta
  seccionCarta.style.display = "block";
}

// Obtener los elementos del modal
var modal = document.getElementById("modal-imagen");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var cerrar = document.getElementsByClassName("cerrar")[0];

// Función para abrir el modal
function abrirImagenModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Evento clic para cerrar el modal
cerrar.onclick = function () {
  console.log("click en cerrar");

  modal.style.display = "none";
};

// Añadir evento clic a cada imagen
document.querySelectorAll(".fotos img").forEach((img) => {
  img.onclick = function () {
    abrirImagenModal(this);
  };
});

// Evento clic en el contenedor del modal
modal.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
