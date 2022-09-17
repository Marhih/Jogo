let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

//lista de palavras
const palavras = [
  palavra001 = {
    nome: 'IRLANDA',
    categoria: 'LUGARES'
  },
  palavra002 = {
    nome: 'VENEZUELA',
    categoria: 'LUGARES'
  },
  palavra003 = {
    nome: 'BRASIL',
    categoria: 'LUGARES'
  },
  palavra004 = {
    nome: 'ARGENTINA',
    categoria: 'LUGARES'
  },
  palavra005 = {
    nome: 'RUSSIA',
    categoria: 'LUGARES'
  },
  palavra006 = {
    nome: 'CANADA',
    categoria: 'LUGARES'
  },
  palavra007 = {
    nome: 'LASANHA',
    categoria: 'COMIDA'
  },
  palavra008 = {
    nome: 'FRANGO',
    categoria: 'COMIDA'
  },
  palavra009 = {
    nome: 'CHURRASCO',
    categoria: 'COMIDA'
  },
  palavra010 = {
    nome: 'ARROZ',
    categoria: 'COMIDA'
  },
  palavra011 = {
    nome: 'SALADA',
    categoria: 'COMIDA'
  },
  palavra012 = {
    nome: 'PIZZA',
    categoria: 'COMIDA'
  },
  palavra013 = {
    nome: 'NAVIO',
    categoria: 'TRANSPORTE'
  },
  palavra014 = {
    nome: 'CARRO',
    categoria: 'TRANSPORTE'
  },
  palavra015 = {
    nome: 'BICICLETA',
    categoria: 'TRANSPORTE'
  },
  palavra016 = {
    nome: 'ONIBUS',
    categoria: 'TRANSPORTE'
  },
  palavra017 = {
    nome: 'AVIAO',
    categoria: 'TRANSPORTE'
  },
  palavra018 = {
    nome: 'MOTO',
    categoria: 'TRANSPORTE'
  }
];

//Função para criar sortear a palavra do jogo
criarPalavraSecreta();
function criarPalavraSecreta(){
  const indexPalavra = parseInt(Math.random() * palavras.length)

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

//Função para exibir palavras na tela
montarPalavraNaTela();
function montarPalavraNaTela(){
  const categoria = document.getElementById('categoria');
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById('palavra-secreta');
  palavraTela.innerHTML = '';

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      if (palavraSecretaSorteada[i] == " "){
        listaDinamica[i] = '&nbsp;'
        palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
      }else{
        listaDinamica[i] = "&nbsp;"
        palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
      }
    }
    else{
      if (palavraSecretaSorteada[i] == " ") {
          listaDinamica[i] = " ";
          palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
      }
      else{
          palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
      }
    }
  }
}

//Função para verficar se letra está ou não na palavra sorteada
function verificaLetraEscolhida(letra){
  document.getElementById('tecla-' + letra).disabled = true;
  if (tentativas > 0) {
    modificaStyleLetra('tecla-' + letra);
    comparaLista(letra);
    montarPalavraNaTela();
  }
}

//Função para mudar o estilo após clicar na letra
function modificaStyleLetra(tecla){
  document.getElementById(tecla).style.background = 'purple';
  document.getElementById(tecla).style.color = '#ffffff';
}

//Função para comparar letras escolhidas com palavra sorteada, e anexar imagem após erros
function comparaLista(letra){
  const pos = palavraSecretaSorteada.indexOf(letra);
  if (pos < 0) {
    tentativas--
    carregaImagemForca();

    if (tentativas == 0) {
      alert('Você perdeu!!! A palavra era ' + palavraSecretaSorteada)
    }
  }else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (var i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }
  if (vitoria == true) {
    alert('PARABÉNS!!! Você venceu!')
    tentativas = 0;
  }
}

//Função para exibir as imagens da forca
function carregaImagemForca(){
  switch (tentativas) {
    case 5:
      document.getElementById('imagem').style.background = "url(../img/forca01.png)";
      break;
    case 4:
      document.getElementById('imagem').style.background = "url(../img/forca02.png)";
      break;
    case 3:
      document.getElementById('imagem').style.background = "url(../img/forca03.png)";
      break;
    case 2:
      document.getElementById('imagem').style.background = "url(../img/forca04.png)";
      break;
    case 1:
      document.getElementById('imagem').style.background = "url(../img/forca05.png)";
      break;
    case 0:
      document.getElementById('imagem').style.background = "url(../img/forca06.png)";
      break;
    default:
      document.getElementById('imagem').style.background = "url(../img/forca.png)";
      break;
  }
}

//Função para reiniciar jogo após clicar no botão
let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});
