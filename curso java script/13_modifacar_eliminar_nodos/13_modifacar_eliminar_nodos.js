
// var primerElemento = document.getElementById('primero');
// primerElemento.textContent = 'Nuevo Texto df'

var elemento = document.createElement('li'),
    contenido = document.createTextNode('Nuevo Texto modificado cambianod el primer item de la lista');

elemento.appendChild(contenido);

//Cambiar nodos del DOM
var padre = document.getElementById('lista'),
    hijo = document.getElementById('primero')
// padre.replaceChild( elemento, hijo  )

//Eliminar nodos del DOM
padre.removeChild( hijo );



    