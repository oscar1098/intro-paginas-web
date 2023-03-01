(function(){

    var saludo = function(e) {
         
        console.log('Hola mundo'); 
        e.preventDefault()
        }
    
    var boton = document.getElementById('boton');
    boton.addEventListener('click', saludo)

    // input.removeEventListener( 'focus', saludo )

}())