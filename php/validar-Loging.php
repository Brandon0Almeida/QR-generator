<?php

$usuario=$_POST["Usuario"];
$pass=$_POST["Contrasena"];

$conn = mysqli_connect("127.0.0.1", "root", "", "envios");

if ($conn->connet_error){ 
    
    die($conn->connet_error);
    
}
   
//print "Conexion exitosa!";



$sql = "select * from empleado where usuario = '$usuario' and contrasena = '$pass' and puesto = 'dataEntry'";

$result = mysqli_query($conn, $sql);



if ($result->num_rows > 0){
    header("location:./../operatoria/inicio.html");
    //print "CONEXION EXITOSA";
}

exit(1);

?>
