function flex(id,btn){
    var botao = document.getElementById(btn);
    if(document.getElementById(id).style.display == "flex")
    {
        document.getElementById(id).style.display ="none"
        botao.textContent = 'Mostrar Mais >'
    }
    else{
        document.getElementById(id).style.display ="flex"
        botao.textContent = 'Mostrar Menos >'}
}
  