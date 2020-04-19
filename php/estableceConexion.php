<?php

        $conn = new mysqli("127.0.0.1", "root", "", "envios") ; 

        if($conn->connect_errno){
            echo 'fallo de conexion ' . $conn->connect_errno;
            exit();
        }
    
?>