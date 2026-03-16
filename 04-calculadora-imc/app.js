'use strict'

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixoP', 'pesoN', 'sobreP', 'obGI', 'obGII', 'obGIII')
}

function calcularIMC() {
    const nome = document.getElementById('nome')
    const altura = document.getElementById('altura')
    const peso = document.getElementById('peso')
    const resultado = document.getElementById('resultado')
    let imc = ''
    let mensagemImc = ''

    imc = Number(peso.value / (Number(altura.value) * Number(altura.value))).toFixed(2)

    removerClasses()
    if (imc < 18.5) {
        mensagemImc = "Abaixo do peso"
        resultado.classList.add('abaixoP')
    } else if (imc >= 18.5 && imc < 25) {
        mensagemImc = "Peso normal"
        resultado.classList.add('pesoN')
    } else if (imc >= 25.0 && imc < 30) {
        mensagemImc = "Sobrepeso"
        resultado.classList.add('sobreP')
    } else if (imc >= 30.0 && imc < 35) {
        mensagemImc = "Obesidade grau I"
        resultado.classList.add('obGI')
    } else if (imc >= 35.0 && imc < 40) {
        mensagemImc = "Obesidade grau II"
        resultado.classList.add('obGII')
    } else {
        mensagemImc = "Obesidade grau III"
        resultado.classList.add('obGIII')
    }

    resultado.textContent = (`Olá ${nome.value}, seu imc é de ${imc} e está situado como ${mensagemImc}`)
}