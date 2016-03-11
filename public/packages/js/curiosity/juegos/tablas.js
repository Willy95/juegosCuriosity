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
  $juego.boton.comenzar.setFuncion(funcionComenzar);
  /*--------------------------------------------------------------------------------------------*/
  //                            Variables globales                                              //
  /*-------------------------------------------------------------------------------------------*/
  var click =false;//contador de click en el escuchador de click de los numeros de respuestas
  var valor ="";//variable para guardar el texto de los numros;
  // Guardamos el puntaje maximo del usuario en una variable para uso global
  var puntosMaximos = 0;
  // Establece la cantidad de segundos de inicio
  var cantTemp = 60;
  // Declaramos la variable de forma globar a utilizar en el setInterval(intervalo de tiempo)
  var interval;
  // Declaramos la variable para uso de puntaje
  var puntajeNow = 0;
  // Declaramos variable para guardar el valor de la primera operacion
  var data1;
  // Declaramos variable para guardar el valor de la segunda operacion
  var data2;
  // Variable para guardar la cantidad de aciertos
  var continuo = 0;
  // Valor que tendran los puntos al iniciar
  var valorPts = 100;
  // Valor de la eficiencia inicial
  var eficiencia = 0;
  // Cantidad Total de click realizados
  var totClicks = 0;
  // Cantidad total de aciertos
  var totAciertos = 0;
  // Cantidad total de errores
  var totErrores = 0;
  //objeto tabla encargado de generar las tablas y llevar el conteo de los niveles
 var tabla = {
     nivel:1,
     pos:0,
     $n1:$(),
     $n2:$(),
     $res:$(),
     capturado:false,
     generarTabla : function(){
        for(var i=0;i<this.$n1.length;i++){
            this.$n1.text(this.nivel);
            $(this.$n2[i]).data("valor",i+1);
            $(this.$n2[i]).text(i+1);
            $(this.$res[i]).data("valor",this.nivel*(i+1));
        }
    },
    verificar:function($n){
        if($n==$(this.$res[this.pos]).data("valor")){// si el numero que selecciono es correcto regresamos true  si no false
            this.pos+=1;
            this.setIncognita();
            return true;
        }
        else return false;
    },
    lenghtRes:function()
    {
        if($(this.$res[this.pos]).data("valor")>9){
            $(this.$res[this.pos]).css({"marginLeft":"1%"});
            return 2;
        }
        else if($(this.$res[this.pos]).data("valor")>99)
            return 3;
        else return 1;

    },
    clearRes:function(){
        this.$res.text("");
    },
    setIncognita:function(){
        $(this.$res[this.pos]).text("?");
    }
 }
 //objeto para controlar los numeros y respuestas


// ---------------------------------------------------------------------------
// MANIPULACION DE DOM
// ----------------------------------------------------------------------------

  /* comenzamos el juego al hacer click en el boton comenzar -----------*/
    function funcionComenzar()
    {
        $("#zona-play").show();
        $("#zona-obj").hide();
        //establecemos propiedades al objeto tabla
        tabla.$n1=$(".n1");
        tabla.$n2=$(".n2");
        tabla.$res=$(".res");
        tabla.generarTabla();
        //interval = setInterval(changeTime,1000);
    }
  /*--------------------------------------------------------------------*/

  /* funcion para cambiar el tiempo cada segundo                        */
    function changeTime()
    {
        $("#temp-count").text(cantTemp);
        cantTemp-=1;
    }
  /*-------------------------------------------------------------------*/
    $(".zona-numeros>h2").draggable({
        stop:function(){
            if(tabla.lenghtRes>1){
                //el resultado es mayor que 9
                $(".zona-respuestas>h1").removeClass("hidden");
                $(".zona-respuestas>h1").show();
                if(tabla.capturado){
                    //si se capturo el valor


                }
                else{
                    //si no se capturo el valor regresamos a su posicion original

                }
            }else{
                //el resultado es menor que 10
                if(tabla.capturado){
                    if(tabla.verificar($(this).text())){
                        $(tabla.$res[tabla.pos-1]).text($(tabla.$res[tabla.pos-1]).data("valor"));
                    }
                }
            }
            $(this).css({"left":0,"top":0});
        }
    });
    $(".zona-numeros>h2").click(function(){
        if(tabla.lenghtRes()>1){
            if(click){
                valor+=$(this).text();
                click=false;
               if(tabla.verificar(valor)){
                    $($(".res")[tabla.pos-1]).text($($(".res")[tabla.pos-1]).data("valor"));
                    if(tabla.pos==10){
                        tabla.nivel+=1;
                        tabla.pos=0;
                        tabla.generarTabla();
                    }
                }
                valor="";
            }
            else{
                click=true;
                valor = $(this).text();
            }
        }else{
            if(tabla.verificar($(this).text())){
                $($(".res")[tabla.pos-1]).text($($(".res")[tabla.pos-1]).data("valor"));
            }else{

            }
        }
    });
  /*-------------------------------------------------------------------*/
  /*Establecer el metodo a los contenedores de respuestas pera que estos capturen las opciones arrastradas por el usua*/
    $(".zona-respuestas>h1").droppable({
        drop:function(){
            tabla.capturado=true;
        }
    });

// ----------------------------------------------------------------------------
});
