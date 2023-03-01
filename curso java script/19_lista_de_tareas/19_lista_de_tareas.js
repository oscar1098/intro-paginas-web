(function(){
    // Varibles
    var lista = document.getElementById('lista'),
        tareaInput = document.getElementById('tareaInput'),
        btnNuevaTarea = document.getElementById('btn-agregar');

    // Funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement('li'),
            enlace = document.createElement('a'),
            contenido = document.createTextNode( tarea )

        if ( tarea == '' ) {
            tareaInput.setAttribute('placeholder', 'Agrega una tarea valida');
            tareaInput.className = 'error';
            return false
        }

        //Agregamos contenido al enlace
        enlace.appendChild(contenido)
        //le establecemos el atributo
        enlace.setAttribute('href', '#')
        //Agregar el enlace a la nueva tarea
        nuevaTarea.appendChild(enlace)
        //Agregamos la nueva tarea a lista
        lista.appendChild(nuevaTarea)

        tareaInput.value = ''

        for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener('click', function(){
                this.parentNode.removeChild(this)
            })
        }
    };

    var comprobarInput = function(){
        tareaInput.className = ''
        tareaInput.setAttribute( 'placeholder', 'Agrega tu tarea' )
    };

    var eliminarTarea = function(){
        this.parentNode.removeChild.removeChild( this )
    };
    
    // Eventos

    // Agregar Tarea
    btnNuevaTarea.addEventListener('click', agregarTarea );

    // Comprobar input
    tareaInput.addEventListener('click', comprobarInput);

    //Borrando los elementos de la lista
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener('click', eliminarTarea)
    }

}());