const myGame = () => {
    let nombre = prompt("¿Cómo te llamas?");
    let numCorrectas = 0;
    let incorrectas = 0;
    for (var i = 0; i < opciones.length; i++) {
        let entrada = "\nHola! " + nombre + opciones[i] + posiblesRespuestas;
        let respuesta = prompt(entrada + "\n Q para salir");
        if(respuesta =="q" || respuesta== "Q"){
            break;
        }else if (respuesta === respuestasCorrectas[i]) {
            numCorrectas++;
        } else {
            incorrectas++;
        }
    }
    alert("Correctos: " + numCorrectas + " Incorrectos: " + incorrectas);

}
const opciones = [
    "\nEspacio en la memoria donde se almacena un valor que puede cambiar. \n",
    "\nSe utilizan para almacenar valores fijos, es un valor que no cambia durante la ejecución del programa.\n",
    "\nPermite realizar una acción repetitiva un número determinado de veces\n",
    "\nPermite ejecutar repetidamente un bloque de código mientras se cumpla una condición.\n"
];
const posiblesRespuestas = [
    "\n1. Varaiables ",
    "\n2. for ",
    "\n3. Constantes ",
    "\n4. while "
]
const respuestasCorrectas = [
    "1",
    "3",
    "2",
    "4"
];






