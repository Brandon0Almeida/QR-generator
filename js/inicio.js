src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';


function bucarRemitente(){
    console.log(document.getElementById('rdni').value);
    var dni = document.getElementById('rdni').value;
    $("#rdni").change(function(){
        $.post("../php/buscador.php",function(dni){
            //$.document("#rnombre").value=dni;
            console.log(dni);
            document.getElementById('rnombre').value = dni;
        });
    });


}

window.onload=bucarRemitente;