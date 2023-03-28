//DEBES DESCOMENTAR CADA EJERCICIO PARA PROBAR DE A 1

//---------------Ejercicio1---------------------
//Crea una función que acepte un número como entrada. 
//Devuelve un nuevo arreglo que cuenta de uno en uno, desde el 
//número (como elemento "cero" del arreglo) hasta 0 (como último elemento). 
//¿Cuánto mide este arreglo?

function newArr(num) {
    var arr = [];
    for (var i = num; i >= 0; i--) {
        arr.push(i);
    }
    return arr;
}
var showArr = newArr(5);
console.log(showArr);
console.log('Length: '+showArr.length);

//---------------Ejercicio2---------------------
//Tu función recibirá un arreglo con dos números. 
//Imprime el primer valor y devuelve el segundo.
/*function newArr(num1, num2){
    var arr = [num1, num2];
    console.log(arr[0]);
    return num2;

}
var showArr = newArr(6,7);
console.log(showArr);*/

//---------------Ejercicio3---------------------
//Dado un arreglo, devuelve la suma del primer valor del arreglo, más la longitud del arreglo. 
//¿Qué sucede si el primer valor del arreglo no es un número, sino una cadena (como “what?”) o un booleano (como false).

//Si el primer valor del arreglo no es un número, sino una cadena concatena Ej: what4
//un booleano (false) suma= 0+arr.length
//un booleano (true) suma= 1+arr.length  
/*var arr = [2,2,3,4]
console.log(arr[0])
var suma = arr[0]+arr.length;
console.log(suma);*/

//---------------Ejercicio4---------------------
//Para [1,3,5,7,9,13], imprime valores que sean mayores que su segundo valor. Devuelve cuántos valores son.
/*var arr = [1, 3, 5, 7, 9, 13];
var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
        console.log(arr[i])
        count++;
    }
}
console.log(count);*/

//---------------Ejercicio5---------------------
//Escribe una función que acepte cualquier arreglo y devuelva un nuevo arreglo con los valores del arreglo que sean 
//mayores que su segundo valor. Imprime cuántos valores son. ¿Qué harás si el arreglo tiene solo un elemento?
/*function array(arr){
    var newArr = [];
    var count = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] > arr[1]){
            newArr.push(arr[i]);
            count++;
        }else if(arr.length == 1){
            console.log("No hay valores mayores");
        }
    }
    console.log("Total Valores: " + count);
    return newArr;
}
var myArr = [1,3,5,7,9,13];
console.log(array(myArr));*/

//---------------Ejercicio6---------------------
//Dados dos números, devuelve un arreglo de longitud num1 con cada valor num2. 
//Imprimir "¡Jinx!" si son iguales.
/*function myArr(num1, num2) {
    let newArr = [];
    for (var i = 0; i < num1; i++) {
        newArr[i] = num2;
    }
    if (num1 === num2) {
        console.log('¡Jinx!')
    }
    return newArr
}
console.log(myArr(3, 3));
console.log(myArr(6, 7));*/

//---------------Ejercicio7---------------------
//Tu función debería aceptar un arreglo. Si el valor en [0] es mayor que la longitud de; arreglo, 
//imprime "¡Demasiado grande!"; si el valor en [0] es menor que la longitud del arreglo, imprime 
//"¡Demasiado pequeño!"; de lo contrario, imprime "¡Perfecto!".
/*function myArr(arr){
    if(arr[0]>arr.length){
        console.log("¡Demasiado grande!")
    }else if(arr[0]< arr.length){
        console.log("¡Demasiado pequeño!")
    }else{
        console.log("¡Perfecto!")
    }
}
var newArr = [1,2,3,4];
var newArr2 = [5,2,3,4];
var newArr3 = [4,2,3,4];

myArr(newArr);//¡Demasiado pequeño!
myArr(newArr2);//¡Demasiado grande!
myArr(newArr3);//¡Perfecto!*/

//---------------Ejercicio8---------------------
//Kelvin quiere convertir entre escalas de temperatura. Crea fahrenheitToCelsius(fDegrees) que acepte un número 
//de grados en Fahrenheit y devuelva la temperatura equivalente expresada en grados Celsius. 
//Para revisar, Fahrenheit = (9/5 * Celsius) + 32.
/*function fahrenheitToCelsius(fDegrees){
    let celsius;
    celsius = (fDegrees -32)/1.8;
    console.log(fDegrees + '°F= '+ celsius + ' °C');
}
fahrenheitToCelsius(30)*/

//---------------Ejercicio9---------------------
//Crea celsiusToFahrenheit(cDegrees) que acepte el número de grados Celsius y devuelva la temperatura equivalente expresada en grados Fahrenheit.

/*function celsiusToFahrenheit(cDegrees){
    let fahrenheit = (1.8 * cDegrees) +32
    return fahrenheit
}
let celcius = 45;
let myFahr = celsiusToFahrenheit(celcius);
console.log(celcius + '°C = '+ myFahr + '°F');*/