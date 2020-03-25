<?php

    function estableceConexion (){

        $conn = mysqli_connect("127.0.0.1", "root", "", "envios");

        if ($conn->connet_error){
    
            die($conn->connet_error);
            
        }
    //print "Conexion exitosa!";

    exit(1);

    }



?>