function iniciador(){   
    buscarRemitente();
    bucarDestinatario();
    showHideElements();
    solicitarTicket();
    salirqr();
    imprimirElemento();
}
function showHideElements(){

    var muestrapanel = false;
    var muestraModal = false;
    
    $("#ingreso").click(function(){
        if (muestrapanel == false){
            $('#caragaDatos').show();
            muestrapanel = true;
        }else{
        $('#caragaDatos').hide();
        limpiarFormulario();
        muestrapanel = false;
        }
    });

    $("#myModal").click(function(){     
        if (muestraModal == false){
            $('#myModal').show();
            muestraModal = true;
        }else{
        $('#myModal').hide();
        muestraModal = false;
        
        }
    });
}
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
            //console.log(respuesta);
            var paylaod = JSON.parse(respuesta);
            if(paylaod.exist == true){
                rexist = paylaod.exist;
                //console.log(rexist);
                //console.log("chequeo de if");
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
}
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
            //console.log(respuesta);
            var paylaod = JSON.parse(respuesta);
            if (paylaod.exist == true){
                dexist = paylaod.exist;
                //console.log(dexist);
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
            }else{
                dexist = paylaod.exist;
            }
        });
    });
}
var codPaquete = "AAA0000004";
function solicitarTicket(){
     $("#mostrar").click(function(event){
        document.getElementById('modalIgresoPaquete').style.display = 'block';
        var data = "Codigo de paquete: " + codPaquete;
        generadorQr(data);
     })
}
function generadorQr(data){
    var qrCode = new QRCode(document.getElementById('codigoQRM'));      
    if (data !== undefined){
        qrCode.makeCode(data);
    }
}
function salirqr(){
    $("#close").click(function(event){
    document.getElementById('modalIgresoPaquete').style.display = 'none';
    limpiamodal();
    });
    
}
function limpiamodal(){
    let menu = document.getElementById('codigoQRM');
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }
    menu = document.getElementById('codigoQRS');
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }
}
function ingresarEnvio(){
    //elementos Paquetes
    console.log("Se ejecuto ingresarEnvio");
    var tipo, rdni, estado, codigopp, ddni; 
    var rnombre,rapellido,rtelefono,remail,rcalle,raltura,rdepto,rpiso,rcp,rbarrio,rlocalidad,rprovincia;
    var dnombre,dapellido,dtelefono,demail,dcalle,daltura,ddepto,dpiso,dcp,dbarrio,dlocalidad,dprovincia,drefencia;
    event.preventDefault();
    var ejecuta = "igresaPaquete";
    //console.log(rexist + " " + dexist);
    //pasamos 3 parametros: servidor 
        $.post("../php/cargarEnvioCompleto.php", {
           //elementos Paquetes 
            tipo: $("#elemento").val(), 
            rdni: $("#rdni").val(),
            estado: "EN DEPOSITO",
            codigop: "AAA0000001",
            ddni: $("#ddni").val(),
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
                //$('.modal').show();
            }else{
                console.log("No se pudo completar la operacion 'ingresarEnvio' -->" + respuesta);
            }
        });
}
function imprimirElemento() {
    $('#imprimir').click(function(event){
        ingresarEnvio();
        var base64dirty = document.getElementsByTagName('img')[1].getAttribute('src');
        base64Data = base64dirty.replace(/^data:image\/png;base64,/,"");
        console.log(base64Data);    
        modelCreator(document.getElementById('dnombre').value + " " + document.getElementById('dapellido').value,
                    document.getElementById('dcalle').value,
                    document.getElementById('daltura').value,
                    document.getElementById('dpiso').value,
                    document.getElementById('ddepto').value,
                    document.getElementById('dlocalidad').value,
                    document.getElementById('dprovincia').value,
                    document.getElementById('dcp').value,
                    document.getElementById('dtelefono').value,
                    document.getElementById('demail').value,
                    base64Data , codPaquete,
                    document.getElementById('rnombre').value + " " + document.getElementById('rapellido').value,
                    document.getElementById('rcalle').value,
                    document.getElementById('raltura').value,
                    document.getElementById('rpiso').value,
                    document.getElementById('rdepto').value,
                    document.getElementById('rlocalidad').value,
                    document.getElementById('rprovincia').value,
                    document.getElementById('rcp').value,
                    document.getElementById('rtelefono').value,
                    document.getElementById('remail').value,);       
        
        /* ingresarEnvio();
        var printContents = document.getElementById("toPrint1").innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        document.getElementById('modalIgresoPaquete').style.display = 'none';
        iniciador();
        limpiamodal(); */
       /* limpiarFormulario(); */
    });
}
function limpiarFormulario(){

    //a continuacion limpliamos todos los inputs del apartado remitente
    document.getElementById("rdni").value = "";document.getElementById("rnombre").value = "";document.getElementById("rapellido").value = "";document.getElementById("rtelefono").value = "";document.getElementById("remail").value = "";document.getElementById("rcalle").value = "";document.getElementById("raltura").value = "";document.getElementById("rdepto").value = "";document.getElementById("rpiso").value = "";document.getElementById("rcp").value = "";document.getElementById("rbarrio").value = "";document.getElementById("rlocalidad").value = "";document.getElementById("rprovincia").value = "";
    
    //a continuacion limpliamos todos los inputs del apartado destinatario
    document.getElementById("ddni").value = "";document.getElementById("dnombre").value = "";document.getElementById("dapellido").value = "";document.getElementById("dtelefono").value = "";document.getElementById("demail").value = "";document.getElementById("dcalle").value = "";document.getElementById("daltura").value = "";document.getElementById("ddepto").value = "";document.getElementById("dpiso").value = "";document.getElementById("dcp").value = "";document.getElementById("dbarrio").value = "";document.getElementById("dlocalidad").value = "";document.getElementById("dprovincia").value = "";document.getElementById("dreferencia").value = "";

}
window.onload=iniciador;