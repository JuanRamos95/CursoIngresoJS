function Mostrar()
{
     var intentos=0;
     var clave = prompt("ingrese el número clave.");

      while(clave != "utn750"  &&  intentos <3)
      {
	    clave=prompt("ingrese el numero clave");
        intentos++;
      }
      if (clave =="utn750")
      {
        alert("clave correcta")
      } 
      else(intentos ==4)
      {
      	alert("la cuenta supero el maximo de intentos disponibles, se bloqueara");
      }
      
}//FIN DE LA FUNCIÓN / Luego le agregamos un contador para los intentos y yo un mensaje de advertenciaal final para el bloqueo.
