document.querySelector("#mais").addEventListener('click', () => {
    console.log(Number(document.querySelector("#num1").value))
})


document.querySelector("#mais").addEventListener('click', () => {

    let num1 = Number(document.querySelector("#num1").value)
    let num2 = Number(document.querySelector("#num2").value)
    let resultado = num1 + num2
    document.querySelector("#result").textContent = resultado
})

document.querySelector("#menos").addEventListener('click', () => {

    let num1 = Number(document.querySelector("#num1").value)
    let num2 = Number(document.querySelector("#num2").value)
    let resultado = num1 - num2
    document.querySelector("#result").textContent = resultado
})

document.querySelector("#vezes").addEventListener('click', () => {

    let num1 = Number(document.querySelector("#num1").value)
    let num2 = Number(document.querySelector("#num2").value)
    let resultado = num1 * num2
    document.querySelector("#result").textContent = resultado
})

document.querySelector("#dividir").addEventListener('click', () => {

    let num1 = Number(document.querySelector("#num1").value)
    let num2 = Number(document.querySelector("#num2").value)
    let resultado = num2 === 0 ? "impossivel de responder" : num1 / num2
    document.querySelector("#result").textContent = resultado
})





