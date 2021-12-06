var chave = document.querySelector(".chave");

transicao = document.addEventListener("click", function () {
  var selection = document.querySelector("#tipo_cripto").value;
  if (selection === "base64") {
    chave.style.display = "none";
  } else {
    chave.style.display = "flex";
    //chave.style.flexDirection = "row";
  }
});



var radio = document.querySelectorAll(".radio"); // radio 
var botao = document.querySelector(".button"); // botão final do resultado
var resultado = document.querySelector(".resultado");
var chave = document.querySelector("#chave");
var text = document.querySelector("#text");

botao.addEventListener("click", function (event) {
  event.preventDefault();
  if(radio[0].checked){
    var valorTexto = text.value.split('');
    var valorChave = parseInt(chave.value) // parseint para js receber como número
    resultado.value = codifica(valorTexto /*texto*/, valorChave/*chave*/) 
    
  } else {
    var valorTexto = text.value.split('');
    var valorChave = parseInt(chave.value)
    resultado.value = decodifica(valorTexto, valorChave)
  }
});

function codifica(texto,chave){ // bruno,2
  return texto.map((teste)=>{
     //return texto.map(map é um for que transforma string em um array) == ['b','r','u','n','o']
     //parâmetro teste é a variável que vai testar cada item do array no algoritmo
    var cripto = teste.charCodeAt();
    if(cripto >= 65 && cripto<=90){
      return String.fromCharCode(((cripto-65 +chave)%26)+65)     
      // ex:cripto = 70 --> 70-65 + chave(ex:2) --> 5 + 2 --> 7 (%26 mantém dentro do tamanho do alfabeto e se passar volta pro início) -->+65 (volta pro códico ascii) 
    }else if(cripto >= 97 && cripto <= 122){
      return String.fromCharCode(((cripto-97+chave)%26)+97)
    }else{
      return teste
    }

  }).join('') // o join vai junta o nosso novo array tranformando em string dnv
}

function decodifica(texto,chave){
  return texto.map((teste)=>{
    var cripto = teste.charCodeAt();
    if(cripto >= 65 && cripto<=90){
      return String.fromCharCode(((cripto-65 -chave)%26)+65) 
    }else if(cripto >= 97 && cripto <= 122){
      return String.fromCharCode(((cripto-97-chave)%26)+97)
    }else{
      return teste
    }

  }).join('')
}
