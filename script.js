function flex(id,btn){
    var botao = document.getElementById(btn);
    if(document.getElementById(id).style.display == "block")
    {
        document.getElementById(id).style.display ="none"
        botao.textContent = 'Mostrar Mais >'
    }
    else{
        document.getElementById(id).style.display ="block"
        botao.textContent = 'Mostrar Menos >'}
}
function dado(d,classe){
    dclasse = document.getElementById(classe)
    const min = 1
    const max = parseInt(d,10)
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    dclasse.textContent = randomNum
}
  