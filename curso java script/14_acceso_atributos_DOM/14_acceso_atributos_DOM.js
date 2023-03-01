var elemento = document.createElement('div'),
    padre = document.getElementById('contenedor'),
    hijo = document.getElementsByTagName('div')[1];

elemento.setAttribute( 'class', 'rojo' )
padre.insertBefore( elemento, hijo  )