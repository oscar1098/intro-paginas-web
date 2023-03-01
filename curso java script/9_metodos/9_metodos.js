var texto = 'Oscar Mauricio';

var nuevoTexto = texto.length //cuantos caracteres tiene incluye espacios
var nuevoTexto2 = texto.substring(3)  //Corta el texto desde el tercer caracter
var nuevoTexto3 = texto.substr(0,5)  //Corta el texto desde el primer parametro hasta el segundo
var nuevoTexto4 = texto.indexOf('a',4)  //En que posicion se encuentra la letras sengundp parametro desde donde buscar
var nuevoTexto5 = texto.lastIndexOf('i')  //En que posiciom se encuetra la letra de atras hacia adelante
var nuevoTexto6 = texto.replace( 'Oscar','Saray Roman' )  // Reemplaza la cadena de texto la palabra
var nuevoTexto7 = texto.toLowerCase(); // Palabras a minuscula
var nuevoTexto8 = texto.toUpperCase(); // Palabras a mayuscula


document.write(nuevoTexto8)