function fnValidar05()
{
	 var xTurno = document.getElementById("lstTurno").value;
    if (xTurno=="")
    {
        alert("Seleccione TURNO ...");
        return false;
    }
    var xResult = document.getElementById("txtResult").value;
    if(xResult == "" || xResult==0)
    {
        alert("Revise ... Resultado ¿0 o vacío?");
        return false;
    }
    return true;
}

function verConteo(turno, mtzAlumnos)
{
	contadorTurno = 0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element =>{
            if (element[3]== turno ){
                contadorTurno++;
            }
        });
    }
    document.getElementById("txtResult").value = contadorTurno;
}