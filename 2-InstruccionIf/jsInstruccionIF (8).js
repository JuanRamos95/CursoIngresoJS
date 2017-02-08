function Mostrar()
{
var edad;
var estadoCivil;
 edad=document.getElementById('edad').value;
 edad=parseInt(edad);
 estadoCivil=document.getElementById('estadoCivil').value;
 if(edad>17 && estadoCivil =="soltero")
    {
 	    document.write("es soltero y no es menor");
    }
 
}//FIN DE LA FUNCIÓN