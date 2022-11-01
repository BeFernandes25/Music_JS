//criando variáveis
const listaDeTeclas = document.querySelectorAll('.tecla');
let ids = [];

//função para tocar o som
function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

//adicionandos ids a lista
for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  ids.push(`#som_${instrumento}`);
}

//adicionando a função a cada tecla
for (let i = 0; i < listaDeTeclas.length; i++) {

  listaDeTeclas[i].onclick = function() {
    tocaSom(ids[i]);
  }

}

// criando variaveis
var pressed = document.getElementById('pressed');
let letras = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']

//Função tecla pressionada
function keyPressed(evt) {
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  return String.fromCharCode(key);
}

//quando a tecla fpi pressionada
document.onkeypress = function(evt) {
  var str = keyPressed(evt);
  pressed.innerHTML = "Teclas Pressionadas: " + str;
  for (let i = 0; i < listaDeTeclas.length; i++) {
    if (letras[i] == str) {
      tocaSom(ids[i]);
    }
  }

};
