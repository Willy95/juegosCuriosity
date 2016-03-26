$(document).ready(function(){
  var objetivo = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor reiciendis eius inventore placeat facere minima fuga aliquam, cumque numquam aspernatur vel voluptatibus harum natus quo odio est rem repellat rerum nobis libero dolorem totam neque hic quisquam accusamus. Facilis unde libero omnis eligendi tempore repudiandae voluptate eaque ullam explicabo ducimus.";
  $curiosity.menu.setPaginaId("#li-dibujar-numeros");
  $juego.setTitulo("Decenas y centenas");
  $juego.setObjetivo(objetivo);
  $juego.setBackgroundColor("rgb(25, 132, 179)");
  $juego.setBackgroundImg("/packages/images/fondos/fondo.jpg");
  $juego.setNivelUsuarioIMG("/packages/images/cups/medalla1.png");
  $juego.boton.archivoPDF.setDireccion('/packages/docs/pruebaPDF.pdf');
  $juego.boton.archivoPDF.setNombreDescarga('Guia Sumas Restas');
  $juego.boton.video.setVideo('/packages/video/Restas.mp4');
  $juego.boton.comenzar.setFuncion(function(){
      $("#zona-play").show();
      $("#zona-obj").hide();
      game.startGame();
  });


 /*---------------------------------------------------------------
 objeto para gestionar todo lo relevanta a la tabla de multiplicar
 propiedades de tabla y funciones
 ----------------------------------------------------------------*/

 //objeto para controlar los numeros y respuestas


// ---------------------------------------------------------------------------
// Objeto para gestionar todo lo relevante al juego como puntuaje, eficiencia
// tiempo, etc
// ----------------------------------------------------------------------------


    var game={
          // Guardamos el puntaje maximo del usuario en una variable para uso global
          puntosMaximos: 0,
          // Establece la cantidad de segundos de inicio
          cantTemp: 0,
          // Declaramos la variable de forma globar a utilizar en el setInterval(intervalo de tiempo)
          interval:0,
          // Declaramos la variable para uso de puntaje
          puntajeNow:0,
          // Variable de control para llecar el conteo de las veces que el usuario arrastra una opcion
          intentos:0,
          // Variable para guardar la cantidad de aciertos
          continuo:0,
          // Valor que tendran los puntos al iniciar
          valorPts:100,
          // Valor de la eficiencia inicial
          eficiencia: 0,
          // Cantidad Total de click realizados
          totClicks : 0,
          // Cantidad total de aciertos
          totAciertos : 0,
          // Cantidad total de errores
          totErrores : 0,
          $temp:$("#temp-count"),
          setError: function(){
            // regresamos la cantidad de aciertos continuos a cero
            this.continuo = 0;
            // Regresamos el valor de los puntos por acirto a 100
            this.valorPts = 100;
            // añadimos la clase creada en css para poner una sombra roja fuera del contenedor del juego
            $(".zona-juego").addClass('error-shadow');
            // colocamos una equis en la esquina inferior derecha dentro del div con la clase verific indicando que el usuario se ha equivocado
            $(".verific").html("<i class='fa fa-erase fa-4x'></i>").css('color', 'rgb(215, 36, 36)');
            // establecemos que despues de 600 milisegundos la clase de error se eliminara del contenedor del juego
            setTimeout(function(){
              // removemos la clase de error-shadow
              $(".zona-juego").removeClass('error-shadow');
              // eliminamos el contenido del div con la clase verific el cual contenia una equis
              $(".verific").empty();
              // Sumamos el error
              this.totErrores += 1;
              // Establecemos en cuantos milisegundos se realizará la funcion
            }, 600);
        },
        startGame: function(dificult){//funcion displarada al comenzar el juego aquí se iniciar el tiempo y se mustra la zona del juego
            //establecemos propiedades al objeto tablaW
            $("html,body").animate({scrollTop:200},'slow');
            game.cantTemp=60;
            game.interval = setInterval(game.restarTiempo, 1000);
            //interval = setInterval(changeTime,1000);
        },
        restarTiempo:function()
        {
            game.cantTemp--;
            game.$temp.text(game.cantTemp);
            if(game.cantTemp===0){
               game.finishGame();
            }
        },
        finishGame:function(){
             clearInterval(game.interval);
             if(game.puntajeNow>game.puntosMaximos){
                 game.puntosMaximos=game.puntajeNow;
             }
             game.eficiencia= Math.round(game.totAciertos*100)/game.intentos;
             $juego.modal.puntuacion.mostrar(game.puntosMaximos, game.eficiencia, game.puntajeNow);
             $("#zona-play").hide();
             $("#zona-obj").show();
             tabla.restorePlay();
             game.intentos=0;
             game.totAciertos=0;
        },
        setCorrecto: function (){
            // sumamos el puntaje
            $("#countPuntaje").text(this.puntajeNow += this.valorPts);
            // Sumamos +1 a los aciertos continuos que llevamos
            this.continuo += 1;
            // colocamos una palomita en la esquina inferior derecha dentro del div con la clase verific indicando que el usuario ha seleccionado la opcion correcta
            $(".verific").html("<i class='fa fa-check fa-4x'></i>").css('color', 'rgb(255, 255, 255)');
            // establecemos que despues de 600 milisegundos la clase de error se eliminara del contenedor del juego
            setTimeout(function(){
              // eliminamos el contenido del div con la clase verific el cual contenia una palomita
            $(".verific").empty();
            // Sumamos el acierto
            game.totAciertos += 1;
            // Establecemos en cuantos milisegundos se realizará la funcion
            }, 600);
        },
        hideResponse: function(speed)
        {
            $(".zona-respuestas>h1").hide(speed);
            $("div.advice").show(speed);
        },
        showResponse:function(speed){
             $("div.advice").hide(speed);
             $(".zona-respuestas>h1").show(speed);
        },
        fadeOutResponse: function(slow,speed)
        {
             $("div.advice").show('slow');
             $(".zona-respuestas>h1").fadeOut(speed);
        },
        setEffect: function($element,efect)
        {
             $element.show('fast');
             $element.css({"animation":"1.9s "+efect+" 1"});
             $element.fadeOut(1900);
        },
        // funcion que obtiene como paramentro un numer y en base a ese numero baja
        scrollMove: function(num)
        {
            num+=$(window).scrollTop();
            $("html,body").animate({scrollTop:num},'slow');
        }

    };


   var clic=false;
   var xCoord,yCoord="";
   var canvas=document.getElementById("can");
   var cntx=canvas.getContext("2d");
   cntx.strokeStyle="red";
   cntx.lineWidth=10;
   cntx.lineCap="round";
   cntx.fillStyle="#fff";
    cntx.fillRect(0,0,canvas.width,canvas.height);
  $("#can").mousedown(function(canvas){
     clic=true;
     cntx.save();
     xCoord=canvas.pageX-this.offsetLeft;
     yCoord=canvas.pageY-this.offsetTop
  });

  $(document).mouseup(function(){
     clic=false
  });

  $(document).click(function(){
     clic=false
  });
  $("#can").mousemove(function(canvas){
     if(clic==true){
          cntx.beginPath();
         cntx.moveTo(canvas.pageX-this.offsetLeft,canvas.pageY-this.offsetTop);
         cntx.lineTo(xCoord,yCoord);
         cntx.stroke();
         cntx.closePath();
         xCoord=canvas.pageX-this.offsetLeft;
         yCoord=canvas.pageY-this.offsetTop
     }
  });

$("#clr > div").click(function(){
   cntx.strokeStyle=$(this).css("background-color");
});

$("#borrador").click(function(){
   cntx.strokeStyle="#fff"
});


$("#limpiar").click(function(){
   cntx.fillStyle="#fff";
   cntx.fillRect(0,0,canvas.width, canvas.height);
   cntx.strokeStyle="red";
   cntx.fillStyle="red"
})
  /*<--------------------------------------------------------------------*/

});

