<?php
//datos del remitente
$nombre = $_POST["rnombre"];
$apellido = $_POST["rapellido"];
$dni = $_POST["rdni"];
$telefono = $_POST["rtelefono"];
$email = $_POST["remail"];
$calle = $_POST["rcalle"];
$altura = $_POST["raltura"];
$dpto = $_POST["rdepto"];
$piso = $_POST["rpiso"];
$cp = $_POST["rcp"];
$barrio = $_POST["rbarrio"];
$localidad = $_POST["rlocalidad"];
$provincia = $_POST["rprovincia"];
$exist = $_POST["rexist"];
/*datos del paquete*/
$sobre = $_POST["tipo"];
$gettimezone = date_default_timezone_set('America/Argentina/Jujuy');
$fechahora = date("Y-m-d H:i:s");
$estado = $_POST["estado"];
$codigop = $_POST["codigop"];
//datos del destinatario
$nombreD = $_POST["dnombre"];
$apellidoD = $_POST["dapellido"];
$dniD = $_POST["ddni"];
$telefonoD = $_POST["dtelefono"];
$emailD = $_POST["demail"];
$calleD = $_POST["dcalle"];
$alturaD = $_POST["daltura"];
$dptoD = $_POST["ddepto"];
$pisoD = $_POST["dpiso"];
$cpD = $_POST["dcp"];
$barrioD = $_POST["dbarrio"];
$localidadD = $_POST["dlocalidad"];
$provinciaD = $_POST["dprovincia"];
$referencia = $_POST["drefencia"];
$existD = $_POST["dexist"];

cargaEnvioCompleto();

function cargaEnvioCompleto(){

    include ("estableceConexion.php");
    
    if(!$conn){
        echo "Se ha producido un fallo en la conexion. MENSAJE: " . mysqli_connect_errno($conn);
    }
    else{
        //paso 1 cargar tabla REMITENTE. Si existe se hace un update por si el cliente cambio algun dato. Si no existe se carga como nuevo cliente.
        if ($GLOBALS['exist'] == "true"){
            $sqlInsertRemintenteEdit =  "UPDATE `remitente` SET `nombres`='" . $GLOBALS['nombre'] ."',`apellidos`='" . $GLOBALS['apellido'] ."',`telefono`='" . $GLOBALS['telefono'] ."',
                                        `email`='" . $GLOBALS['email'] ."',`calle`='" . $GLOBALS['calle'] ."',`altura`='" . $GLOBALS['altura'] ."',`piso`='" . $GLOBALS['piso'] ."',
                                        `depto`='" . $GLOBALS['dpto'] ."',`cp`='" . $GLOBALS['cp'] ."',`barrio`='" . $GLOBALS['barrio'] ."',`localidad`='" . $GLOBALS['localidad'] ."',
                                        `provincia`='" . $GLOBALS['provincia'] ."' WHERE dni = " . $GLOBALS['dni'];
            //echo ('la sentencia sql es --->' . $sqlInsertRemintenteEdit);
            if (mysqli_query($conn, $sqlInsertRemintenteEdit)){
               // echo "se completo la operacion 1.1 con exito";            
            }
            else{
                    echo "OCURRIO UN ERROR EN EL PASO 1.1 DE LA OPERCACION.";
            }
            //echo $sqlInsertRemintenteEdit;
        }else{
            $sqlInsertRemintente =  "INSERT INTO `remitente`(`dni`, `nombres`, `apellidos`, `telefono`, `email`, `calle`, `altura`, `piso`, `depto`, `cp`, `barrio`, `localidad`, `provincia`)
                                     VALUES (" . $GLOBALS['dni'] . ",'" . $GLOBALS['nombre'] ."','" . $GLOBALS['apellido'] ."','" . $GLOBALS['telefono'] ."','" . $GLOBALS['email'] ."',
                                     '" . $GLOBALS['calle'] ."','" . $GLOBALS['altura'] ."','" . $GLOBALS['piso'] ."','" . $GLOBALS['dpto'] ."','" . $GLOBALS['cp'] ."','" . $GLOBALS['barrio'] ."',
                                     '" . $GLOBALS['localidad'] ."','" . $GLOBALS['provincia'] ."')";
            //echo ('la sentencia sql es --->' . $sqlInsertRemintente);
            if (mysqli_query($conn, $sqlInsertRemintente)){
                //echo "se completo la operacion 1.2 con exito";            
            }
            else{
                    echo "OCURRIO UN ERROR EN EL PASO 1.2 DE LA OPERCACION.";
            }
            //echo $sqlInsertRemintente;

        }
        //paso 2 cargar tabla DESTINATARIO. Si existe se hace un update por si el cliente cambio algun dato. Si no existe se carga como nuevo cliente.
        if ($GLOBALS['existD'] == "true"){
            $sqlInsertDestinatarioEdit =  "UPDATE `destinatario` SET `nombres`='" . $GLOBALS['nombreD'] ."',`apellidos`='" . $GLOBALS['apellidoD'] ."',`telefono`='" . $GLOBALS['telefonoD'] ."',
                                        `email`='" . $GLOBALS['emailD'] ."',`calle`='" . $GLOBALS['calleD'] ."',`altura`='" . $GLOBALS['alturaD'] ."',`piso`='" . $GLOBALS['pisoD'] ."',
                                        `depto`='" . $GLOBALS['dptoD'] ."',`cp`='" . $GLOBALS['cpD'] ."',`barrio`='" . $GLOBALS['barrioD'] ."',`localidad`='" . $GLOBALS['localidadD'] ."',
                                        `provincia`='" . $GLOBALS['provinciaD'] ."',`referencia`='" . $GLOBALS['referencia'] ."' WHERE dni = " . $GLOBALS['dniD'];
            //echo ('los datos son -->' . $sqlInsertDestinatarioEdit);
            if (mysqli_query($conn, $sqlInsertDestinatarioEdit)){
                //echo "se completo la operacion 2.1 con exito";            
            }
            else{
                    echo "OCURRIO UN ERROR EN EL PASO 2.1 DE LA OPERCACION.";
            }
            //echo $sqlInsertDestinatarioEdit;

        }else{
            $sqlInsertDestinatario =  "INSERT INTO `destinatario`(`dni`, `nombres`, `apellidos`, `telefono`, `email`, `calle`, `altura`, `piso`, `depto`, `cp`, `barrio`, `localidad`, `provincia`,`referencia`)
                                     VALUES (" . $GLOBALS['dniD'] . ",'" . $GLOBALS['nombreD'] ."','" . $GLOBALS['apellidoD'] ."','" . $GLOBALS['telefonoD'] ."','" . $GLOBALS['emailD'] ."',
                                     '" . $GLOBALS['calleD'] ."','" . $GLOBALS['alturaD'] ."','" . $GLOBALS['pisoD'] ."','" . $GLOBALS['dptoD'] ."','" . $GLOBALS['cpD'] ."','" . $GLOBALS['barrioD'] ."',
                                     '" . $GLOBALS['localidadD'] ."','" . $GLOBALS['provinciaD'] ."','" . $GLOBALS['referencia'] ."')";
            //echo ('los datos son -->' . $sqlInsertDestinatario);
            if (mysqli_query($conn, $sqlInsertDestinatario)){
               // echo "se completo la operacion 2.2 con exito";            
            }
            else{
                    echo "OCURRIO UN ERROR EN EL PASO 2.2 DE LA OPERCACION.";
            }
        }
        //paso 3 cargar tabla ENTRADA. 
        $sqlInsertEntrada = "INSERT INTO `entrada`(`fecha_hora`, `id_codigo_paquete`, `remitente_dni`, `empleado_legajo`, `destinatario_dni`) 
                                 VALUES ('" . $GLOBALS['fechahora'] . "','" . $_POST['codigop'] . "'," . $GLOBALS['dni'] . ",1," . $GLOBALS['dniD'] .")";
        //echo ("los datos son: --> " . $sqlInsertEntrada);
        global $id;
        if (mysqli_query($conn, $sqlInsertEntrada)){
            //echo "se completo la operacion 1 con exito";
            $ultimoId = mysqli_query($conn, "SELECT MAX(id) AS id FROM entrada");
            while ($row = mysqli_fetch_assoc($ultimoId)){
                $id = $row['id'];
                //echo json_encode($row);
            }   
        }
        else{
            echo "OCURRIO UN ERROR EN EL PASO 1 DE LA OPERCACION.";
        }
        //paso 4 cargar tabla PAQUETE
        $sqlInsertPaquete =     "INSERT INTO `paquete` (`tipo_paquete`, `estado`, `codigo_paquete`,`entrada_identrada`) 
                                 VALUES ('" . $GLOBALS['sobre'] . "','" . $GLOBALS['estado'] ."','" . $_POST['codigop'] . "'," . $GLOBALS['id'] . ")";
        echo $sqlInsertPaquete;
        if (mysqli_query($conn, $sqlInsertPaquete)){
            //echo "se completo la operacion 4 con exito";            
        }
        else{
            echo "OCURRIO UN ERROR EN EL PASO 4 DE LA OPERCACION.";
        }
        mysqli_close($conn);       
    }
}
?>