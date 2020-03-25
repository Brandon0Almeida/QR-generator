<?php

/*datos del remitente*/
$remitentente = $_POST["Nombre_Completo"];
$direccion = $_POST["direccion"];
$telefono = $_POST["telefono"];
$localidad = $_POST["localidad"];
$provincia = $_POST["provincia"];
$dni = $_POST["dni"];

/*datos del destinatario*/

$conn = mysqli_connect("127.0.0.1", "root", "", "envios");

if ($conn->connet_error){
    
    die($conn->connet_error);
    
}
   
//print "Conexion exitosa!";

$sql = "INSERT INTO `remitente`(`remitente`, `direccion`, `telefono`, `localidad`, `provincia`, `dni`) VALUES ('$remitentente','$direccion','$telefono','$localidad','$provincia','$dni')";

if (mysqli_query($conn, $sql)) {
    header("location:./../operatoria/inicio.html");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

exit(1);

?>