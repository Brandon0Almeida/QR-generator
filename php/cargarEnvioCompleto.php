<?php

/*datos del remitente*/
$nombre = $_POST["r-nombre"];
$apellido = $_POST["r-apellido"];
$dni = $_POST["r-dni"];
$telefono = $_POST["r-telefono"];
$email = $_POST["r-email"];
$calle = $_POST["r-calle"];
$altura = $_POST["r-altura"];
$dpto = $_POST["r-dpto"];
$piso = $_POST["r-piso"];
$cp = $_POST["r-cp"];
$barrio = $_POST["r-barrio"];
$localidad = $_POST["r-localidad"];
$provincia = $_POST["r-provincia"];
/*datos del paquete*/
/*
$sobre = $_POST["t-sobre"];
$fechahora = date("Y-m-d H:i:s");


echo $nombre;


/*datos del destinatario/
$nombreD = $_POST["d-nombre"];
$apellidoD = $_POST["d-apellido"];
$dniD = $_POST["d-dni"];
$telefonoD = $_POST["d-telefono"];
$emailD = $_POST["d-email"];
$calleD = $_POST["d-calle"];
$alturaD = $_POST["d-altura"];
$dptoD = $_POST["d-dpto"];
$pisoD = $_POST["d-piso"];
$cpD = $_POST["d-cp"];
$barrioD = $_POST["d-barrio"];
$apellidoD = $_POST["d-nombre"];
$localidadD = $_POST["d-localidad"];
$provinciaD = $_POST["d-provincia"];
$referencia = $_POST["d-referencia"];

*/

$conn = new mysqli("127.0.0.1", "root", "", "envios");



try
{
    if ($conn){//verificacion de conexion true
        
        echo "Conexion exitosa!";
        
        if ($result = mysqli_query($conn, "SELECT `dni` from remitente WHErE dni = $dni")) {

            /* determinar el número de filas del resultado */
            $row_cnt = mysqli_num_rows($result);
        
            printf("El resultado tiene %d filas.\n", $row_cnt);
        
            /* cerrar el resulset */
            mysqli_free_result($result);

            $updateRemitente = "UPDATE `remitente` SET `nombres`='$nombre',`apellidos`='$apellido',`telefono`='$telefono',`email`='$email',`calle`='$calle',`altura`='$altura',`piso`='$piso',
                                        `depto`='$dpto',`cp`='$cp',`barrio`='$barrio',`localidad`='$localidad',`provincia`='$provincia' WHERE dni = $dni";

            if (mysqli_query($conn, $updateRemitente))  {
                //header("location:./../operatoria/inicio.html");

                echo "Modificacion de los datos";
            }

        }else {
            
            $sqlremitente = "INSERT INTO `remitente`(`dni`, `nombres`, `apellidos`, `telefono`, `email`, `calle`, `altura`, `piso`, `depto`, `cp`, `barrio`, `localidad`, `provincia`)
                    VALUES ($dni,'$nombre','$apellido','$telefono','$email','$calle','$altura','$piso','$dpto','$cp','$barrio','$localidad','$provincia')";

                echo $sqlremitente;

                //echo "ESTE ES EL RESUTADO DE LA ISERCION: " . mysqli_query($conn, $sqlremitente);
                if (mysqli_query($conn, $sqlremitente))  {
                    //header("location:./../operatoria/inicio.html");

                    echo "Insertamos los datos";
                }

        }
        
        
        /*if ($resultado  >= 1){
            
            echo "Se encontro " . $resultado . " resultado";

            
            
            

        }*/
        

        
    }
    else
    {
        throw new Exception('Unable to connect');
    }
}
catch(Exception $e)
{
    echo $e->getMessage();
}







/**

if ($conn -> connet_error){
    
    die("Connection failed: " . $conn -> connect_error);
    
}
   
echo "Conexion exitosa!";

$sqlremitente = "INSERT INTO `remitente`(`dni`, `nombres`, `apellidos`, `telefono`, `email`, `calle`, `altura`, `piso`, `depto`, `cp`, `barrio`, `localidad`, `provincia`)
                    VALUES ($dni,'$nombre','$apellido','$telefono','$email','$calle','$altura','$piso','$dpto','$cp','$barrio','$localidad','$provincia')";

echo $sqlremitente;

if (mysqli_query($conn, $sqlremitente))  {
    //header("location:./../operatoria/inicio.html");
}




$sqlpquete = "INSERT INTO `paquete`(`dni_remitente`, `tipo_paquete`, `estado`, `codigo-paquete`,`destinatario_dni`)
                         VALUES ('$dni','$t-sobre','proceso','AAA000000','$dniD')";

$sqldestinatario = "INSERT INTO `destinatario`(`dni`, `nombres`, `apellidos`, `telefono`, `email`, `calle`, `altura`, `piso`, `depto`, `cp`, `barrio`, `localidad`, `provincia`, `referencia`) 
                    VALUES ('$dniD','$nombreD','$alturaD','$telefonoD','$emailD','$calleD','$alturaD','$pisoD','$dptoD','$cpD','$barrioD','$localidadD','$provinciaD','$referencia')";

if (mysqli_query($conn, $sqlremitente))  {
    //header("location:./../operatoria/inicio.html");
} if (mysqli_query($conn, $sqlpquete))  {
    //header("location:./../operatoria/inicio.html");
} if (mysqli_query($conn, $sqldestinatario))  {
    header("location:./../operatoria/inicio.html");
} 

else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
*/
exit(1);

?>