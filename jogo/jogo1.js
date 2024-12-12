const jogoArea= document.getElementById('jogo');
const alvo= document.getElementById('alvo');
const pontuacaoDisplay = document.getElementById('pontuacao');
const tempoDisplay = document.getElementById('tempo');
const botaoReiniciar = document.getElementById('botao-reiniciar')

let pontuacao=0;
let tempoRestante=20;
let jogoAtivo=true;

function moverAlvo(){
    if (!jogoAtivo) return;
    const largura = jogoArea.clientWidth - alvo.clientWidth;
    const altura = jogoArea.clientHeight - alvo.clientHeight;

    const novaPosicaoX = Math.random()* largura;
    const novaPosicaoY = Math.random()* altura;

    alvo.style.left =`${novaPosicaoX}px`;
    alvo.style.top =`${novaPosicaoY}px`;
}
alvo.addEventListener("click", () => {
    if (jogoAtivo){
        pontuacao++;
        pontuacaoDisplay.textContent=pontuacao;
        moverAlvo();
    }


});   

function iniciarContagem(){
    const intervalo = setInterval( () =>{
        tempoRestante--;
        tempoDisplay.textContent = tempoRestante;

        if(tempoRestante <= 0){
            clearInterval(intervalo);
        }
    },1000)
}
function finalizarJogo(){
    jogoAtivo = false;
    alvo.style.display = "none";
    botaoReiniciar.style.display = "inline-block";
    alert("Tempo esgotado! Sua pontuação foi: ${pontuacao}")
}
botaoReiniciar.addEventListener("click", () =>{
    pontuacao = 0;
    tempoRestante=20;
    jogoAtivo= true;
    alvo.style.display = "block";
    botaoReiniciar.style.display ="none";
    pontuacaoDisplay.textContent= pontuacao;
    tempoDisplay.textContent= tempoRestante;
    moverAlvo();
    iniciarContagem();
});
moverAlvo();
iniciarContagem();