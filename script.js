function contar() {

  var inicio = document.getElementById('txtin')
  var fim = document.getElementById('txtfim')
  var passo = document.getElementById('txtpasso')
  let res   = document.getElementById('res')
  
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossivel Contar'
    //window.alert("[ERRO] Faltam dados")
  } else {
    res.innerHTML = `Contando: <br> `
    var inicio = Number(inicio.value)
    var fim = Number(fim.value)
    var passo = Number(passo.value)
    if (passo <= 0){
        window.alert('Passo Invalido! Considerando passo 1')
        passo = 1
    }
      if (inicio<fim){
        for(var c= inicio;  c<= fim ; c += passo){
        res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        for (var c= inicio; c>= fim; c -= passo){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
}
