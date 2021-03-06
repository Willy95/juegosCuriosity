$(document).on('ready',__init);
function __init(){
    /*
    * Declaramos la variable para el primer elemento que se mostrará
    */

        var $primer_log = $('#input-user');

    /*
    * Declaramos la variable $segundo_log la cual contiene el segundo input a mostrar
    */
        var $segundo_log = $('#input-pass');

    /*

    /*
    * Declaramos variables correspondientes
    * a las credenciales de acceso
    * del usuario *-Username *-Password
    */
        var $username = $('#username');
        var $password = $('#password');

    /*
    * Esconderemos el input al iniciar
    * el DOM para que aparezca hasta que
    * haya ingresado el usuario y se logre
    * encontrar
    */
        $segundo_log.hide();
        $('#login-int').hide();
        $('#login-back').hide();

    /*
    * Creamos la función show_second_log que nos servirá
    * para utilizarla al momento de mostrar el segundo
    * elemento que nos pide la password
    */

        function show_second_log(foto){
            $primer_log.hide();
            $segundo_log.show();
            $("#boxButtonsIn").removeAttr('hidden');
            $('#login-next').hide();
            $('#login-reg').hide();
            $('#login-int').show();
            $('#login-back').show();
            $(".login-img").attr('src',foto);
        }

        // reocultamos los botones y mostramos los botones de inicio asi como regresamos
        // la foto de perfil por la default y el input del usuario tambien
        function return_log(){
            $primer_log.show();
            $segundo_log.hide();
            $('#login-next').show();
            $('#login-reg').show();
            $('#login-int').hide();
            $('#login-back').hide();
            $("#username").val("");
            $(".login-img").attr('src',"/packages/images/avatars/avt-cu-default.png");
        }

        // ejecutamos la funcion return_log para regresar los valore de login
        $("#login-back").click(return_log);

        // Funcion de verificacion de usuario
        function verificarUser(){
          if($("#username").val() !== ""){
            var datos = {
              username : $("#username").val()
            };
            $.ajax({
              url: '/verificarUsuario',
              type: 'POST',
              data: {data: datos}
            })
            .done(function(response) {
              if(response != 'null'){
                show_second_log('/packages/images/avatars/gato.jpg');
              }
              else{
                $curiosity.noty("El nombre de usuario '"+$username.val()+"' no existe.", 'information');
              }
            })
            .fail(function(error) {
              console.log(error);
            });
          }
          else{
            $curiosity.noty("Ingrese un nombre de usuario",'warning');            
          }
        }

        // verificamos si el usuario existe en la base de datos al dar click en
        // boton de siguiente en la interfaz
        $("#login-next").click(verificarUser);

    /*Creamos las reglas de validación*/

    /*Creamos el evento keydown para que
    * que apretemos el tabulador se ejecute
    * el evento asi como cuando se de el enter
    */
        $username.on('keydown',function(e){
            if(e.keyCode == 9 || e.keyCode == 13){
              verificarUser();
            }
        });

    /* Declaramos el evento keydown para el password
    * diciendole asi que cada ves que se de un enter
    * se dispará la funcion log_in
    */
        $password.on('keydown',function(e){
          if(e.keyCode == 13){
            buscarUsuario();
          }
        });

    /* Declaramos nuevamente otra opcion de logeo a traves
    un click en el boton de entrar*/
    $('#login-int').on('click',buscarUsuario);

    // Funcion para la verificacion completa de usuario y contraseña en la base de datos
    function buscarUsuario(){
      var datos = {
        username: $username.val(),
        password: $password.val()
      };

      $.ajax({
        url: '/login',
        type: 'POST',
        dataType: 'json',
        data: {data: datos}
      })
      .done(function(response) {
        // console.log(response);
        if($.isPlainObject(response)){
          $.each(response,function(index,value){
            $.each(value,function(i,message){
              $curiosity.noty(message, 'warning');
            });
          });
        }
        else if(response == 'success'){
          $curiosity.noty('Bienvenido a Juegos Curiosity!!', 'success');
          window.location.href = '/sumas-restas';
        }
        else{
          $curiosity.noty('La contraseña de usuario no es valida', 'information');
        }
      })
      .fail(function(error) {
        console.log(error);
      });
    }




}
