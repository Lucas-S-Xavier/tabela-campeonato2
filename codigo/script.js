var primeira_rodada = document.getElementById ('primeira_rodada')
var segunda_rodada = document.getElementById ('segunda_rodada')
var conteudo_regras = document.getElementById ('regras')
var conteudo_classificacao = document.getElementById ('classificacao')

function clickDireita() {
    if (segunda_rodada.style.display = 'none') {
        segunda_rodada.style.display = 'block'
        primeira_rodada.style.display = 'none'
    }
}

function clickEsquerda() {
    if (segunda_rodada.style.display = 'block') {
        segunda_rodada.style.display = 'none'
        primeira_rodada.style.display = 'block'
    }
}