//DEBES DESCOMENTAR CADA EJERCICIO PARA PROBAR DE A 1

//---------------Ejercicio1---------------------
//Dado un arreglo, escribe una función que cambie todos los números positivos del 
//arreglo a "grande". Ejemplo: makeItBig([- 1,3,5, -5]) devuelve el mismo 
//arreglo, cambiado a [-1, "big", "big", - 5].
const makeItBig = (arr) =>{
    for(var i =0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i]= "big";
        }
    }
    return arr;
}
var myarr = [-1,3,5,-5];
console.log(makeItBig(myarr));

//---------------Ejercicio2---------------------
//Crea una función que tome un arreglo de números. La función debe imprimir el valor 
//más bajo del arreglo y devolver el valor más alto del arreglo.
/*const minMax = (arr) => {
    var min = arr[0];
    var max = arr[0];

    for(var i=0; i<arr.length; i++){
        if(arr[i]< min){
            min = arr[i];
        }
        if(arr[i]>max){
            max = arr[i]
        }
    }
    console.log("El valor más bajo es: " + min);
    return max;
}
var myArr = [20,3, 7, 2, 10, 8,1];
console.log("El valor más alto es: " + minMax(myArr));*/

//---------------Ejercicio3---------------------
//Crea una función que tome un arreglo de números. La función debe imprimir el penúltimo valor 
//del arreglo y devolver el primer valor impar del arreglo.

/*const penultimo = (arr) => {
    let penultimoValor = arr[arr.length-2]
    console.log("El penúltimo valor del arreglo es: "+ penultimoValor);
    for(var i = 0; i<arr.length; i++){
        if(arr[i] % 2 == 1){
            break;
        }
    }
    return arr[i];
}
var myArr = [20, 2, 7, 2, 10, 8, 1, 4];
console.log("El primer valor impar del arreglo "+penultimo(myArr));*/

//---------------Ejercicio4---------------------
//Dado un arreglo, crea una función para devolver un nuevo arreglo donde cada valor en el 
//original se ha duplicado. Llamar a doble([1,2,3]) debería devolver [2,4,6] sin cambiar el 
//original.

/*const doble = (arr) =>{
    var newArr = [];
    for(var i = 0; i< arr.length; i++){
        newArr.push(2*(arr[i]));
    }
    return newArr;
}
var myArr = [1,2,3];
console.log(doble(myArr));*/

//---------------Ejercicio5---------------------
//Dado un arreglo de números, crea una función para reemplazar el último valor con el número 
//de valores positivos. Por ejemplo, countPositives([- 1,1,1,1]) cambia el 
//arreglo a [-1,1,1,3] y lo devuelve.

/*const countPositives = (arr) => {
    let count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]> 0){
            count++
        }
        arr[arr.length-1]=count;
    }
    return arr;
}
var myArr = [-1,1,1,1];
console.log(countPositives(myArr));*/

//---------------Ejercicio6---------------------
//Crea una función que acepte un arreglo. Cada vez que el arreglo tenga tres valores impares 
//seguidos, imprime "¡Eso es extraño!" Cada vez que el arreglo tenga tres pares seguidos, 
//imprime "¡Aún más!".

/*const myArr = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2 === 1) && (arr[i - 1] % 2 === 1) && (arr[i - 2] % 2 === 1)) {
            console.log('¡Eso es extraño!');
        }
        if ((arr[i] % 2 === 0) && (arr[i - 1] % 2 === 0) && (arr[i - 2] % 2 === 0)) {
            console.log('¡Aún más!');
        }
    }
}
var newArr = [2, 4, 6, 1, 1, 3, 2];
(myArr(newArr));*/

//---------------Ejercicio7---------------------
//Dado arr, agrega 1 a los elementos impares ([1], [3], etc.), console.log todos los valores y devuelve arr.

/*const aumentar = (arr) => {
    for(var i = 0; i<arr.length; i++){
        if(arr[i] % 2 ===1){
            arr[i]++;
        }
        console.log(arr[i]);
    }
    return arr;
}
var newArr = [1,3,5,7,9,11];
console.log(aumentar(newArr));*/

//---------------Ejercicio8---------------------
//Se te entrega un arreglo que contiene cadenas. Trabajando dentro de ese mismo arreglo, reemplaza cada 
//cadena con un número (la longitud de la cadena en el índice del arreglo anterior) y devuelve el arreglo.

/*const myArr = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].length;
    }
    return arr;
}
var newArr = ['hola', 'como', 'estas','probando'];
console.log(newArr)
console.log(myArr(newArr));*/

//---------------Ejercicio9---------------------
//Crea una función que acepte un arreglo. Devuelve un nuevo arreglo con todos los valores excepto el primero, 
//agregando 7 a cada uno. No alteres el arreglo original.

/*const myArr = (arr) => {
    let arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        //arr2[i] = (arr[i+1]+7);
        arr2.push(arr[i+1]+7)
    }
    arr2.pop();
    return arr2;
}
var newArr = [1,3,5,7,9,11];
console.log(myArr(newArr));*/

//---------------Ejercicio10---------------------
//Dado un arreglo , escribe una función para invertir los valores, en el lugar. 
//Ejemplo: reverse([3,1,6,4,2]) devuelve el mismo arreglo, que contenga [2,4,6,1,3].

/*const reverse = (arr) => {
    let primero = 0;
    let ultimo = arr.length - 1;
    while (primero < ultimo) {

        temp = arr[primero];
        arr[primero] = arr[ultimo];
        arr[ultimo] = temp;
        primero++;
        ultimo--;
    }
    return arr;
}

console.log(reverse([3, 1, 6, 4, 2]));*/

//---------------Ejercicio11---------------------
//Dado un arreglo, crea y devuelve uno nuevo que contenga todos los valores del arreglo  proporcionado en 
//negativo (no simplemente multiplicada por -1). Dado [1, -3, 5], devuelve [-1, -3, -5].

/*const myArr = (arr) => {
    let arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            arr2.push(arr[i]*= -1);
        }else if(arr[i] < 0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
var newArr = [1, -3, 5];
console.log(myArr(newArr));*/

//---------------Ejercicio12---------------------
//Crea una función que acepte un arreglo  e imprime "delicioso" cada vez que uno de los valores sea igual a 
//"comida". Si no hay elementos "comida" en el arreglo, entonces escribe "Tengo hambre" una vez.

/*const myArr = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == "comida"){
            arr[i] = "delicioso";
        }else{
            arr[i] = "Tengo hambre"
        }
    }
    return arr;
}

var newArr = ['hola', 'comida', 'estas','probando', 'comida'];
console.log(newArr)
console.log(myArr(newArr));*/

//---------------Ejercicio13---------------------
//Dado un arreglo, intercambia el primero y el último, el tercero y el antepenúltimo, etc. 
//La entrada [true, 42, "Ada", 2, "pizza"] se convierte en ["pizza", 42, "Ada", 2, true]. 
//Cambia [1,2,3,4,5,6] por [6,2,4,3,5,1].

/*const intercambio = (arr) => {
    var temp;
    for(var i = 0; i < arr.length/2; i += 2){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
var myArr = ([true, 42, "Ada", 2, "pizza"]); 
var myArr2 = [1,2,3,4,5,6];
console.log(intercambio(myArr));
console.log(intercambio(myArr2));*/

//---------------Ejercicio14---------------------
//Dado el arreglo arr y el número num, multiplica cada valor de arr por num y devuelve el arr cambiado.

/*const myArr = (arr, num) => {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*num;
    }
    return arr;
}
var myarr = ([1,2,3]);
var num = 2;
console.log(myArr(myarr, num));*/