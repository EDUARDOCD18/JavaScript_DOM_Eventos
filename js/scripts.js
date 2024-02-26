/* Seleccionar elementos de HTML */

// querySelector
const heading = document.querySelector(".header__texto h2"); // retorna 0 o 1 elementos

heading.textContent = "Nuevo heading"; // Modifica el texto del contenido
heading.classList.add("nueva-clase"); // Agrega nueva clase
/* console.log(heading); */

/* Se recomienda tener en cuenta BEM */
/* JS permite manipular los elemetos de HTML */

// querySelectorAll

/* Retorna 0 si el selector está malo o no hay ningún elemento
    hasta todos los elementos que concuerden con el selector tipo CSS
    que se le pase a la función querySelectroAll()
*/

const enlaces = document.querySelectorAll(".navegacion a");
/* console.log(enlaces); */

/* Acceder a un elemeto en específico */
/* console.log(enlaces[0]); */

enlaces[0].textContent = "nuevo enlace";

/*  Modificar enlace del elemento */
enlaces[0].href = "https://www.google.com";

/* Añadirle clase nueva */
enlaces[0].classList.add("XD-class");

/* Remover una clase */
enlaces[0].classList.remove("XD-class");

//getElementById
const heading2 = document.getElementById("heading"); //Poco usado en nuevas versiones de JS
/* console.log(heading2); */

/* 146 - Crear HTML con createElement */

// - Generar un nuevo enlace
const nuevoEnlace =
  document.createElement("A"); /* -- Se recomienda usar mayúscula -- */

/* -- Agregar propiedades al elemento HTML -- */

// - Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";

// - Agregar el texto
nuevoEnlace.textContent = "Tienda virtual";

// - Agregar la clases
nuevoEnlace.classList.add("navegacion__enlace");

// - Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

//console.log(nuevoEnlace);

/* 147 - Eventos en JS */

// Registrar eventos
/* console.log(1);

window.addEventListener('load', () => {
    console.log(2);
}) */
/* 
    - window es el objeto global, todo el documento
    - load espera a que todo cargue, es un evento
*/
/*  window.onload = () => {
    console.log(3); 
} */
/* -- window.addEventListener y window.onload son lo mismo -- */

/* document.addEventListener('DOMContentLoaded', () => {
    console.log(4);
}) */

/* -- DOMContentLoaded solo espera a que se descargue el HTML -- */
/* console.log(5); */

/* window.onscroll = () => {
    console.log("Scrolling...");
} */

/* 148 - Reaccionar a clicks en Js */
/* -- Seleccionar elementos y asociarles un evento --  */
/* const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", (evento) => {
  console.log(evento);
  evento.preventDefault();
  // preventDefault() Previene la acción por defecto. Utíl para validar formulario
  console.log("Enviando formulario");
}); */

/* 149 - EVENTOS CON EL TECLADO */

// -- Eventos con los inputs y los text area --
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
  // las llaves deben llevar el mismo nombre de los inputs
};

const formulario = document.querySelector(".formulario");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// *Asigna la acción al evento
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  // Validar formulario
  const { nombre, email, mensaje } = datos; // Uso del destructuring

  // -- Validar que los campos NO esten vacíos --
  // En caso de estar vacíos;
  if (nombre === "" || email === "" || mensaje === "") {
    mostarError("Todos los campos son obligatorios");
    return; // corta el código si la condición se cumple
  }

  // -- Alerta de campos completados --
  mostrarMensaje("Mensaje enviado correctamente");

  console.log("enviando formulario");
});

function leerTexto(e) {
  // console.log(e.target.value);
  datos[e.target.id] = e.target.value;
  datos[e.target.id] = e.target.value;
  datos[e.target.id] = e.target.value;

  console.log(datos);
}

// -- Función para mostrar en pantalla que los campos se completaron correctamente --
function mostrarMensaje(mensaje) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;
  alerta.classList.add("correcto");
  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 2000);
}

// -- Función para mostrar el texto de error en el HTML --
function mostarError(mensaje) {
  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("error");

  formulario.appendChild(error);

  // Desaparecer alerta
  setTimeout(() => {
    error.remove();
  }, 2000);
}
