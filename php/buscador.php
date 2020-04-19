<?php

//$exec = $_POST['exec'];
$exec = 'buscarRemitente';
    if($exec == 'buscarRemitente'){
        buscarRemitente();
    }

    function buscarRemitente(){

        include ("estableceConexion.php");
        $dni = $_POST['dni'];
        $dni = (int)$dni;
        //$dni = 39042327;
        //$t = (int)$dni;
        //echo  $dni;
        if(!$conn){
            echo "Se ha producido un fallo en la conexion. MENSAJE: " . mysqli_connect_errno($conn);
        }
        else{
            $sql = "SELECT * FROM `remitente` WHERE dni = $dni";
            $resultado = mysqli_query($conn, $sql); 
            while ($row = mysqli_fetch_array($resultado)){
                echo $row["nombres"];
            }
            //$row = mysqli_fetch_array($resultado);
            mysqli_close($conn);       
        }
        //$con->close();
        //return    $row;
    }
?>


