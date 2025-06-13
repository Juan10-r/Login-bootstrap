console.log("Hola profe")
//alert("Hola profe")
//document.body.innerHTML = "<h1> Hola querido profesor<h1>"
//document.body.innerText = "hHola querido profesor"

//VARIABLES EN JS
const edad =18; //CONSTANTE NO PUEDE SER ALTERADA
let edad_dos=18; //VARIABLE PARA BLOQUES
var nombre = "Juan Rincon" //VARIABLE GLOBAL

//TIPOS DE DATOS
var entero = 20;
var decimal = 20.5;
 var string = "mi nombre es Juan"
 var boolean = true//false
var array = ["Lun,Mar,Mir"]
var array_string = ["LUN", "MAR", "MIER","JUE","VIE","SAB","DOM"];
var numerico = [1,2,3,4,5];
var array_mixto = [1,2,3, "Lun", "Mar",false,true];

//OPERADORES ARITMETICOS =, +, -, /, %
var suma = entero + decimal;
var resta= decimal - entero;
var multi= decimal * entero;
var divi= decimal / entero;
var modulo= decimal /2;
//
//ESTRUCTURAS LOGICAS
//INICIALIZADOR - COMPARACION - CONTADOR
var impresion = "";
//for (let i=0; i< array_string.length; i++){
//    console.log (array_string[i])
//    impresion = impresion + array_string[i] 
//}
//Swal.fire(impresion);
//console.log (array_mixto)

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página

        // Mostrar la alerta de SweetAlert2
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Datos incorrectos",
            footer: '<a href="#">¿Necesitas ayuda?</a>'
        });
    });
});