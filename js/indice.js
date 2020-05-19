function validadorLogin(){
    $("#login").click(function(event){
        event.preventDefault();
        var user = $("#user").val();
        var pass = $("#pass").val();
        console.log(user, pass);
        $.post("../php/validar-login.php", {
            user: user,
            pass: pass
        },
        function(respuesta){
            if (respuesta == 'correct'){
                console.log(respuesta);
                location.href ="operatoria/inicio.html";
            }
            else if(respuesta == "no result"){
                console.log(respuesta);
              document.getElementById('noAutorizado').style.display = 'block';  
            }else{
                console.log(respuesta);
                document.getElementById('error').style.display = 'block';  
            }
        });
    });
};
window.onload=validadorLogin;