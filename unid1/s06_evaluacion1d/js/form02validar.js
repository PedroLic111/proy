function fnValidar02()
{
    var cant= document.getElementsById("check");
    if (cant>3){
        alert("Marque solo tres casillas");
        return false;
    }

    var $marcados =$("#form1 input:checked");
        if ($marcados.length > 0)
            alert("SELECCIONADOS " +$marcados.length);
        else {
            alert("NINGUNA SELECCION");
            }  
}
