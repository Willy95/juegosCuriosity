$(document).ready(function(){
  var objetivo = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor reiciendis eius inventore placeat facere minima fuga aliquam, cumque numquam aspernatur vel voluptatibus harum natus quo odio est rem repellat rerum nobis libero dolorem totam neque hic quisquam accusamus. Facilis unde libero omnis eligendi tempore repudiandae voluptate eaque ullam explicabo ducimus.";
  $curiosity.menu.setPaginaId("#li-tablas");
  $juego.setTitulo("Tablas de multiplicar");
  $juego.setObjetivo(objetivo);
  $juego.setBackgroundColor("rgb(25, 132, 179)");
  $juego.setBackgroundImg("/packages/images/fondos/fondo.jpg");
  $juego.setNivelUsuarioIMG("/packages/images/cups/medalla1.png");
  $juego.boton.archivoPDF.setDireccion('/packages/docs/pruebaPDF.pdf');
  $juego.boton.archivoPDF.setNombreDescarga('Guia Sumas Restas');
  $juego.boton.video.setVideo('/packages/video/Restas.mp4');


 /*---------------------------------------------------------------
 objeto para gestionar todo lo relevanta a la tabla de multiplicar
 propiedades de tabla y funciones
 ----------------------------------------------------------------*/
  var tabla = {
     nivel:1,//representa el numero de la tabla por ejemplo la tabla del uno, la tabla del dos, etc
     res:"",//variable que captura la respuesta seleccionada por el usuario
     pos:0,//variable de control para saber en que posicion o en que renglon  del la tabla de multiplicar nos encontramos
     $n1:$(),//numero uno de la tabla de multiplicar
     $n2:$(),//numero dos de la tablade multiplicar
     $niveles:$(),//Elemento del Dom donde se encuentran los niveles(estrellas) al llegar al diez o tabla del 10 el juego termina
     $zonaRes:$(),//Zona donde el usuario arrastra las opciones seleccionadas
     $res:$(),//Elemento del Dom donde se encuentra el resultado de la tabla este numero se genera de la multiplicación de los numeros ya menciondao $n1 y $n2
     capturado:false,//variable de auxiliar para saber si la respuesta arrastrada fue capturada en la zona de respuestas
     generarTabla : function(){// se genera la tabla de multiplicar segun su nivel
        for(var i=0;i<this.$n1.length;i++){
            this.$n1.text(this.nivel);
            $(this.$n2[i]).data("valor",i+1);
            $(this.$n2[i]).text(i+1);
            $(this.$res[i]).data("valor",this.nivel*(i+1));
        }
    },
    verificar:function($n){//funcion que verifica si el resultado seleccionado por el usuario es correcto
        if($n==$(this.$res[this.pos]).data("valor")){// si el numero que selecciono es correcto regresamos true  si no false

            $(this.$res[this.pos]).parent().parent().removeClass("activ");
            $(this.$res[this.pos]).parent().parent().find("i").removeClass("fa-square-o");
            $(this.$res[this.pos]).parent().parent().find("i").addClass("fa-check");
            $(this.$res[this.pos]).text($(this.$res[this.pos]).data("valor"));
            this.pos++;
            if(this.pos>9){
                $(this.$niveles[this.nivel-1]).css("color","yellow")
                this.nivel++;
                this.pos=0;
                this.clearRes();
                this.generarTabla();
            }
            if(this.nivel>9)
            {
                game.finishGame();
            }
            $(this.$res[this.pos]).parent().parent().addClass("activ");
            this.lenghtRes();
            return true;
        }
        else return false;
    },
    lenghtRes:function()//funciton auxiliar que nos ayuda a saber la lonjtud de la respuesta
    {
        if($(this.$res[this.pos]).data("valor")>9){
            $(this.$res[this.pos]).text("??");
            $(this.$zonaRes).removeClass("center-cont");
            $(this.$zonaRes).removeClass('hidden');
            return 2;
        }
        else if($(this.$res[this.pos]).data("valor")>99)
            return 3;
        else{
             this.$zonaRes.last().addClass("hidden");
             this.$zonaRes.first().addClass("center-cont");
             $(this.$res[this.pos]).text("?");
             return 1;
        }

    },
    restorePlay:function(){
        this.clearRes();
        this.pos=0;
        this.nivel=1;
        this.$res.parent().parent().removeClass("activ");
        this.$res.parent().parent().first().addClass("activ");
        this.$niveles.css("color","#fff");
    },
    clearRes:function(){//funcion auxiliar para reinciar las respuestas una vez completada la tabla de multiplicar
        this.$res.text("");
        $(".check").addClass("fa-square-o");
        $(".check").removeClass("fa-check");

    }
 }
 //objeto para controlar los numeros y respuestas


// ---------------------------------------------------------------------------
// Objeto para gestionar todo lo relevante al juego como puntuaje, eficiencia
// tiempo, etc
// ----------------------------------------------------------------------------


    var game={
          // Guardamos el puntaje maximo del usuario en una variable para uso global
          puntosMaximos: 0,
          // Establece la cantidad de segundos de inicio
          cantTemp: 03,
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
        Comenzar: function(){//funcion displarada al comenzar el juego aquí se iniciar el tiempo y se mustra la zona del juego
            $("#zona-play").show();
            $("#zona-obj").hide();
            //establecemos propiedades al objeto tabla
            tabla.$n1=$(".n1");
            tabla.$n2=$(".n2");
            tabla.$res=$(".res");
            tabla.$zonaRes =$(".zona-respuestas>h1");
            tabla.$niveles=$(".niveles>i");
            tabla.generarTabla();
            $(".n-res2").hide();
            game.scrollMove(75);
            game.cantTemp=180;
            tabla.$zonaRes.hide();
            game.interval = setInterval(game.restarTiempo, 1000);
            //interval = setInterval(changeTime,1000);
        },
        restarTiempo:function()
        {
            game.cantTemp--;
            game.$temp.text(game.cantTemp);
            if(game.cantTemp===0){
               //game.finishGame();
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
  /*--------------------------------------------------------------------*/
      $juego.boton.comenzar.setFuncion(game.Comenzar);
 /*----------------------------------------------------------------------*/
    $(".zona-numeros>h2").draggable({
        helper:'clone',
        start:function(){
           game.showResponse('fast');
           game.intentos++;
        },
        stop:function(){
            if(tabla.lenghtRes()>1){
                //el resultado es mayor que 9
                if(tabla.capturado){
                  tabla.res+=$(this).text();
                  if(tabla.res.length>1)
                  {
                      if(tabla.verificar(tabla.res)){
                          game.setEffect($(".img-start"),'good');
                          game.setCorrecto();

                      }
                      else{
                          game.setEffect($(".img-incorrect"),'bad');
                          game.setError();
                      }
                      $(".zona-respuestas>h1").droppable('option','disabled',false);
                      game.fadeOutResponse(2000,function(){$(".zona-respuestas>h1").empty()});
                      tabla.res="";
                  }
                  tabla.capturado=false;
                }

            }else{

                //el resultado es menor que 10
                if(tabla.capturado){
                    if(tabla.verificar($(this).text())){
                        game.setEffect($(".img-start"),"good");
                        game.setCorrecto();

                    }
                    else{
                        game.setEffect($(".img-incorrect"),"bad");
                        game.setError();
                    }
                    game.fadeOutResponse(2000,function(){$(".zona-respuestas>h1").empty()});
                    tabla.capturado=false;
                }
            game.fadeOutResponse(800);
            }
        }
    });
  /*-------------------------------------------------------------------*/
  /*Establecer el metodo a los contenedores de respuestas pera que estos capturen las opciones arrastradas por el usua*/
    $(".zona-respuestas>h1").droppable({
        drop:function(ev,ui){
            tabla.capturado=true;
            var dropped = ui.draggable.clone();//clonamos el elemento arrastrado
            $(this).append(dropped);// y este elemento arrastrado se lo aplicamos al contenido
            if(tabla.lenghtRes()>1){
                $(this).droppable('option','disabled',true);
            }else{
                $(this).droppable('option','disabled',false);
            }
        }

    });

// ----------------------------------------------------------------------------

});
