const usuario = document.querySelector('#usuario')
const contraseña = document.querySelector('#contraseña')
const boton = document.querySelector('#boton')

//Evento
boton.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        usuario: usuario.value,
        contraseña: contraseña.value
    }

    console.log(data)
})