src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';


function bucarRemitente(){
    
    var dni = document.getElementById('rdni').value;
    $("#rdni").change(function(){
        if(typeof dni != 'undefined' || dni != "" || dni != null){
            console.log(document.getElementById('rdni').value);
            
            $.ajax({
                data:  {"dni" :"dni", exec : 'buscarRemitente' }, //datos que se envian a traves de ajax
                url:   '../php/buscador.php', //archivo que recibe la peticion
                type:  'POST', //método de envio
                beforeSend: function () {
                        $("#rnombre").html("Procesando, espere por favor...");
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                       // $("#rnombre").html(response);
                        console.log(response);
                        document.getElementById('rnombre').value = response;
                }
            });
            
            /*$.post("../php/buscador.php", function({parametro:dni}){
                //$.document("#rnombre").value=dni;
                console.log(dni);
                document.getElementById('rnombre').value = dni;
            });*/
        }
    });


}


function buscar(){
    $("#rdni").change(function(event){
        //event.preventDefault();
        var dni = $("#rdni").val();
        //pasamos 3 parametros: servidor 
        $.post("../php/buscador.php", {
            dni : dni,
        },function(respuesta){
            console.log(respuesta);
            document.getElementById('rnombre').value = respuesta;
            //$('#rdni').text(respuesta);
        });
    });
}

window.onload=buscar;