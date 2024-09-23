let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contraseña');


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123467890!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if( numeroDigitado < 8){
        alert("la cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';
    for(let i= 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;

    }

    contrasena.value = password;

    if (!esContrasenaSegura(password)) {
        alert("La contraseña es débil. Debe contener al menos un número, un carácter especial y una letra mayúscula.");

    }


}

function esContrasenaSegura(password) {
    const tieneNumero = /\d/;
    const tieneCaracterEspecial = /[!@#$%^&*()]/;
    const tieneMayuscula = /[A-Z]/;

    return tieneNumero.test(password) && tieneCaracterEspecial.test(password) && tieneMayuscula.test(password);
}

function limpiarCampo() {
    cantidad.value = '';
    contrasena.value = '';

}











