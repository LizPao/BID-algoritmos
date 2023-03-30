//DEBES DESCOMENTAR CADA EJERCICIO PARA PROBAR DE A 1

//---------------Ejercicio1---------------------
//Stan aprendió algo hoy: que la disminución directa de la longitud de un arreglo 
//(.length) lo acorta inmediatamente en esa cantidad. Dado el arreglo arr y el 
//número X, elimina todos excepto los últimos elementos X, y devuelve arr (modificado 
//y más corto). Dado ([2,4,6,8,10], 3), cambia el arreglo dado a [6,8,10] y devuélvelo.
const myArr = (arr, x) => {
    for (var i = 0; i < arr.length; i++) {
        if (x > 0) {
            arr[i] = arr[arr.length - x]
            x--;
        }
        if (x === 0) {
            i++;
            while (i < arr.length) {
                arr.pop()
            }
        }
    }
    return arr;
}
var newArr = [2, 4, 6, 8, 10];
var x = 3;
console.log(myArr(newArr, x));

//---------------Ejercicio2---------------------
//A Cartman no le gustan mucho las matemáticas; él necesita ayuda. Se te dan dos 
//números: los coeficientes M y B en la ecuación Y = MX + B. Construye una función 
//para devolver la intersección en X (su primo mayor Fiaz le recuerda sabiamente que 
//la intersección en X es el valor de X donde Y es igual a cero; Cartman solo resopla 
//en su dirección).
/*const interseccionX = (m, b) => {
    //la ecuación Y = MX + B, donde Y es igual a cero x=-b/m
    if (m > 0) {
        let x;
        x = (-b / m);
        return x;
    } else {
        return null;
    }
}

console.log(interseccionX(2, 5));*/

//---------------Ejercicio3---------------------
//Kenny intenta mantenerse a salvo, pero de alguna manera todos los días sucede algo. De los últimos 100 días, hubo
//10 días con volcanes, otros 15 con tsunamis, 20 terremotos, 25 ventiscas y 30 meteoros (para un total de 100 días).
//Si estas probabilidades continúan, escriba whatHappensToday() “QuéPasaráHoy” para imprimir el resultado de un día.
/*const whatHappensToday = () => {
    let aleatorio = Math.floor(Math.random() * 100) + 1;

    if (aleatorio <= 10) {
        console.log("Hoy habrá un volcán.");
    } else if (aleatorio <= 25) {
        console.log("Hoy habrá un tsunami.");
    } else if (aleatorio <= 45) {
        console.log("Hoy habrá un terremoto.");
    } else if (aleatorio <= 70) {
        console.log("Hoy habrá una ventisca.");
    } else {
        console.log("Hoy habrá un meteoro.");
    }
}

whatHappensToday();*/

//---------------Ejercicio4---------------------
//Kyle (más inteligente que Kenny) señala que la posibilidad de un desastre no debe estar relacionada con la 
//posibilidad de otro. Cambia la función whatHappensToday() para crear whatReallyHappensToday() 
//“QuéPasaráRealmenteHoy”. En esta nueva función, prueba cada desastre de forma independiente, en lugar de asumir 
//que ocurrirá un desastre. En otras palabras, con esta nueva función, los cinco podrían ocurrir hoy, o ninguno. 
//¡Quizás Kenny sobreviva!
/*const whatReallyHappensToday = () =>{
    var desastre = ["volcanes", "tsunamis", "terremotos", "ventiscas", "meteoros"];
        var aleatorio = Math.floor(Math.random() * (5)) + 0;
        if(aleatorio === 0){
            console.log("Hoy es un día tranquilo. ¡Quizás Kenny sobreviva!");
        } else{
            console.log("Hoy habrá " + desastre[aleatorio])
        }
}
whatReallyHappensToday();*/

//---------------Ejercicio5---------------------
//¡Tu tiempo en el Dojo definitivamente te hará más inteligente! Digamos que un nuevo estudiante de Dojo, Bogdan, 
//ingresó con un coeficiente intelectual modesto de 101. Digamos que durante un bootcamp de 14 semanas, su 
//coeficiente intelectual aumentó en .01 el primer día, luego aumentó en .02 adicional el segundo día, luego 
//aumentó en .03 más el tercer día, etc. hasta aumentar en .98 el día 98 (al final de 14 semanas completas). 
//¿Cuál es el coeficiente intelectual final de Bogdan?
/*const coeficiente = (dia) => {
    let coeficienteActual = 101;
    let aumento = 0.01;
    for (let i = 1; i <= dia; i++) {
        coeficienteActual += aumento;
    }
    console.log(coeficienteActual)
}
coeficiente(98);*/

//---------------Ejercicio6---------------------
//El Sr. Cerise enseña matemáticas en la escuela secundaria. Escribe una función que asigne e imprima una 
//calificación en letra, dado un número entero que represente una puntuación de 0 a 100. Aquellos que obtienen 90+ 
//obtienen una "A", 80-89 obtienen una "B", 70-79 es una "C", 60-69 deben obtener una "D" y menos de 60 reciben una 
//"F". Por ejemplo, con 88, deberías registrar "Puntuación: 88. Calificación: B.” Con el puntaje 61, registra la 
//cadena "Puntaje: 61. Calificación: D".
/*const calificacion = (puntaje) => {
    let calificacion;
    if (puntaje<=59 ) {
        calificacion = "F";
    } else if (puntaje >= 60 && puntaje <= 69) {
        calificacion = "D";
    } else if (puntaje >= 70 && puntaje <= 79) {
        calificacion = "C";
    } else if (puntaje >= 80 && puntaje <= 89) {
        calificacion = "B";
    } else{
        calificacion = "A";
    } 
    if(puntaje>=0 && puntaje <=100){
        console.log(`Puntaje: ${puntaje} Calificacion: ${calificacion}`)
    }else {
        console.log("Ingrese un puntaje entre 0 - 100")
    }
    
}

calificacion(100);*/

//---------------Ejercicio7---------------------
//Para un desafío adicional, agrega los signos "-" a las puntuaciones en el dos por ciento inferior de las 
//puntuaciones A, B, C y D, y los signos "+" al dos por ciento superior de las puntuaciones B, C y D 
//(lo siento, el Sr. Cerise nunca da una A+). Dado 88, console.log "Puntuación: 88. Calificación: B+". 
//Dado 61, registra "Puntuación: 61. Calificación: D-".
/*const calificacion = (puntaje) => {
    let calificacion;
    if (puntaje<=59 ) calificacion = "F";
    else if (puntaje >= 60 && puntaje <= 62) calificacion = "D-";
    else if (puntaje >= 63 && puntaje <= 67) calificacion = "D";
    else if (puntaje >= 68 && puntaje <= 69) calificacion = "D+";

    else if (puntaje >= 70 && puntaje <= 72) calificacion = "C-";
    else if (puntaje >= 73 && puntaje <= 77) calificacion = "C";
    else if (puntaje >= 78 && puntaje <= 79) calificacion = "C+";

    else if (puntaje >= 80 && puntaje <= 82) calificacion = "B-";
    else if (puntaje >= 83 && puntaje <= 87) calificacion = "B";
    else if (puntaje >= 88 && puntaje <= 89) calificacion = "B+";

    else if (puntaje >= 90 && puntaje <= 97) calificacion = "A";
    else if (puntaje >= 98 && puntaje <= 100) calificacion = "A+";


    if(puntaje>=0 && puntaje <=100){
        console.log(`Puntaje: ${puntaje} Calificacion: ${calificacion}`)
    }else {
        console.log("Ingrese un puntaje entre 0 - 100")
    }
    
}
calificacion(100);*/




