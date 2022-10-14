function ReyesMagos(){
var fecha = new Date();
var reyesano = fecha.getFullYear();

if (fecha.getMonth() == 1 && fecha.getDate() > 6) {
  reyesano = reyesano + 1;
}

var reyesdia = new Date(reyesano+1, 0, 6);
var milisegundos = 1000 * 60 * 60 * 24;

var diasrestantes = Math.ceil(
  (reyesdia.getTime() - fecha.getTime()) /
   (milisegundos)
);
alert("Quedan "+diasrestantes+" dias para el dia de reyes");
}


function fecha(){
    var fecha = new Date();
    var diames=fecha.getDate();
    var diasemana=fecha.getDay();
    var mes=fecha.getMonth()+1;
    var ano=fecha.getFullYear();
    var hora=fecha.getHours();
    var minutos=fecha.getMinutes();
    switch (mes){
      case 1:
        mes="Enero";
        break;
      case 2:
        mes="Febrero";
        break;
      case 3:
        mes="Marzo";
        break;
      case 4:
        mes="Abril";
        break;
      case 5:
        mes="Mayo";
        break;
      case 6:
        mes="Junio";
        break;
      case 7:
        mes="Julio";
        break;
      case 8:
        mes="Agosto";
        break;
      case 9:
        mes="Septiembre";
        break;
      case 10:
        mes="Octubre";
        break;
      case 11:
        mes="Noviembre";
        break;
      case 12:
        mes="Diciembre";
        break;
    }
    switch (diasemana){
      case 1:
        diasemana="Lunes"
        break;
      case 2:
        diasemana="Martes"
        break;
      case 3:
        diasemana="Miercoles"
        break;
      case 4:
        diasemana="Jueves"
        break;
      case 5:
        diasemana="Viernes"
        break;
      case 6:
        diasemana="Sabado"
        break;
      case 7:
        diasemana="Domingo"
        break;
    }
    alert("Hoy es "+diasemana+" "+diames+" de "+mes+" del "+ano+" y son las "+hora+":"+minutos+" horas");    
    }
    //Caja de texto de tipo número o promt que nos solicita un radio. Este llamará a la función 
    //calcularAreaCirculo(radio) que devuelve el área.  Mostrar en un alert el área de un círculo 
    //y la longitud de una circunferencia a partir del radio que introduzca el usuario. Debes mostrarlo 
    //con 2 decimales. Comprobar que introduce un número como radio. 
   
    function calcularAreaCirculo(){
      var radio;
      var area;
      var longitud;
      radio=parseInt(prompt("Introduce el radio de un circulo"));
      if(isNaN(radio)){
        alert("No has introducido un numero");
      }else{
        alert("Lo introducido es un numero");
        area=parseFloat(Math.PI*Math.pow(radio,2));
        longitud=parseFloat(2*Math.PI*radio);
        area=area.toFixed(2);
        longitud=longitud.toFixed(2);
        alert("El area del circulo es: "+area+" y la longitud de la circunferencia es: "+longitud);
      }
    }
    //Mediante cajas de texto o un promt, al pulsar el botón "aleatorio" llame a la función 
    //calcularAleatorio(comienzo,fin) que mostrará por pantalla un número aleatorio generado 
    //entre los dos números introducidos.
    function calcularAleatorio(){
      var n1,n2;
      n1=parseInt(prompt("Introduce el primer numero"));
      n2=parseInt(prompt("Introduce el segundo numero"));
      var aleatorio=Math.round(Math.random() * (n1 - n2) + n2);
      alert("El numero generado es: "+aleatorio);
    }

    function cadena(){
      var cadena,mitadcadena,ultimocaracter,cadenainversa,cadenaguiones,contarvocales;
      cadena=prompt("Introduce una cadena");
      //Mitad de la cadena
      var mitad=parseInt(cadena.length/2);
      mitadcadena=cadena.substring(0,mitad);
      alert("La mitad de la cadena es: "+mitadcadena)
      //Ultimo caracter
      var ultimocaracter=cadena.split("")[cadena.length-1];
      alert("El ultimo caracter de la cadena es: "+ultimocaracter);
      //cadena inversa
      cadenainversa=cadena.split("").reverse().join("");
      alert("La cadena: "+cadena+" inversa es: "+cadenainversa);
      //cadena guiones
      cadenaguiones=cadena.split("").join("-");
      alert(cadenaguiones);
      //contar vocales
      contarvocales=cadena.match(/[aeiouáéíóúäëïöüAEIOUÁÉÍÓÚÄËÏÖÜ]/gi).length;
      alert("En la cadena: "+cadena+" hay "+contarvocales+" vocales");
    }