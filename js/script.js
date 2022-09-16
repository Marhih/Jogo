let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
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


function criarPalavraSecreta(){
  const indexPalavra = parseInt(Math.random() * palavras.length)

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
  criarPalavraSecreta();
  const categoria = document.getElementById('categoria');
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById('palavra-secreta');
  palavraTela.innerHTML = '';

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = '&nbsp;'
      palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
    }else {
      palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
    }
  }
}

function verificaLetraEscolhida(letra){
  if (tentativas > 0) {
    modificaStyleLetra('tecla-' + letra);
    comparaLista(letra);
  }
}

function modificaStyleLetra(tecla){
  document.getElementById(tecla).style.background = 'purple';
  document.getElementById(tecla).style.color = '#ffffff';
}

function comparaLista(letra){
  const pos = palavraSecretaSorteada.indexOf(letra);
  if (pos < 0) {
    tentativas--
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
    tentativas = 0;
  }
}
