@extends('juegos.vista_juego_layer')

@section('juego_css')
  {{HTML::style('/packages/css/curiosity/juegos/dibujar_numeros.css')}}
@stop

@section('title')
  Menor-Mayor
@stop
@section('panel_opciones')
<canvas id="can" width="500" height="300" ></canvas>
             <div id="clr">
                 <div style="background-color:black;"></div>
                 <div style="background-color:red;"></div>
                 <div style="background-color:green;"></div>
                 <div style="background-color:orange;"></div>
                 <div style="background-color:#FFFF00;"></div>
                 <div style="background-color:#F43059;"></div>
                 <div style="background-color:#ff00ff;"></div>
                 <div style="background-color:#9ecc3b;"></div>
                 <div style="background-color:#fbd;"></div>
                 <div style="background-color:#fff460;"></div>
                 <div style="background-color:#F43059;"></div>
                 <div style="background-color:#82B82C;"></div>
                 <div style="background-color:#0099FF;"></div>
                 <div style="background-color:#ff00ff;"></div>
                 <div style="background-color:rgb(128,0,255);"></div>
                 <div style="background-color:rgb(255,128,0);"></div>
                 <div style="background-color:rgb(153,254,0);"></div>
                 <div style="background-color:rgb(18,0,255);"></div>
                 <div style="background-color:rgb(255,28,0);"></div>
                 <div style="background-color:rgb(13,54,0);"></div>
             </div>
             <a id="limpiar" href="#">Limpiar</a>
             <a id="borrador" href="#">Borrador</a>
@stop
@section('juego')

          <!-- SECCION DONDE SE DESARROLLARÁ EL JUEGO EN SI -->
          <div id="zona-play">

            <div class="row">
              <div class="col-md-10 text-left">
                <h4><b id="act-reglas">Selecciona los numeros de menor a mayor </b></h4>
              </div>
              <div class="col-md-2 text-right">
                <div class="temp">
                  <h5><b>Tiempo Restante</b></h5>
                  <h3 id="temp-count"></h3>
                </div>
              </div>
            </div>
            <div id="game">

            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="zona-puntaje">
                  <div class="row">
                    <div class="col-xs-6">
                      <h3>
                        <span class="fa fa-trophy"></span>
                        <b id="countPuntaje"></b>
                        <b>Puntos</b>
                      </h3>
                    </div>
                    <div class="col-xs-2">
                    	<div id="combo"></div>
                    </div>
                    <div class="col-xs-4 text-right">
                      <div class="verific"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
@stop

@section('juego_js')
  {{HTML::script('packages/js/curiosity/juegos/dibujar_numeros.js')}}
@stop
