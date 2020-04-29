<?php

$exec = $_POST['ejecuta'];

    if($exec == 'buscarRemitente'){
        buscarRemitente();
    }

    if($exec == 'bucarDestinatario'){
        bucarDestinatario();
    }

    function buscarRemitente(){

        include ("estableceConexion.php");
        $dni = $_POST['dni'];
        $dni = (int)$dni;
        if(!$conn){
            echo "Se ha producido un fallo en la conexion. MENSAJE: " . mysqli_connect_errno($conn);
        }
        else{
            
            $sql = "SELECT * FROM `remitente` WHERE dni = $dni";
            $resultado = mysqli_query($conn, $sql); 
            $n_filas = mysqli_num_rows($resultado);
            if ($n_filas > 0) {
                while ($row = mysqli_fetch_assoc($resultado)){
                    $row += [ "exist" => true ];
                    echo json_encode($row);
                }
            }else{
                $paylaod = array("exist"=>"false");
                echo json_encode($paylaod);
            }
            mysqli_close($conn);       
        }
    }

    function bucarDestinatario(){

        include ("estableceConexion.php");
        $dni = $_POST['dni'];
        $dni = (int)$dni;
        if(!$conn){
            echo "Se ha producido un fallo en la conexion. MENSAJE: " . mysqli_connect_errno($conn);
        }
        else{
            $sql = "SELECT * FROM `destinatario` WHERE dni = $dni";
            $resultado = mysqli_query($conn, $sql); 
            $n_filas = mysqli_num_rows($resultado);
            if ($n_filas > 0) {
                while ($row = mysqli_fetch_assoc($resultado)){
                    $row += [ "exist" => true ];
                    echo json_encode($row);
                }
            }else{
                $paylaod = array("exist" => "false");
                echo json_encode($paylaod);
            }
            mysqli_close($conn);       
        }
    }
?>


