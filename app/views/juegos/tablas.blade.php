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
          <audio src="" id="sound"></audio>
          <div id="zona-play">
            <div class="row">
              <div class="col-md-10">
                <h4><b id="act-reglas">Selecciona el numero correcto</b></h4>
              </div>
              <div class="col-md-2 text-right">
                <div class="temp">
                  <h5><b>Tiempo Restante</b></h5>
                  <h3 id="temp-count"> 0s</h3>
                </div>
              </div>
            </div>
            <div id="game" class="row">
                <div class="tables col-md-12">
                   <div class="row">
                     <div class="col-md-6">
                        <table class="table">
                           <tbody>
                                <tr class="tb activ text-justify">
                                    <td><i class="fa check fa-square-o fa-2x"></i></td>
                                    <td><p class="n1"></p></td><td><i class="fa fa-remove"></i></td><td><p class="n2"></p></td><td><p class="equal">=</p></td><td> <p class="res">&#63;</p></td>
                                 </tr>
                                <tr class="tb">
                                    <td><i class="fa check fa-square-o fa-2x"></i></td>
                                    <td><p class="n1"></p></td>
                                    <td><i class="fa fa-remove"></i></td>
                                    <td><p class="n2"></p></td>
                                    <td><p class="equal">=</p></td>
                                    <td><p class="res"></p></td>
                                </tr>
                                <tr class="tb">
                                    <td><i class="fa check fa-square-o fa-2x"></i></td>
                                    <td><p class="n1"></p></td> <td><i class="fa fa-remove"></i></td><td> <p class="n2"></p></td><td> <p class="equal">=</p></td><td> <p class="res"></p></td>
                               </tr>
                                <tr class="tb">
                                    <td><i class="fa check fa-square-o"></i></td>
                                    <td><p class="n1"></p></td> <td><i class="fa fa-remove"></i></td><td> <p class="n2"></p></td><td> <p class="equal">=</p></td><td> <p class="res"></p></td>
                               </tr>
                                <tr class="tb">
                                    <td><i class="fa check fa-square-o"></i></td>
                                    <td><p class="n1"></p></td> <td><i class="fa fa-remove"></i></td><td> <p class="n2"></p></td><td> <p class="equal">=</p></td><td> <p class="res"></p></td>
                               </tr>
                                <tr class="tb">
                                    <td><i class="fa check fa-square-o"></i></td>
                                    <td><p class="n1"></p></td> <td><i class="fa fa-remove"></i></td><td> <p class="n2"></p></td><td> <p class="equal">=</p></td><td> <p class="res"></p></td>
                               </tr>
                                <tr class="tb">
                                    <td><i class="fa check fa-square-o"></i></td>
                                    <td><p class="n1"></p></td> <td><i class="fa fa-remove"></i></td><td> <p class="n2"></p></td><td> <p class="equal">=</p></td><td> <p class="res"></p></td>
                               </tr>
                                <tr class="tb">
                                    <td><i class="fa check fa-square-o"></i></td>
                                    <td><p class="n1"></p></td> <td><i class="fa fa-remove"></i></td><td> <p class="n2"></p></td><td> <p class="equal">=</p></td><td> <p class="res"></p></td>
                               </tr>
                                <tr class="tb">
                                    <td><i class="fa check fa-square-o"></i></td>
                                    <td><p class="n1"></p></td> <td><i class="fa fa-remove"></i></td><td> <p class="n2"></p></td><td> <p class="equal">=</p></td><td> <p class="res"></p></td>
                               </tr>
                                <tr class="tb">
                                    <td><i class="fa check fa-square-o"></i></td>
                                    <td><p class="n1"></p></td> <td><i class="fa fa-remove"></i></td><td> <p class="n2"></p></td> <td><p class="equal">=</p></td><td> <p class="res"></p></td>
                               </tr>
                            </tbody>
                        </table>
                     </div>
                     <div class="col-md-6 tb-respuestas">
                         <div class="row zona-numeros">
                            <h2>0</h2><h2>1</h2><h2>2</h2><h2>3</h2><h2>4</h2>
                            <br>
                            <h2>5</h2><h2>6</h2><h2>7</h2><h2>8</h2><h2>9</h2>
                         </div>
                         <div class="row zona-respuestas">
                             <div class="advice text-center col-md-12"><p>Arrastra la respuesta aquí</p> <i class="fa fa-hand-o-down"></i></div>
                             <h1 class="n-res1 col-md-3 center-cont"></h1>
                             <h1 class="n-res2 col-md-3 hidden"></h1>
                         </div>
                     </div>
                   </div>
                </div>
            </div>
            <div class="row stars">
                <div class="niveles col-md-4">
                    <i class="fa fa-star fa-2x"></i>
                    <i class="fa fa-star fa-2x"></i>
                    <i class="fa fa-star fa-2x"></i>
                    <i class="fa fa-star fa-2x"></i>
                    <i class="fa fa-star fa-2x"></i>
                    <i class="fa fa-star fa-2x"></i>
                    <i class="fa fa-star fa-2x"></i>
                    <i class="fa fa-star fa-2x"></i>
                    <i class="fa fa-star fa-2x"></i>
                </div>
            </div>
            <img src="{{asset('packages/images/games/start.png')}}" class="img-responsive img-start"/>
            <img src="{{asset('packages/images/games/incorrecto.png')}}" class="img-responsive img-incorrect"/>
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
