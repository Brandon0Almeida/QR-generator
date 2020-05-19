<?php

$usuario=$_POST["user"];
$pass=$_POST["pass"];

$conn = mysqli_connect("127.0.0.1", "root", "", "registro");

if (!$conn){ 
    
    echo ('Se ha producido un error en la conexion con la base de datos');
    die($conn->connet_error);
    
}else{

    $sql = "select * from empleado where usuario = '" . $_POST['user'] . "' and contrasena = '" . $_POST['pass'] . "' and puesto = 'dataEntry'";
    $result = mysqli_query($conn, $sql);

    if ($result->num_rows > 0){
        echo ('correct');
    }else{
        echo ('no result');
    }
}
exit(1);
?>