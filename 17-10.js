const Usuario = document.getElementById("Usuario");
const Contraseña = document.getElementById("Contraseña");
const botonGuardar = document.getElementById("Guardar");
const botonCerrar = document.getElementById("Cerrar");



botonGuardar.addEventListener ("click", () =>{
    if (Usuario.value == "" && Contraseña.value.length < 6 ) {
        Usuario.classList.add("is-invalid")
        Contraseña.classList.add("is-invalid")
    } else if (Usuario.value !== "" && Contraseña.value.length < 6 ) {
        Contraseña.classList.add("is-invalid")
        Usuario.classList.add("is-valid")
        Usuario.classList.remove("is-invalid")
    }else if (Usuario.value == "" && Contraseña.value.length > 6 ) {
        Usuario.classList.add("is-invalid")
        Contraseña.classList.add("is-valid")
        Contraseña.classList.remove("is-invalid")
    }else{
        Usuario.classList.add("is-valid")
        Usuario.classList.remove("is-invalid")
        Contraseña.classList.add("is-valid")
        Contraseña.classList.remove("is-invalid")
    }
})