// adicionando valores do html
var num = document.getElementById("txtn")
var tab = document.getElementById("seltab")
var res = document.getElementById("res")

var array = [] // para colocar os valores na array

// botão adicionar
function adicionar() {
    res.innerHTML = ''
    var n = Number(num.value) // colocando o valor de num como número
    if (num.value.length == 0 || num.value > 100 || num.value <= -1) {
        alert("Por favor, Digite um número!")
    } else {
        do {
            // adicionando no selection
            var item = document.createElement("option")
            item.text = `Valor ${n} adicionado`
            tab.appendChild(item)

            // adicionando na array
            array.push(n)
            break

        } while (n >= 1 && n <= 100)
    }
}

// botão finalizar
function finalizar() {
    if (array.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        let media = 0
        for(let pos in array) {
            soma += array[pos]
            if (array[pos] > maior) 
                maior = array[pos]
            if (array[pos] < menor)
                menor = array[pos]
            
        }
        media = soma / array.length
        res.innerHTML = `<p>Ao todo, temos ${array.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }


}