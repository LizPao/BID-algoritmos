
//DEBES DESCOMENTAR CADA EJERCICIO PARA PROBAR DE A 1

//---------------Ejercicio1---------------------
//Pon myNumber en 42. Deja myName con tu nombre. Ahora intercambia myNumber por myName y viceversa.
var myNumber = 42;
var myName = 'Paola'

myNumber= myName;
console.log('Intercambio 1: '+myNumber);

myName = myNumber;
console.log('Intercambio 2: '+myName);

//---------------Ejercicio2---------------------
//Imprime números enteros de -52 a 1066 usando un bucle FOR.

/*for(var i = -52; i<=1066; i++){
    console.log(i)
}*/

//---------------Ejercicio3---------------------
//Crea beCheerful(). Dentro de este, la cadena console.log "¡buenos días!" Llámalo 98 veces.
/*function beCheerful(){
    console.log('¡buenos días!');
}

for(var i = 1; i<= 98; i++){
    beCheerful();
}*/

//---------------Ejercicio4---------------------
//Usando FOR, imprime múltiplos de 3 de -300 a 0. Omite -3 y -6. 
/*for(var i = -300; i<=0; i++){
    if(i % 3 == 0){
        if((i == -3 || i == -6) ){
            continue;
        }
        console.log(i)
    }
}*/

//---------------Ejercicio5---------------------
//Imprime números enteros de 2000 a 5280, utilizando un WHILE.
/*var inicio = 2000, fin = 5280;
while(inicio <= fin){
    console.log(inicio);
    inicio++;
}*/

//---------------Ejercicio6---------------------
//Si 2 números dados representan tu mes y día de nacimiento en cualquier orden, registra:
// "¿Cómo lo supiste?", de lo contrario registra "Un día cualquiera...".
/*function miCumple(dia, mes){
    if( dia == 31 && mes == 7){
        console.log('¿Cómo lo supiste?');
    }else{
        console.log('Un día cualquiera...');
    }
}
miCumple(31, 7);*/

//---------------Ejercicio7---------------------
//Escribe una función que determine si un año determinado es bisiesto. 
//Si un año es divisible por cuatro, es un año bisiesto, a menos que sea divisible por 100. 
//Sin embargo, si es divisible por 400, entonces lo es.
//var anho = 2009;
/*function esBisiesto(anho){
    if( anho % 4 ==0 && (anho % 100 != 0 || anho % 400 == 0)){
        console.log('Año bisiesto: ' + anho)
    }else{
        console.log(anho + ' no es año bisiesto')
    }
}
esBisiesto(2000);*/

//---------------Ejercicio8---------------------
//Imprime todos los múltiplos enteros de 5, de 512 a 4096. Después, también registra cuántos había.
/*var count = 0;
for(var i = 512; i<=4096; i++){
    if(i % 5 == 0){
        console.log("Multiplo de 5: \t"+i)
        count++;
    }
}
console.log("Total: "+count);*/

//---------------Ejercicio9---------------------
//Imprime múltiplos de 6 hasta 60.000, utilizando un WHILE.
/*var numero = 1;
while(numero <= 60000){
    if(numero % 6 == 0){
        console.log(numero);
    }
    numero++;
}*/

//---------------Ejercicio10---------------------
//Imprime los números enteros del 1 al 100. 
//Si es divisible por 5, imprime "Codificando" en su lugar. 
//Si es por 10, también imprime "Dojo".
/*var num = 1;
while(num<=100){
    if(num % 5 == 0){
        console.log('Codificando');
    }
    if(num % 10 == 0){
        console.log('Dojo');
    }
    num++;
}*/

//---------------Ejercicio11---------------------
//Tu función recibirá un parámetro de entrada incoming. Por favor, console.log este valor.
/*function queSabes(incoming){
    console.log(incoming);
}

queSabes('Hola');*/

//---------------Ejercicio12---------------------
//Agrega números enteros impares de -300,000 a 300,000, 
//y console.log la suma final. ¿Existe un atajo?
/*var suma = 0;
for(var i = -300000; i<=300000; i++){
    if(i % 2 !== 0){
        console.log(i);
        suma += i;
    } 
}
console.log('La suma es: '+suma);
*/

//---------------Ejercicio13---------------------
//Registra números positivos a partir de 2016, contando hacia atrás 
//cada cuatro números (excluye 0), sin un bucle FOR.

/*let inicio = 2016;
while(inicio >= 1){
    console.log(inicio);
    inicio -= 4;
}*/

//---------------Ejercicio14---------------------
//Basado en el anterior ejercicio: “Cuenta regresiva cada cuatro”, 
//dado lowNum, highNum, mult, print múltiplos de mult desde highNum hasta lowNum, usando un FOR. 
//Para (2,9,3), imprime 9 6 3 (en líneas sucesivas).
/*function printMunltiplos(lowNum, highNum, mult ){
    for(let i = highNum; i >= lowNum; i--) {
        if(i % mult === 0) {
        console.log(i);
        }
    }
}
printMunltiplos(2,9,3)
*/

//---------------Ejercicio15---------------------
/*
Esto se basa en "Cuenta regresiva flexible". Los nombres de los parámetros no son tan
útiles, pero el problema es esencialmente idéntico; ¡no te dejes engañar! 
Dados 4 parámetros (param1, param2, param3, param4), imprime los múltiplos de 
param1, comenzando en param2 y extendiéndose hasta param3. 
Una excepción: si un múltiplo es igual a param4, omítelo (no lo imprimas). 
Haz esto usando un WHILE. Dado (3,5,17,9), imprime 6,12,15 (que son todos los 
múltiplos de 3 entre 5 y 17, y excluyendo el valor 9).
 */

/*function printMunltiplos(param1,param2,param3,param4){
    let i = param2;

    while (i <= param3) {
        if (i % param1 === 0 && i !== param4) {
            console.log(i);
        }
    i++;
    }
}
printMunltiplos(3,5,17,9)*/

