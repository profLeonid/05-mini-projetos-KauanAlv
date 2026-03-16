'use strict'

const dados = {
    vertebrado: ["Ave", "Mamífero"],
    invertebrado: ["Inseto", "Anelideo"]
}

const selectTipagem = document.getElementById('tipagem')
const selectClasse = document.getElementById('classe')

selectTipagem.addEventListener('change', function(){
    const tipagemSelecionada = this.value

    selectClasse.textContent = '<option value ="">escolha a classe</option>'

    if (tipagemSelecionada && dados[tipagemSelecionada]) {
        selectClasse.disable = false

        dados[tipagemSelecionada].forEach(classe => {
            const option = document.createElement('option')
            option.value = classe.toLowerCase()
            option.text = classe
            selectClasse.add(option)
        })
    } else {
        selectClasse.disable = true
    }
})