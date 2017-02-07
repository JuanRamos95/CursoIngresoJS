/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

var numero1=(document.getElementById('numeroUno').value);
var numero2=(document.getElementById('numeroDos').value);

var suma=(parseInt(numero1) + parseInt(numero2));
alert("el resultado es:" +suma);

}

