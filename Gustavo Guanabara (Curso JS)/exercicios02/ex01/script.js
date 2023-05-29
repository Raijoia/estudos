function verificar() {
  var start = document.getElementById('txtn1');
  var end = document.getElementById('txtn2');
  var pass = document.getElementById('txtpass');
  var res = document.getElementById('res');

  if (start.value.length == 0 || pass.value.length == 0 || end.value.length == 0) {
    alert('[ERROR] Faltam dados!')
    res.innerHTML = 'Impossível contar!'
  } else if (pass.value <= 0) {
    alert('O valor 0 não é possível, vamos considerar 1')
    pass.value = 1;
  } else {
    res.innerHTML = 'contando: '
    var i = Number(start.value)
    var f = Number(end.value)
    var p = Number(pass.value)

    if (i < f) {
      for (var c = i; c<= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      for (var c = i; c>= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
  }
}