var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');

    var validarNombre = function (e){
        if ( formulario.nombre.value == 0 ) {
            alert('Completa el campo nombre');
            e.preventDefault()
        }
    };

    var validarRadio = function (e) {
        if ( formulario.sexo[0].checked == true || formulario.sexo[1].checked == true ) {
        } else {
            alert('Completa el campo sexo')
            e.preventDefault()
        }
    }

    var validarCheckBox = function (e) {
        if ( formulario.terminos.checked == false ) {
            alert('Acepta los terminos y condiciones')
            e.preventDefault()
        }
    }

    var validar = function (e){
        validarNombre(e)
        validarRadio(e)
        validarCheckBox(e)
    }

formulario.addEventListener( 'submit', validar );