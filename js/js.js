var palabraRegistrada = "";
var palabraRegistradaArray = "";
var palabraAdivina = "";
var contLetrasBr = "<hr>";

//Contador digitos index.
function countChars(obj){
    var maxLength = 15;
    var minLength = 4;
    var strLength = obj.value.length;
    
    if(strLength < minLength || strLength > maxLength){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+' de '+maxLength+' caracteres...</span>';
    }else{
        document.getElementById("charNum").innerHTML = '<span style="color: green;">'+strLength+' de '+maxLength+' caracteres...</span>';
    }
}

//Contador digitos Tabla.
function countChars2(obj2){
    var maxLength = palabraRegistrada.length;
    var strLength = obj2.value.length;
    
    if(strLength < maxLength || strLength > maxLength){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+' de '+maxLength+' caracteres...</span>';
    }else{
        document.getElementById("charNum").innerHTML = '<span style="color: green;">'+strLength+' de '+maxLength+' caracteres...</span>';
    }
}


function capturarPalabra() {
  var vueltasRowLetaras = 0;
  var contadorCuadroLetras = 0;

  palabraRegistrada = document.getElementById("inputPalabra").value;

  if (palabraRegistrada.split(" ").length >= 2){
      //Le agrega la clase de animacion al ID
    document.getElementById("inputPalabra").classList.remove("errorRemove");
    document.getElementById("inputPalabra").classList.add("animate__shakeX");
    document.getElementById("inputPalabra").classList.add("error");

    //Espera 1 segundo para despues que se active se quite la clase que se añadio.
    setTimeout(() => {
    document.getElementById("inputPalabra").classList.remove("animate__shakeX");
    document.getElementById("inputPalabra").classList.add("errorRemove");
    document.getElementById("inputPalabra").classList.remove("error");
    }, 500);
  }else{


  if (palabraRegistrada.length <= 3 || palabraRegistrada.length > 15){

    //Le agrega la clase de animacion al ID
    document.getElementById("inputPalabra").classList.remove("errorRemove");
    document.getElementById("inputPalabra").classList.add("animate__shakeX");
    document.getElementById("inputPalabra").classList.add("error");

    //Espera 1 segundo para despues que se active se quite la clase que se añadio.
    setTimeout(() => {
    document.getElementById("inputPalabra").classList.remove("animate__shakeX");
    document.getElementById("inputPalabra").classList.add("errorRemove");
    document.getElementById("inputPalabra").classList.remove("error");
    }, 500);

  }else{


  

  //Convierte en mayusculas.
  palabraRegistrada = palabraRegistrada.toUpperCase();
  //Crea arreglo a partir de PalabraRegistrada.
  palabraRegistradaArray = palabraRegistrada.split('');

    var innerHTMLText = '';

    //input e ingreso de respuesta
    innerHTMLText += '<div class="container-inputText">';
      innerHTMLText += '<div class="textAdivina">¡Adivina la palabra!</div>';
      innerHTMLText += '<div class="textIntentosMain" id="intentos"><div class="textCantidadLetras">Palabra con: <b>'+palabraRegistrada.length+' letras.</b></div><div class="textIntentos"><b>Intentos: 0/6</b></div></div>';
      innerHTMLText += '<div class="containerInputBtn">';
      innerHTMLText += '<input name="message" onkeyup="countChars2(this);" id="adivinarPalabra" placeholder="¡ADIVINA!" class="inputAdivinarPalabra animate__animated" name="adivinar" onkeypress="if (event.keyCode == 13) adivinarBtn()" type="text">';
      innerHTMLText += '<button class="btnAction2" onclick="adivinarBtn()" type="button">Adivinar!</button></div>';
      innerHTMLText += '<p class="charNumClass" id="charNum">0 caracteres...</p>';
    innerHTMLText += '</div></div><br>';

    //tabla con letras

    innerHTMLText += '<div class="container-cuadroLetras">';

    for (var a = 0; a <= 5; a++) {
      innerHTMLText += '<div class="row espacioCuadros">';

      for (var i = 1; i <= palabraRegistrada.length; i++) {
        if(vueltasRowLetaras == 5){
            innerHTMLText += '<div class="col cuadroLetras cuadroLetras2"><div class="textLetra" id="contLetras'+contadorCuadroLetras+'"></div></div>';
          }else{
            innerHTMLText += '<div class="col cuadroLetras"><div class="textLetra animate__animated" id="contLetras'+contadorCuadroLetras+'"></div></div>';
        }

        contadorCuadroLetras++;
      }

      innerHTMLText += '</div>';
      vueltasRowLetaras++;
    }

    //Letras correctas
    innerHTMLText += '<hr><div class="row containerLetras"><div class="col letrasAbc" id="LetraA">A</div><div class="col letrasAbc" id="LetraB">B</div><div class="col letrasAbc" id="LetraC">C</div><div class="col letrasAbc" id="LetraD">D</div><div class="col letrasAbc" id="LetraE">E</div><div class="col letrasAbc" id="LetraF">F</div><div class="col letrasAbc" id="LetraG">G</div><div class="col letrasAbc" id="LetraH">H</div><div class="col letrasAbc" id="LetraI">I</div><div class="col letrasAbc" id="LetraJ">J</div><div class="col letrasAbc" id="LetraK">K</div><div class="col letrasAbc" id="LetraL">L</div><div class="col letrasAbc" id="LetraM">M</div><div class="col letrasAbc" id="LetraN">N</div><div class="col letrasAbc" id="LetraÑ">Ñ</div><div class="col letrasAbc" id="LetraO">O</div><div class="col letrasAbc" id="LetraP">P</div><div class="col letrasAbc" id="LetraQ">Q</div><div class="col letrasAbc" id="LetraR">R</div><div class="col letrasAbc" id="LetraS">S</div><div class="col letrasAbc" id="LetraT">T</div><div class="col letrasAbc" id="LetraU">U</div><div class="col letrasAbc" id="LetraV">V</div><div class="col letrasAbc" id="LetraW">W</div><div class="col letrasAbc" id="LetraX">X</div><div class="col letrasAbc" id="LetraY">Y</div><div class="col letrasAbc" id="LetraZ">Z</div></div>';

    //Instruccion 
    innerHTMLText += '<br><center><p id="textoInferior">Verde: La letra se encuentra en la posicion correcta<br>Azul: La letra existe pero no esta en la posicion correcta</p></center></div>';
      



    document.getElementById("container-main").innerHTML = innerHTMLText;
  }
}
}


var vueltasCuadroLetras = 0;
var vueltasCuadroLetrasArray = 0;
var vueltasCuadroLetrasArray2 = 0;
var intentos = 1;
var letrasCorrectas = 0;

function adivinarBtn() {
  palabraAdivina = document.getElementById("adivinarPalabra").value;
  //Convierte a Mayusculas.
  palabraAdivina = palabraAdivina.toUpperCase();

  if (palabraAdivina.split(" ").length >= 2){
      //Le agrega la clase de animacion al ID
    document.getElementById("adivinarPalabra").classList.remove("errorRemove");
    document.getElementById("adivinarPalabra").classList.add("animate__shakeX");
    document.getElementById("adivinarPalabra").classList.add("error");

    //Espera 1 segundo para despues que se active se quite la clase que se añadio.
    setTimeout(() => {
    document.getElementById("adivinarPalabra").classList.remove("animate__shakeX");
    document.getElementById("adivinarPalabra").classList.add("errorRemove");
    document.getElementById("adivinarPalabra").classList.remove("error");
    }, 500);
  }else{

  //compara si la palabra registrada es igual en cantidad a la que introduce el usuario.
  if (palabraAdivina.length == palabraRegistrada.length){

    var palabraAdivinaArray = palabraAdivina.split('');

          






    //imprime letra por letra.
    for (var b = 1; b <= palabraAdivina.length; b++) {

      //Busca para mostrar letras correctas y mostrar en dom.
          switch (palabraAdivinaArray[vueltasCuadroLetrasArray]) {
            case "A":
            document.getElementById("LetraA").classList.remove("letrasAbc");
            document.getElementById("LetraA").classList.add("colorLetraLoseAbc");
            break;
            case "B":
            document.getElementById("LetraB").classList.remove("letrasAbc");
            document.getElementById("LetraB").classList.add("colorLetraLoseAbc");
            break;
            case "C":
            document.getElementById("LetraC").classList.remove("letrasAbc");
            document.getElementById("LetraC").classList.add("colorLetraLoseAbc");
            break;
            case "D":
            document.getElementById("LetraD").classList.remove("letrasAbc");
            document.getElementById("LetraD").classList.add("colorLetraLoseAbc");
            break;
            case "E":
            document.getElementById("LetraE").classList.remove("letrasAbc");
            document.getElementById("LetraE").classList.add("colorLetraLoseAbc");
            break;
            case "F":
            document.getElementById("LetraF").classList.remove("letrasAbc");
            document.getElementById("LetraF").classList.add("colorLetraLoseAbc");
            break;
            case "G":
            document.getElementById("LetraG").classList.remove("letrasAbc");
            document.getElementById("LetraG").classList.add("colorLetraLoseAbc");
            break;
            case "H":
            document.getElementById("LetraH").classList.remove("letrasAbc");
            document.getElementById("LetraH").classList.add("colorLetraLoseAbc");
            break;
            case "I":
            document.getElementById("LetraI").classList.remove("letrasAbc");
            document.getElementById("LetraI").classList.add("colorLetraLoseAbc");
            break;
            case "J":
            document.getElementById("LetraJ").classList.remove("letrasAbc");
            document.getElementById("LetraJ").classList.add("colorLetraLoseAbc");
            break;
            case "K":
            document.getElementById("LetraK").classList.remove("letrasAbc");
            document.getElementById("LetraK").classList.add("colorLetraLoseAbc");
            break;
            case "L":
            document.getElementById("LetraL").classList.remove("letrasAbc");
            document.getElementById("LetraL").classList.add("colorLetraLoseAbc");
            break;
            case "M":
            document.getElementById("LetraM").classList.remove("letrasAbc");
            document.getElementById("LetraM").classList.add("colorLetraLoseAbc");
            break;
            case "N":
            document.getElementById("LetraN").classList.remove("letrasAbc");
            document.getElementById("LetraN").classList.add("colorLetraLoseAbc");
            break;
            case "Ñ":
            document.getElementById("LetraÑ").classList.remove("letrasAbc");
            document.getElementById("LetraÑ").classList.add("colorLetraLoseAbc");
            break;
            case "O":
            document.getElementById("LetraO").classList.remove("letrasAbc");
            document.getElementById("LetraO").classList.add("colorLetraLoseAbc");
            break;
            case "P":
            document.getElementById("LetraP").classList.remove("letrasAbc");
            document.getElementById("LetraP").classList.add("colorLetraLoseAbc");
            break;
            case "Q":
            document.getElementById("LetraQ").classList.remove("letrasAbc");
            document.getElementById("LetraQ").classList.add("colorLetraLoseAbc");
            break;
            case "R":
            document.getElementById("LetraR").classList.remove("letrasAbc");
            document.getElementById("LetraR").classList.add("colorLetraLoseAbc");
            break;
            case "S":
            document.getElementById("LetraS").classList.remove("letrasAbc");
            document.getElementById("LetraS").classList.add("colorLetraLoseAbc");
            break;
            case "T":
            document.getElementById("LetraT").classList.remove("letrasAbc");
            document.getElementById("LetraT").classList.add("colorLetraLoseAbc");
            break;
            case "U":
            document.getElementById("LetraU").classList.remove("letrasAbc");
            document.getElementById("LetraU").classList.add("colorLetraLoseAbc");
            break;
            case "V":
            document.getElementById("LetraV").classList.remove("letrasAbc");
            document.getElementById("LetraV").classList.add("colorLetraLoseAbc");
            break;
            case "W":
            document.getElementById("LetraW").classList.remove("letrasAbc");
            document.getElementById("LetraW").classList.add("colorLetraLoseAbc");
            break;
            case "X":
            document.getElementById("LetraX").classList.remove("letrasAbc");
            document.getElementById("LetraX").classList.add("colorLetraLoseAbc");
            break;
            case "Y":
            document.getElementById("LetraY").classList.remove("letrasAbc");
            document.getElementById("LetraY").classList.add("colorLetraLoseAbc");
            break;
            case "Z":
            document.getElementById("LetraZ").classList.remove("letrasAbc");
            document.getElementById("LetraZ").classList.add("colorLetraLoseAbc");
            break;
            default:
            console.log("NO SE ENCONTRO TESORO");
          } 

      //revisa comparando el primer digito de la palabra con el primer digito que metio el usuario que intenta adivinar la palabra.
      //ya en la segunda vuelta vuelve a comparar el primer digito con el segundo digito que metio el usuario y asi con todas las vueltas.
      //Si encuentra un digito que sea igual lo pone color azul.
      for (var c = 1; c <= palabraAdivina.length; c++) {
        if (palabraRegistradaArray[vueltasCuadroLetrasArray2] == palabraAdivinaArray[vueltasCuadroLetrasArray]){
          document.getElementById("contLetras"+vueltasCuadroLetras).classList.add("colorLetraWinAzul");


          //Busca para mostrar letras correctas y mostrar en dom.
          switch (palabraAdivinaArray[vueltasCuadroLetrasArray]) {
            case "A":
            document.getElementById("LetraA").classList.remove("letrasAbc");
            document.getElementById("LetraA").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraA").classList.add("colorLetraWinAbc");
            break;
            case "B":
            document.getElementById("LetraB").classList.remove("letrasAbc");
            document.getElementById("LetraB").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraB").classList.add("colorLetraWinAbc");
            break;
            case "C":
            document.getElementById("LetraC").classList.remove("letrasAbc");
            document.getElementById("LetraC").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraC").classList.add("colorLetraWinAbc");
            break;
            case "D":
            document.getElementById("LetraD").classList.remove("letrasAbc");
            document.getElementById("LetraD").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraD").classList.add("colorLetraWinAbc");
            break;
            case "E":
            document.getElementById("LetraE").classList.remove("letrasAbc");
            document.getElementById("LetraE").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraE").classList.add("colorLetraWinAbc");
            break;
            case "F":
            document.getElementById("LetraF").classList.remove("letrasAbc");
            document.getElementById("LetraF").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraF").classList.add("colorLetraWinAbc");
            break;
            case "G":
            document.getElementById("LetraG").classList.remove("letrasAbc");
            document.getElementById("LetraG").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraG").classList.add("colorLetraWinAbc");
            break;
            case "H":
            document.getElementById("LetraH").classList.remove("letrasAbc");
            document.getElementById("LetraH").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraH").classList.add("colorLetraWinAbc");
            break;
            case "I":
            document.getElementById("LetraI").classList.remove("letrasAbc");
            document.getElementById("LetraI").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraI").classList.add("colorLetraWinAbc");
            break;
            case "J":
            document.getElementById("LetraJ").classList.remove("letrasAbc");
            document.getElementById("LetraJ").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraJ").classList.add("colorLetraWinAbc");
            break;
            case "K":
            document.getElementById("LetraK").classList.remove("letrasAbc");
            document.getElementById("LetraK").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraK").classList.add("colorLetraWinAbc");
            break;
            case "L":
            document.getElementById("LetraL").classList.remove("letrasAbc");
            document.getElementById("LetraL").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraL").classList.add("colorLetraWinAbc");
            break;
            case "M":
            document.getElementById("LetraM").classList.remove("letrasAbc");
            document.getElementById("LetraM").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraM").classList.add("colorLetraWinAbc");
            break;
            case "N":
            document.getElementById("LetraN").classList.remove("letrasAbc");
            document.getElementById("LetraN").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraN").classList.add("colorLetraWinAbc");
            break;
            case "Ñ":
            document.getElementById("LetraÑ").classList.remove("letrasAbc");
            document.getElementById("LetraÑ").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraÑ").classList.add("colorLetraWinAbc");
            break;
            case "O":
            document.getElementById("LetraO").classList.remove("letrasAbc");
            document.getElementById("LetraO").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraO").classList.add("colorLetraWinAbc");
            break;
            case "P":
            document.getElementById("LetraP").classList.remove("letrasAbc");
            document.getElementById("LetraP").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraP").classList.add("colorLetraWinAbc");
            break;
            case "Q":
            document.getElementById("LetraQ").classList.remove("letrasAbc");
            document.getElementById("LetraQ").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraQ").classList.add("colorLetraWinAbc");
            break;
            case "R":
            document.getElementById("LetraR").classList.remove("letrasAbc");
            document.getElementById("LetraR").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraR").classList.add("colorLetraWinAbc");
            break;
            case "S":
            document.getElementById("LetraS").classList.remove("letrasAbc");
            document.getElementById("LetraS").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraS").classList.add("colorLetraWinAbc");
            break;
            case "T":
            document.getElementById("LetraT").classList.remove("letrasAbc");
            document.getElementById("LetraT").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraT").classList.add("colorLetraWinAbc");
            break;
            case "U":
            document.getElementById("LetraU").classList.remove("letrasAbc");
            document.getElementById("LetraU").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraU").classList.add("colorLetraWinAbc");
            break;
            case "V":
            document.getElementById("LetraV").classList.remove("letrasAbc");
            document.getElementById("LetraV").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraV").classList.add("colorLetraWinAbc");
            break;
            case "W":
            document.getElementById("LetraW").classList.remove("letrasAbc");
            document.getElementById("LetraW").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraW").classList.add("colorLetraWinAbc");
            break;
            case "X":
            document.getElementById("LetraX").classList.remove("letrasAbc");
            document.getElementById("LetraX").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraX").classList.add("colorLetraWinAbc");
            break;
            case "Y":
            document.getElementById("LetraY").classList.remove("letrasAbc");
            document.getElementById("LetraY").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraY").classList.add("colorLetraWinAbc");
            break;
            case "Z":
            document.getElementById("LetraZ").classList.remove("letrasAbc");
            document.getElementById("LetraZ").classList.remove("colorLetraLoseAbc");
            document.getElementById("LetraZ").classList.add("colorLetraWinAbc");
            break;
            default:
            console.log("NO SE ENCONTRO TESORO");
          } 




        }
        vueltasCuadroLetrasArray2++;
      }
      vueltasCuadroLetrasArray2 = 0;

      //imprime la letra en el DOM.
      document.getElementById("contLetras"+vueltasCuadroLetras).innerHTML = palabraAdivinaArray[vueltasCuadroLetrasArray];

      
      document.getElementById("contLetras"+vueltasCuadroLetras).classList.add("animate__zoomIn");


      //compara si la letra es igual a la que esta registrada. Si es igual cambia la clase con un color verde.
      if (palabraRegistradaArray[vueltasCuadroLetrasArray] == palabraAdivinaArray[vueltasCuadroLetrasArray]){
        document.getElementById("contLetras"+vueltasCuadroLetras).classList.remove("colorLetraWinAzul");
        document.getElementById("contLetras"+vueltasCuadroLetras).classList.add("colorLetraWin");




        //cuenta cuantas veces fue correcta la comparacion. Al momento de llegar a la cantidad de la palabra registrada se activa
        letrasCorrectas++;
      }

      vueltasCuadroLetras++;
      vueltasCuadroLetrasArray++;
    }

    vueltasCuadroLetrasArray = 0;
    
    //compara si letrasCorrectas tiene las mismas vueltas que la cantidad de letras de la palabra en color verde.
    if (letrasCorrectas == palabraAdivina.length){
            var win = '<div class="win">¡HAS GANADO!</div>';
            document.getElementById("textoInferior").innerHTML = win;
          }
    
    //limpia el input.
    document.getElementById("adivinarPalabra").value = "";

  //Contador de intentos Inicio.
  document.getElementById("intentos").innerHTML = '<div class="textCantidadLetras">Palabra con: <b>'+palabraRegistrada.length+' letras.</b></div><div class="textIntentos">Intentos: <b>' + intentos + '/6</b></div>';
  if (intentos >= 6) {
    if (letrasCorrectas == palabraAdivina.length){
            var win = '<div class="win">¡HAS GANADO!</div>';
            document.getElementById("textoInferior").innerHTML = win;
          }else{
    var lose = '<div class="lose">PERDEDOR ERA: '+ palabraRegistrada +'</div>';
            document.getElementById("textoInferior").innerHTML = lose;
            }
  }
  intentos++;
  letrasCorrectas = 0;
  //Contador de intentos FIN.
  
  //Se activa si el usuario no pone la cantidad de letras igual a la registrada.
  }else{
    //Le agrega la clase de animacion al ID
    document.getElementById("adivinarPalabra").classList.remove("errorRemove");
    document.getElementById("adivinarPalabra").classList.add("animate__shakeX");
    document.getElementById("adivinarPalabra").classList.add("error");

    //Espera 1 segundo para despues que se active se quite la clase que se añadio.
    setTimeout(() => {
    document.getElementById("adivinarPalabra").classList.remove("animate__shakeX");
    document.getElementById("adivinarPalabra").classList.add("errorRemove");
    document.getElementById("adivinarPalabra").classList.remove("error");
    }, 500);
  }
}
}