var chave = document.querySelector(".chave");

transicao = document.addEventListener("click", function () {
  var selection = document.querySelector("#tipo_cripto").value;
  if (selection === "base64") {
    chave.style.display = "none";
  } else {
    chave.style.display = "flex";
    chave.style.flexDirection = "row";
  }
});

//str.charCodeAt(index)   IMPORTANTE index é o parâmetroUm inteiro maior ou igual a 0 e menor que o comprimento da string. Se não for um    número, o padrão será 0.

//charCodeAt(i+1)como se examinando/reproduzindo a string com duas letras

// ex: 'ABC'.charCodeAt(0); // retorna 65

var alfabetoMinusculo = "abcdefghijklmnopqrstuvwxyz";

alfabetoMinusculo.charCodeAt();

function codificarCifraCesar() {}

var radio = document.querySelectorAll(".radio");

var botao = document.querySelector(".button");

var text = document.querySelector("#text");

var resultado = document.querySelector(".resultado");

botao.addEventListener("click", function (event) {
  event.preventDefault();
  if (radio[0].checked) {
    resultado.value = text.value;
  }
  {
    alert("segunda funcao");
  }
});

/*var letraMinuscula = alfabetominusculo[indice]   

*/
