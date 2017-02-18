function Mostrar()
{   
    var numero=0;
	var numero = prompt("ingrese un número entre 0 y 10.");
    numero=parseInt(numero);
    	while(numero <0 || numero >10)
    	{
    		numero=prompt("Error vuelva a ingresar numero");
    		
    	}
    	if(numero >=0 && numero <9)
        {
        	alert("Numero correcto ingresado");
        }

        document.getElementById('numero').value=numero;

}//FIN DE LA FUNCIÓN