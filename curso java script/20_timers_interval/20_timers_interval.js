(function(){

    var contador = 0;

//Timeout
    var saludo = function() {
        contador++
        console.log(contador);

        if ( contador === 5 ) {
            clearInterval( intervalo )
        }
    }

    // setTimeout( saludo, 3000 )

    //Interval

    var intervalo = setInterval( saludo, 1000 )


}())