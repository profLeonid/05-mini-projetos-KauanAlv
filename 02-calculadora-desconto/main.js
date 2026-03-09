'use strict'

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('verde', 'marrom', 'vermelho')
}

function calcularDesconto() {
    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')
    let descontoFinal = ''
    let resultadoCalculo = ''
    let mensagemFinal = ''

    descontoFinal = preco.value * (desconto.value / 100)
    resultadoCalculo = preco.value - descontoFinal

    mensagemFinal = `O valor economizado foi de: ${descontoFinal} - Seu preço final foi de: ${resultadoCalculo}`

    removerClasses()
    if (desconto.value <= 5) {
        resultado.textContent = mensagemFinal
        resultado.classList.add('verde')
    } else if (desconto.value > 5 && desconto.value <= 10) {
        resultado.textContent = mensagemFinal
        resultado.classList.add('marrom')
    } else {
        resultado.textContent = mensagemFinal
        resultado.classList.add('vermelho')
    }
}