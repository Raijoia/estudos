function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são exatamente ${hora} horas`
  if (hora >= 0 && hora < 12) {
    img.src = "./image/fotomanha.jpg"
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora <= 18) {
    img.src = "./image/fototarde.jpg"
    document.body.style.background = '#b9846f'
  } else {
    img.src = "./image/fotonoite.jpg"
    document.body.style.background = '#515154'
  }
}
