/* Seleccionar elementos de HTML */

// querySelector
const heading = document.querySelector('.header__texto h2') // retorna 0 o 1 elementos

heading.textContent = "Nuevo heading" // Modifica el texto del contenido
heading.classList.add("nueva-clase") // Agrega nueva clase
console.log(heading);

/* Se recomienda tener en cuenta BEM */
/* JS permite manipular los elemetos de HTML */

// querySelectorAll

/* Retorna 0 si el selector está malo o no hay ningún elemento
    hasta todos los elementos que concuerden con el selector tipo CSS
    que se le pase a la función querySelectroAll()
*/

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces);

/* Acceder a un elemeto en específico */
console.log(enlaces[0]);

enlaces[0].textContent = "nuevo enlace"

/*  Modificar enlace del elemento */
enlaces[0].href = 'https://www.google.com'

/* Añadirle clase nueva */
enlaces[0].classList.add('XD-class')

/* Remover una clase */
enlaces[0].classList.remove('XD-class')

//getElementById