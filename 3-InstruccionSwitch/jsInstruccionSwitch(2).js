function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;



switch(mesDelAño)
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
    case "Mayo":
    case "Junio":
    alert("Falta para el invierno");
	break;

	case "Julio":
    case "Agosto":
	alert("Se vienen las vacaciones");
	break;
    

    case "Septiembre":
    case "Octubre":
    case "Noviembre":
	case "Diciembre":
	alert("Felices fiestas");
	break;

}

}//FIN DE LA FUNCIÓN