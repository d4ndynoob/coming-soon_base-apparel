$(document).ready(function(){

    //CONVERTIR TEXTO A MINUSCULAS
    function formatearTextoMinusculas(){
        this.value = this.value.toLowerCase();
    }
    //VALIDAR CORREO ELECTRONICO
    function validarCorreo(email){
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(email);
        if(esValido == true){
            console.log('aqui x2');
            return true;
        } else{
            console.log('aqui x2');
            return false;
        }
    }

    $('#email').on('keyup', formatearTextoMinusculas);
    $('#email').on('keyup', function(){
        console.log('aqui')
        //Validamos correo
        if(!validarCorreo($('#email').val())){
            document.getElementById('main__error-text').classList.add('main__error-text--mostrar');
            document.getElementById('main__error').classList.add('main__error--mostrar');
            document.getElementById('main__error-text').classList.remove('main__error-text');
            document.getElementById('main__error').classList.remove('main__error');
            document.getElementById('email').classList.add('label__error');
        }else{
            document.getElementById('main__error-text').classList.remove('main__error-text--mostrar');
            document.getElementById('main__error').classList.remove('main__error--mostrar');
            document.getElementById('main__error-text').classList.add('main__error-text');
            document.getElementById('main__error').classList.add('main__error');
            document.getElementById('email').classList.remove('label__error');
        }
    });
    $('#main__button').on('click', function(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "This button doesn't work",
          });
    });

        
})