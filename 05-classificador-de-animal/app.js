'use strict'

const dados = {
    "vertebrado": ["Ave", "Mamifero"],
    "ave": ["Carnivoro", "Onivoro"],
    "mamifero": ["Onivoro", "Herbivoro"],
    "invertebrado": ["Inseto", "Anelideo"],
    "inseto": ["Hematofago", "Herbivoro"],
    "anelideo": ["Hematofago", "Onivoro"]
}

const animalClassificado = {
    "vertebrado": {
        "ave": {
            "carnivoro": "Águia",
            "onivoro": "Pomba"
        },
        "mamifero": {
            "onivoro": "Homem",
            "herbivoro": "Vaca"
        }
    },
    "invertebrado": {
        "inseto": {
            "hematofago": "Pulga",
            "herbivoro": "Lagarta"
        },
        "anelideo": {
            "hematofago": "Sanguessuga",
            "onivoro": "Minhoca"
        }
    }

}

const tipoEscolhido = document.getElementById("tipagem")
const classeEscolhida = document.getElementById("classe")
const classificacaoEscolhida = document.getElementById("classificacao")

tipoEscolhido.addEventListener("change", function () {
    const tipoSelecionado = this.value.toLowerCase()

    classeEscolhida.innerHTML = '<option value="" selected disabled>Selecione uma classe</option>'

    if (tipoSelecionado && dados[tipoSelecionado]) {
        classeEscolhida.disabled = false

        dados[tipoSelecionado].forEach(function (classe) {
            const option = document.createElement("option")
            option.text = classe
            option.value = classe.toLowerCase()
            classeEscolhida.add(option)
        })

    } else {
        classeEscolhida.disabled = true
    }
})

classeEscolhida.addEventListener("change", function () {
    const classeSelecionada = this.value.toLowerCase()

    classificacaoEscolhida.innerHTML = '<option value="" selected disabled>Selecione uma classificação</option>'

    if (classeSelecionada && dados[classeSelecionada]) {
        classificacaoEscolhida.disabled = false

        dados[classeSelecionada].forEach(function (classificacao) {
            const option = document.createElement("option")
            option.text = classificacao
            option.value = classificacao.toLowerCase()
            classificacaoEscolhida.add(option)
        })

    } else {
        classificacaoEscolhida.disabled = true
    }
})

function classificarAnimal() {
    const coluna = tipoEscolhido.value
    const tipo = classeEscolhida.value
    const dieta = classificacaoEscolhida.value

    const resultado = document.getElementById("resultado")

    if (!coluna || !tipo || !dieta) {
        resultado.textContent = "Selecione todas as opções"
        return
    }

    let animal = ''
    if (
        animalClassificado[coluna] &&
        animalClassificado[coluna][tipo] &&
        animalClassificado[coluna][tipo][dieta]
    ) {
        animal = animalClassificado[coluna][tipo][dieta]
    }

    resultado.textContent = animal || "Combinação não encontrada"
}