
var elemento = document.createElement('li'),
    contenido = document.createTextNode('Nuevo Texto');

elemento.appendChild(contenido);

var padre = document.getElementById('lista')
var hijo = document.getElementsByTagName('li')[1]

// padre.appendChild(elemento);

//inserar al inicio primer argumento es el elemento y el segundo la posicion
padre.insertBefore( elemento, hijo )