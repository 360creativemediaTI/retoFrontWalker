const submit = document.querySelector('form')

window.addEventListener('DOMContentLoaded', () => {

    submit.addEventListener('submit', enviarMoneda)

    
})


function enviarMoneda(e) {
    e.preventDefault()

    console.log(e);
}

