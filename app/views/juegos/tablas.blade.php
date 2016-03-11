@extends('juegos.vista_juego_layer')

@section('juego_css')
  {{HTML::style('/packages/css/curiosity/juegos/tablas.css')}}
  {{HTML::style('/packages/jquery-ui-1.11.4.custom/jquery-ui.min.css')}}
@stop

@section('title')
  tablas
@stop

@section('juego')

          <!-- SECCION DONDE SE DESARROLLARÁ EL JUEGO EN SI -->
          <div id="zona-play">
            <div class="row">
              <div class="col-md-10">
                <h4><b id="act-reglas">Selecciona el numeto correcto</b></h4>
              </div>
              <div class="col-md-2 text-right">
                <div class="temp">
                  <h5><b>Tiempo Restante</b></h5>
                  <h3 id="temp-count"></h3>
                </div>
              </div>
            </div>
            <div id="game" class="row">
                <div class="tables col-md-12">
                   <div class="row">
                     <div class="col-md-6">
                        <div class="tb1 active text-justify">
                            <i class="fa fa-check fa-2x"></i>
                            <p class="n1"></p> <i class="fa fa-remove fa-2x"></i> <p class="n2"></p> <p class="equal">=</p> <p class="res">&#63;</p>
                        </div>
                        <div class="tb2">
                            <i class="fa fa-check fa-2x"></i>
                            <p class="n1"></p> <i class="fa fa-remove fa-2x"></i> <p class="n2"></p> <p class="equal">=</p> <p class="res"></p>
                        </div>
                        <div class="tb3">
                            <i class="fa fa-check fa-2x"></i>
                            <p class="n1"></p> <i class="fa fa-remove fa-2x"></i> <p class="n2"></p> <p class="equal">=</p> <p class="res"></p>
                        </div>
                        <div class="tb4">
                            <i class="fa fa-check fa-2x"></i>
                            <p class="n1"></p> <i class="fa fa-remove fa-2x"></i> <p class="n2"></p> <p class="equal">=</p> <p class="res"></p>
                        </div>
                        <div class="tb5">
                            <i class="fa fa-check fa-2x"></i>
                            <p class="n1"></p> <i class="fa fa-remove fa-2x"></i> <p class="n2"></p> <p class="equal">=</p> <p class="res"></p>
                        </div>
                        <div class="tb6">
                            <i class="fa fa-check fa-2x"></i>
                            <p class="n1"></p> <i class="fa fa-remove fa-2x"></i> <p class="n2"></p> <p class="equal">=</p> <p class="res"></p>
                        </div>
                        <div class="tb7">
                            <i class="fa fa-check fa-2x"></i>
                            <p class="n1"></p> <i class="fa fa-remove fa-2x"></i> <p class="n2"></p> <p class="equal">=</p> <p class="res"></p>
                        </div>
                        <div class="tb8">
                            <i class="fa fa-check fa-2x"></i>
                            <p class="n1"></p> <i class="fa fa-remove fa-2x"></i> <p class="n2"></p> <p class="equal">=</p> <p class="res"></p>
                        </div>
                        <div class="tb9">
                            <i class="fa fa-check fa-2x"></i>
                            <p class="n1"></p> <i class="fa fa-remove fa-2x"></i> <p class="n2"></p> <p class="equal">=</p> <p class="res"></p>
                        </div>
                        <div class="tb10">
                            <i class="fa fa-check fa-2x"></i>
                            <p class="n1"></p> <i class="fa fa-remove fa-2x"></i> <p class="n2" style="margin-left:1%!important"></p> <p class="equal">=</p> <p class="res" style=""></p>
                        </div>
                     </div>
                     <div class="col-md-6 tb-respuestas">
                         <div class="row zona-numeros">
                            <h2>0</h2><h2>1</h2><h2>2</h2><h2>3</h2><h2>4</h2>
                            <br>
                            <h2>5</h2><h2>6</h2><h2>7</h2><h2>8</h2><h2>9</h2>
                         </div>
                         <div class="row zona-respuestas">
                             <h1 class="n-res1"></h1>
                             <h1 class="n-res2 hidden"></h1>
                         </div>
                     </div>
                   </div>
                </div>
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
  {{HTML::script('/packages/js/curiosity/juegos/tablas.js')}}
  {{HTML::script('/packages/jquery-ui-1.11.4.custom/jquery-ui.min.js')}}
@stop
