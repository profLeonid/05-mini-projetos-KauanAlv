'use strict'

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('verde', 'marrom', 'vermelho')
}

function calcularMedia() {
    const nt1 = document.getElementById('nota1')
    const nt2 = document.getElementById('nota2')
    const nt3 = document.getElementById('nota3')
    const resultado = document.getElementById('resultado')
    let media = ''
    let mensagemSituacao = ''
    let situacao = ''

    media = ((Number(nt1.value) + Number(nt2.value) + Number(nt3.value)) / 3).toFixed(2)

    removerClasses()
    if (media >= 7) {
        mensagemSituacao = 'Aprovado'
        resultado.classList.add('verde')
    }
    else if (media < 5) {
        mensagemSituacao = 'Reprovado'
        resultado.classList.add('vermelho')
    }
    else {
        mensagemSituacao = 'Recuperação'
        resultado.classList.add('marrom')
    }

    resultado.textContent = (`A média final do aluno é: ${media}, a situação do aluno é: ${mensagemSituacao}`)
}
