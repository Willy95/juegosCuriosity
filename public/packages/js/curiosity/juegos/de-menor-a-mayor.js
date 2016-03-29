$(document).on("ready",function() {

  var objetivo = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugiat soluta, saepe asperiores odio magni eos. Autem repudiandae earum consequatur dolorum molestias odio, laborum veniam voluptate nisi. Sint animi dolore, laborum nisi reiciendis nobis voluptas.";

  $curiosity.menu.setPaginaId("#li-menor-mayor");
  $juego.setTitulo("Menor - Mayor");
  $juego.setObjetivo(objetivo);
  $juego.setNivelUsuarioIMG("/packages/images/cups/medalla1.png");
  $juego.setBackgroundColor("rgb(25, 132, 179)");
  $juego.setBackgroundImg("/packages/images/fondos/fondo.jpg");
  $juego.boton.archivoPDF.setDireccion('packages/docs/pruebaPDF.pdf');
  $juego.boton.archivoPDF.setNombreDescarga('Guia Ordena Numeros');
  $juego.boton.comenzar.setFuncion(funcionComenzar);

// ---------------------------------------------------------------------------------------------
// DECLARAMOS LAS VARIABLES DE USO GLOBAL
// ---------------------------------------------------------------------------------------------
  // Guardamos el puntaje maximo del usuario en una variable para uso global
  var puntosMaximos = 0;
  //variable arreglo para almacenar las series
  var numeros = [];
  // Establece la cantidad de segundos de inicio
  var $tiempo = 60;
  // Declaramos la variable de forma globar a utilizar en el setInterval(intervalo de tiempo)
  var $interval;
  // Declaramos la variable para uso de puntaje
  var puntajeNow = 0;
  // Variable para almacenar la cantidad de aciertos
  var aciertos = 0;
  // Variable para guardar la cantidad de aciertos
  var continuo = 0;
  // Valor que tendran los puntos al iniciar
  var valorPts = 100;
  //variable gloabla para almacenar los colores de fondo para los contenedores de los numeros
  var colores = ["#00f41c","#f80000","#08e1f4","#9900ff","#fa8700","#eee304","#ff00af","#dd1579","#00ff81"];
  // variable glabal para que nos permitira determinar cuantos opciones se mostrarán en el area de juego
  var opciones = 3;// se mostraran 3 opciones al inicio
  //funcion para determinar el nivel del juego
  var nivel =0;
  //la variable de wily
  var maxPtsTemp;
// ---------------------------------------------------------------------------------------------
// PETICIONES A BASE DE DATOS
// ---------------------------------------------------------------------------------------------
  $.ajax({
    url: '/puntajeSubtema',
    type: 'POST',
    data: {id: '1'}
  })
  .done(function(response) {
    puntosMaximos = response;
    // Se Coloca la cantidad máxima de puntaje que el usuario tiene en la pantalla principal
    $juego.setPuntosMaxInicio(puntosMaximos);
  })
  .fail(function(error) {
    console.log(error);
  });
// ---------------------------------------------------------------------------------------------
//	    -----------------Gestion del dom ---------------------------

// ----------------------------------------------------------------------------------------------
// 				Ocultar zona de juego al principio
$("#zona-play").hide();
//		------------------------------------------------------------------------------------------
//--------------Comenzar zona de juego y ocultar zona de objetivo--------------
 function funcionComenzar(){
	 $("#zona-play").toggle();
	 $("#zona-obj").toggle();
	 $("#countPuntaje").text(puntajeNow);
	 createOptions(opciones);//crear opciones de juego de inicio
	 setSeries();
	 setTimeout(function(){//iniciar el conteo del tiempo despues de tres segundos
	 $interval = setInterval(cambiarSeg,1000);},3000);
 }
//funcion auxiliar para contruir las opciones
    function CicleOption(nivel,col)
	{
		$("#game").children().first().append($("<div/>",{class:"col-xs-"+col}));
		for(var i=0; i<nivel;i++)
		{
			$option = $("<div/>");
			$valorResp = $("<div/>",{class:"col-xs-2 valor-resp"});
			$valorResp.append($option);
			$("#game").children().first().append($valorResp);
		}
		$("#game").children().first().append($("<div>",{class:"col-xs-"+col}));
		if(opciones>5)// si hay mas de 5 opciones se creara un nuvo renglon para las nuevas opciones
		{
			$row = $("<div/>",{class:"row"});
			$("#game").prepend($row);//crear fila para las primeras opciones
		}
	}
//------------------------------------------------------------------------------------------------
// funcion para crear el numero de opciones segun sea el nivel------------------------------------//
	function createOptions(nivel)
	{
		$("#game").empty();//vaciaar el contenedor para generar las opciones nuevamente con el nuevo nivel establecido
		$row = $("<div/>",{class:"row"});
		$("#game").prepend($row);//crear fila para las primeras opciones
		//------------------------------establecer opciones segun el nivel alcanzado----------//
		if(nivel==3)
			CicleOption(nivel,3);

		else if(nivel==4)
			CicleOption(nivel,2);
		else if(nivel==5)
			CicleOption(nivel,1);
		else if(nivel==6)
		{
			CicleOption(nivel-3,3);
			CicleOption(nivel-3,3);
		}
		else if(nivel==7)
		{
			CicleOption(nivel-4,3);
			CicleOption(nivel-3,2);
		}
		else if(nivel==8)
		{
			CicleOption(nivel-4,2);
			CicleOption(nivel-4,2);
		}
		else if(nivel==9)
		{
			CicleOption(nivel-5,2);
			CicleOption(nivel-4,1);
		}
		else if(nivel==10)
		{
			CicleOption(nivel-5,1);
			CicleOption(nivel-5,1);
		}
		//----------------------------------fin de niveles---------------------------------------//

	}
//------------------------------------------------------------------------------------------------//
//------------------------------funcion para finalizar el juego----------------------------------//
 function finishGame()
 {
		clearInterval($interval);
		aciertos=0;
		$tiempo=60;//reiniciar tiempo
		continuo=0;//reiniciar continuos
		nivel=0;
		opciones=3;//reiniciar número de opciones a 3
		$("#temp-count").text($tiempo + "seg");
	    // Guardamos el puntaje mayor actual en variable temporal para no perder la catidad de puntos maximos en caso de que este puntaje sea superado
        maxPtsTemp = puntajeNow;
		//reiniciar puntuaje

        // Verificamos si el puntaje obtenido es mayor que el puntaje mayor actual
        if(maxPtsTemp > puntosMaximos){
        // si el puntaje realizado es mayor que el [puntaje maximo], el puntaje maximo pasa a ser el puntaje realizado
        puntosMaximos = maxPtsTemp;
        // Cambiamos el puntaje maximo en pantalla
        $("#num-max-pts").html(puntosMaximos + " pts");
        }
	 	$("#zona-play").toggle();//desaparecer zona juego
		$("#zona-obj").toggle();//aparecer zona del objetivo
 }
//----------------------------------------------------------------------------------------------//
//funcion para cambiar  de tiempo cada segundo para establecerlo en la variable global y en el dom---------------------------------------
function cambiarSeg()
{
	$tiempo -= 1;
	$("#temp-count").text($tiempo + "seg");
	if($tiempo===0)
	{

		finishGame();
    // // mostramos alerta en pantalla
    $juego.modal.puntuacion.mostrar(puntosMaximos, 0, puntajeNow);
	  puntajeNow=0;
	}

}
//------------------------------------------------------------------------------------------------
//--------------------------funcion para crear un numero aleatorio menor o igual al establecido de parametro----
function numeroAleatorio(num)
{
	var numero = Math.round((Math.random()*num));
	return numero;
}
//--------------------------------------------------------------------------------------------------------------
//--------------------------------función para establecer la serio de numeros aleatorios------------------------
	function setSeries(){
		$.each($(".valor-resp"),function(i,v){
			$(this).children().text(numeroAleatorio(98)+1);//establecer el valor en el texto del elemento
			numeros[i]=parseInt($(this).children().text());
			$(this).css("animation","");
			$(this).css("animation","").css("amimation","");//eliminar el efecto de entrada de las opciones
			$(this).children().css("background",colores[numeroAleatorio(colores.length)]);//generar un color aleatoriamente
		});

	}
//--------------------------------------------------------------------------------------------------------------
//--------------------------funcion paraq verificar que el numero elegido por el usuario sea el más alto--------
	function isMax(num)
	{
		var pos=0;//variable auxiliar para determinar la posicion en la que se encuantra el numero mayor
		var menor =numeros[pos];//traerme el valor del primer elemento
		for(var i=0;i<numeros.length;i++){//verificar cual de los valores que esta en la serie es el mayor
			if(numeros[i] < menor){
				menor=numeros[i];
				pos=i;
			}
		}
		if(num == menor){// si el elemento es el mayor entonces retornamos afirmativo
			numeros.splice(pos,1);
			return true;
		}
		else return false;
	}
//--------------------------------------------------------------------------------------------------------------
//--------------------------Evento click del un numero dentro del juego-----------------------------------------
	$("#game").on("click",".valor-resp",function(e){
		if(isMax(parseInt($(this).text()))){//en caso de que presiono el numero mayor
			$(this).css({"animation":"1s goodBy ease 1 forwards"});//desapareser con una pequña animacióm
			aciertos +=1;
			setCorrecto();
			determinarCombo();
		}else setError();

		if(aciertos==opciones)//si selecciona los   numeros correctamente se generan una nueva serie de numeros
		{
			nivel += 1;//variable de control al llegar a dos sube de nivel
			if(nivel==2)
			{
				opciones +=1;
				nivel=0;//reiniciar variable de control
				if(opciones==11)
				{
					finishGame();
					swal("Felicitaciones","Haz logrado vencer los 11 niveles del juego y finalizarlo");
				}
				else
					createOptions(opciones);//subir de nivel metodo para crear más opciones
			}
			setTimeout(function(){// los números se generan des pues de 7 milesimas de segundo
			setSeries();
			aciertos = 0;//los aciertos se reiniciar para comenzar con la nuva serie de numeros
			},700);
		}
	});


//------------------------------------Funcion para crear conbo con efecto------------------------------------//
	function setCombo(combo)//parametro para establecer si el combo sera de 10 , 15 o 20
	{
		$cbo = $("<div/>",{class:"combo"}).text("+"+combo+"");
		$("#combo").append($cbo);
		$cbo.css({"animation":"2s combo 1 forwards",});
		setTimeout(function(){$("#combo").empty();},2000);//eliminar el elemento dom que genera el combo cuando este termine
	}
//-----------------------------------------------------------------------------------------------------------//

// -----------------------------------------------------
// FUNCION A REALIZAR EN CADA OPCION SELECCIONADA ERRONEAMENRE
// -----------------------------------------------------
  function setError(){
    // regresamos la cantidad de aciertos continuos a cero
    continuo = 0;
    // Regresamos el valor de los puntos por acirto a 100
    valorPts = 100;
    // añadimos la clase creada en css para poner una sombra roja fuera del contenedor del juego
    $(".zona-juego").addClass('error-shadow');
    // colocamos una equis en la esquina inferior derecha dentro del div con la clase verific indicando que el usuario se ha equivocado
    $(".verific").html("<i class='fa fa-close fa-4x'></i>").css('color', 'rgb(215, 36, 36)');
    // establecemos que despues de 600 milisegundos la clase de error se eliminara del contenedor del juego
    setTimeout(function(){
      // removemos la clase de error-shadow
      $(".zona-juego").removeClass('error-shadow');
      // eliminamos el contenido del div con la clase verific el cual contenia una equis
      $(".verific").empty();
      // Establecemos en cuantos milisegundos se realizará la funcion
    }, 600);
  }

// ---------------------------------------------------------------------------------------------
// FUNCION A REALIZAR EN CADA OPCION SELECCIONADA CORRECTAMENTE
// ---------------------------------------------------------------------------------------------
  function setCorrecto(){
    // sumamos el puntaje
    $("#countPuntaje").text(puntajeNow += valorPts);
    // Sumamos +1 a los aciertos continuos que llevamos
    continuo += 1;
    // colocamos una palomita en la esquina inferior derecha dentro del div con la clase verific indicando que el usuario ha seleccionado la opcion correcta
    $(".verific").html("<i class='fa fa-check fa-4x'></i>").css('color', 'rgb(255, 255, 255)');
    // establecemos que despues de 600 milisegundos la clase de error se eliminara del contenedor del juego
    setTimeout(function(){
      // eliminamos el contenido del div con la clase verific el cual contenia una palomita
    $(".verific").empty();
    // Establecemos en cuantos milisegundos se realizará la funcion
    }, 600);
  }

// ---------------------------------------------------------------------------------------------
// FUNCION QUE DETERMINA SI LA OPCION SELECCIONADA ES CONSECUTIVA O BIEN SE CORTA LA
// CONTINUIDAD... SI SE LLEGA A UNA CANTIDAD ESTABLECIDA DE OPCIONES CORRECTAS CONTINUAS
// SE APLICA UN VALOR AGREGADO AL VALOR DEL PUNTAJE POR RESPUESTA CORRECTA
// ---------------------------------------------------------------------------------------------
function determinarCombo(){
  // Verificamos que la cantidad de aciertos continuos sea diferente que cero
  // esto nos indica que efectivamente se tienen aciertos seguidos
  if(continuo !== 0){
    // si la cantidad de aciertos continuos es igual a 5 se asigna un nuevo valor a los puntos por acierto
    if(continuo == 5){
      valorPts = 150;
	  setCombo(150);
    }
    // si la cantidad de aciertos continuos es igual a 10 se asigna un nuevo valor a los puntos por acierto
    if(continuo == 10){
      valorPts = 250;
	  setCombo(250);
    }
    // si la cantidad de aciertos continuos es igual a 15 se asigna un nuevo valor a los puntos por acierto
    if(continuo == 15){
      valorPts = 500;
	  setCombo(500);
    }
	if(continuo == 20){
		valorPts =1000;
		setCombo(1000);
		continuo=0;//Reiniciar la variable continuos para poder generar más combos
	}
  }
}
// 	------------------------Fin de gestion del dom--------------------------


});//find del evento ready
