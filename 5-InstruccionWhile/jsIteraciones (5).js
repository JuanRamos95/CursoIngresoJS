function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "f" && sexo !="m")
   {
	sexo=prompt("error,reingrese");
   }
   if(sexo =="f")
   {
   	alert("Femenino");
   }
   if(sexo =="m")
   {
   	alert("Masculino");
   }


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN