// adicionando os valores do html
let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

// verificando se o numero esta entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        // retorna true para a function adicionar se o numero for entre 1 e 100
        return true
    } else {
        // retorna falso se não estiver entre 1 e 100
        return false
    }
}

// verificando se o numero está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        // retorna true para a function adicionar se o numero ainda não estiver cadastrado na lista
        return true
    } else {
        // retorna false se o numero já estiver cadastrado na lista
        return false
    }
}

function adicionar() {
    // verificando se o numero esta entre 1 e 100 e se tem já tem o numero na lista, apenas passa do if e os dois valores forem true
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // colocando na array valores
        let item = document.createElement("option") // criando o elemento option para colocar o valor na tela
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = "" // limpando o finalizar se caso a pessoa adicionar mais um número após ter clicado em finalizar
    } else {
        alert("Valor inválido ou já encontrado na lista.")
    }

    // para esvaziar o campo do input após adicionar
    num.value = ""

    // para colocar o foco no input após adicionar
    num.focus()
}

function finalizar() {
    // verificando se existe valores dentro da array valores
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        // se tiver segue esse bloco
        let tot = valores.length // colocando a quantidade de valores da array na variável tot
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos] // nesse caso a variável pos é a posição da array
            if (valores[pos] > maior)
                // teste para vê o maior numero
                maior = valores[pos]
            if (valores[pos] < menor)
                // teste para vê o menor numero
                menor = valores[pos]
        }

        media = soma / tot

        res.innerHTML = "" // zerando o res

        // colocando so valores na tela após clicar em finalizar usando o innerHTML
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`
    }
}
