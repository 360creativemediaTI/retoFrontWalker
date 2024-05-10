const form = document.querySelector('form')
const resultadoElement = document.getElementById('monto_resultado')

window.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', enviarMoneda)
})


function enviarMoneda(event) {
    event.preventDefault()
    const monto = document.getElementById('monto').value
    const monedaOrigen = document.getElementById('moneda_origen').value
    const monedaDestino = document.getElementById('moneda_destino').value
    
    const apiUrl = `https://v6.exchangerate-api.com/v6/7a90f6fbf47eb99b1a8d78e8/pair/${monedaOrigen}/${monedaDestino}/${monto}`
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            //const resultadoElement = document.getElementById('monto')<git 
            console.log(data.conversion_result)
            resultadoElement.textContent = `${data.conversion_result}`
        })
        .catch(error => console.error('Error fetching data:', error))
}


