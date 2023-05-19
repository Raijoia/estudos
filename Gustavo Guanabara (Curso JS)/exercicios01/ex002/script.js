function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO]Verifique os dados e tente novamento!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10){
        // criança
        img.setAttribute('src', "./image/meninocriança.jpg")
      } else if (idade < 21) {
        // jovem
        img.setAttribute('src', "./image/homemjovem.jpg")
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', "./image/homemadulto.jpg")
      } else {
        // idoso
        img.setAttribute('src', "./image/homemvelho.jpg")
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10){
        // criança
        img.setAttribute('src', "./image/meninacriança.jpg")
      } else if (idade < 21) {
        // jovem
        img.setAttribute('src', "./image/mulherjovem.jpg")
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', "./image/mulheradulta.jpg")
      } else {
        // idoso
        img.setAttribute('src', "./image/mulhervelha.jpg")
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }

}
