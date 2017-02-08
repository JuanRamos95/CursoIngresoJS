function Mostrar()
{
var edad;
var estadoCivil;
 edad=document.getElementById('edad').value;
 edad=parseInt(edad);
 estadoCivil=document.getElementById('estadoCivil').value;
 if(edad<18 && estadoCivil !="soltero")
    {
 	    document.write("es pequeño para ser soltero");
    }

 	
}//FIN DE LA FUNCIÓN