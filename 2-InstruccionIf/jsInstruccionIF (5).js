function Mostrar()
{
var edad;
 edad=document.getElementById('edad').value;
 edad=parseInt(edad);
 if (!(edad>=13 && edad <=17))
    {
 	alert("No es adolecente");
    }
if (edad<=12)
{
	alert("Es menor");

 	}
 	if (edad>=18)
 	{
 		alert("Es mayor de edad");
 	}  


}//FIN DE LA FUNCIÓN



