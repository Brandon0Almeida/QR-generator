src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';

function iniciador(){
    buscarRemitente();
    bucarDestinatario();
    showHideElements();
    ingresoPaquete();
}

function showHideElements(){
    $('#formenvio').hide();
    var muestra = false;
    
    $("#ingreso").click(function(){
        if (muestra == false){
            $('#formenvio').show();
            muestra = true;
        }else{
        $('#formenvio').hide();
        muestra = false;
        }
    });
}
var rexist,dexist;
function buscarRemitente(){
    $("#rdni").change(function(event){
        //event.preventDefault();
        var dni = $("#rdni").val();
        var ejecuta = "buscarRemitente";
        dataType: 'json';
        //pasamos 3 parametros: servidor 
        $.post("../php/buscador.php", {
            dni: dni,
            ejecuta: ejecuta
        },
        function(respuesta){
            console.log(respuesta);
            var paylaod = JSON.parse(respuesta);
            if(paylaod.exist == true){
                rexist = paylaod.exist;
                console.log(rexist);
                console.log("chequeo de if");
                document.getElementById('rnombre').value = paylaod.nombres;
                document.getElementById('rapellido').value = paylaod.apellidos;
                document.getElementById('rtelefono').value = paylaod.telefono;
                document.getElementById('remail').value = paylaod.email;
                document.getElementById('rcalle').value = paylaod.calle;
                document.getElementById('raltura').value = paylaod.altura;
                document.getElementById('rdepto').value = paylaod.depto;
                document.getElementById('rpiso').value = paylaod.piso;
                document.getElementById('rcp').value = paylaod.cp;
                document.getElementById('rbarrio').value = paylaod.barrio;
                document.getElementById('rlocalidad').value = paylaod.localidad;
                document.getElementById('rprovincia').value = paylaod.provincia;
            }else{
                rexist = paylaod.exist;
            }
        });
    });
};
console.log(rexist);
function bucarDestinatario(){
    $("#ddni").change(function(event){
        //event.preventDefault();
        var dni = $("#ddni").val();
        var ejecuta = "bucarDestinatario";
        //pasamos 3 parametros: servidor 
        $.post("../php/buscador.php", {
            dni : dni,
            ejecuta: ejecuta
        },
        function(respuesta){
            console.log(respuesta);
            var paylaod = JSON.parse(respuesta);
            if (paylaod.exist == true){
                dexist = paylaod.exist;
                console.log(dexist);
                document.getElementById('dnombre').value = paylaod.nombres;
                document.getElementById('dapellido').value = paylaod.apellidos;
                document.getElementById('dtelefono').value = paylaod.telefono;
                document.getElementById('demail').value = paylaod.email;
                document.getElementById('dcalle').value = paylaod.calle;
                document.getElementById('daltura').value = paylaod.altura;
                document.getElementById('ddepto').value = paylaod.depto;
                document.getElementById('dpiso').value = paylaod.piso;
                document.getElementById('dcp').value = paylaod.cp;
                document.getElementById('dbarrio').value = paylaod.barrio;
                document.getElementById('dlocalidad').value = paylaod.localidad;
                document.getElementById('dprovincia').value = paylaod.provincia;
                document.getElementById('dreferencia').value = paylaod.referencia;
                //$('#rdni').text(respuesta);
            }else{
                dexist = paylaod.exist;
            }
        });
    });
};
console.log(dexist);
function ingresoPaquete(){
    //elementos Paquetes 
    var tipo, rdni, estado, codigopp, ddni, identrada; 
    var rnombre,rapellido,rtelefono,remail,rcalle,raltura,rdepto,rpiso,rcp,rbarrio,rlocalidad,rprovincia;
    var dnombre,dapellido,dtelefono,demail,dcalle,daltura,ddepto,dpiso,dcp,dbarrio,dlocalidad,dprovincia,drefencia
    estado = "en deposito";
    codigopp = "AAA0000000";
    identrada = "0";
    $("#cargar").click(function(event){
        event.preventDefault();
        var ejecuta = "igresaPaquete";
        console.log(rexist + " " + dexist);
        //pasamos 3 parametros: servidor 
        $.post("../php/cargarEnvioCompleto.php", {
           //elementos Paquetes 
            tipo: $("#elemento").val(), 
            rdni: $("#rdni").val(),
            estado: "AAA0000000",
            codigop: "AAA0000001",
            ddni: $("#ddni").val(),
            identrada: identrada,
            //elemntos remitentes
            rnombre: $("#rnombre").val(),
            rapellido: $("#rapellido").val(), 
            rtelefono: $("#rtelefono").val(),
            remail: $("#remail").val(),
            rcalle: $("#rcalle").val(),
            raltura: $("#raltura").val(),
            rdepto: $("#rdepto").val(),
            rpiso: $("#rpiso").val(),
            rcp: $("#rcp").val(),
            rbarrio: $("#rbarrio").val(),
            rlocalidad: $("#rlocalidad").val(),
            rprovincia: $("#rprovincia").val(),
            rexist: rexist,
            //elementos destinatarios
            dnombre: $("#dnombre").val(),
            dapellido: $("#dapellido").val(),
            dtelefono:$("#dtelefono").val(),
            demail: $("#demail").val(),
            dcalle: $("#dcalle").val(),
            daltura: $("#daltura").val(),
            ddepto: $("#ddepto").val(),
            dpiso: $("#dpiso").val(),            
            dcp: $("#dcp").val(),
            dbarrio: $("#dbarrio").val(),
            dlocalidad: $("#dlocalidad").val(),
            dprovincia: $("#dprovincia").val(),
            drefencia: $("#dreferencia").val(),
            dexist: dexist
        },function(respuesta){
            if (respuesta){
                console.log("Operacion exitosa  --> " + respuesta);
            }else{
                console.log("No se pudo completar la operacion  -->" + respuesta);
            }
        });
    });
}

window.onload=iniciador;