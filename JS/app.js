//creando cifrado
var wordPrompt = prompt("escribe una palabra");//pide al usuario una palabra

function cipher(word, displacement){

var writeWord = word.toUpperCase()//pasamos a mayusculas

  var storesASCII = []; //almacena el codigo ASCII de la palabra dada por el usuario
  var cipherCesar = []; //almacena el codigo ASCII de la palabra ya cifrada
  var CipherCesarShow = []; //almacena lo que va a mostrar al usuario

  for (var i = 0; i<writeWord.length; i++){ //recorre los elementos del string que entrega el usuario
    storesASCII.push(writeWord.charCodeAt(i)); //agregar elementos con codigo ASCII al array storesASCII
  }

  for ( var j = 0; j<storesASCII.length; j++){ // recorre los elementos de storesASCII
    cipherCesar.push((storesASCII[j] - 65 + displacement)%26+65); // cifra y agrega elementos a cipherCesar
  }

  for ( var k = 0; k<cipherCesar.length; k++){ //recorre cipherCesar que contiene los numeros del codigo ASCII
    CipherCesarShow.push(String.fromCharCode(cipherCesar[k])); //agrega las letras ya cifradas para mostrar
  }

  return CipherCesarShow.join(""); //usamos join para que retorne un string
}
console.log(cipher(wordPrompt,33));


//creando decifrado
function decipher(word){

var writeWord = word.toUpperCase()//pasamos a mayusculas

  var storesASCIIdecipher = []; //almacena el codigo ASCII de la palabra dada por el usuario
  var decipherCesar = []; //almacena el codigo ASCII de la palabra ya decifrada
  var decipherCesarShow = []; //almacena lo que va a mostrar al usuario

  for (var i = 0; i<writeWord.length; i++){ //recorre los elementos del string que entrega el usuario
    storesASCIIdecipher.push(writeWord.charCodeAt(i)); //agregar elementos con codigo ASCII al array storesASCIIdecipher
  }

  for ( var j = 0; j<storesASCIIdecipher.length; j++){ // recorre los elementos de storesASCIIdecipher
    decipherCesar.push((storesASCIIdecipher[j] - 65 - 33)%26+65); // cifra y agrega elementos a decipherCesar
  }

  for ( var k = 0; k<decipherCesar.length; k++){ //recorre decipherCesar que contiene los numeros del codigo ASCII
    decipherCesarShow.push(String.fromCharCode(decipherCesar[k])); //agrega las letras ya decifradas para mostrar
  }

  return decipherCesarShow.join(""); //usamos join para que retorne un string
}
