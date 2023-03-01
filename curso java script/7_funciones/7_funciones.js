function saludo ( nombre ) {
    // document.write('Hola ' + nombre)
}

// saludo( 'oscar' )

 var suma = function ( num1, num2 ) {
    
    return num1+num2;
}

// document.write( suma(2,2) );
// document.write( '<br>' );
// document.write( suma(20,2) );

var suma = function (numero1, numero2) {
    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)

    var resultado = numero1 + numero2;

    return resultado;
}