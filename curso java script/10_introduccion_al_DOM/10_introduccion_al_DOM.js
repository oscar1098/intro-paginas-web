var elementosP = document.getElementsByTagName('p');

// Para accerder al parrafo es como si fuera un arreglo

var parrafo1 =  elementosP[0].innerHTML

// Para cambiarlo 

elementosP[0].innerHTML = 'Nuevo Texto modificado'
console.log(parrafo1);

// Accerder a los parrafos por su id

var parrafoId = document.getElementById('segundo')

console.log(parrafoId.innerHTML);