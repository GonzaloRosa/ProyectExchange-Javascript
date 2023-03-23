const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('#button')

//Evento
button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})