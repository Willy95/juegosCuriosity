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
          <audio id="sound-correct" src="{{asset('/packages/sounds/correct.mp3')}}"></audio>
          <audio id="sound-correct1" src="{{asset('/packages/sounds/correct1.mp3')}}"></audio>
          <audio id="sound-error" src="{{asset('/packages/sounds/error.mp3')}}"></audio>
          <div id="zona-play">
            <div class="modal-instrucciones-game">
            <div class="container-instrucciones">
              <h3 class="title-instrucciones">Todas las instrucciones del juego aquí</h3>
              <p class="instrucciones">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor reiciendis
                eius inventore placeat facere minima fuga aliquam, cumque numquam aspernatur
                vel voluptatibus harum natus quo odio est rem repellat rerum nobis libero dolorem
                totam neque hic quisquam accusamus. Facilis unde libero omnis eligendi tempore
                repudiandae voluptate eaque ullam explicabo ducimus.
                <br>
                <br>1°repudiandae voluptate eaque ullam explicabo ducimus.
                <br>2°repudiandae voluptate eaque ullam explicabo ducimus.
                <br>3°repudiandae voluptate eaque ullam explicabo ducimus.</p>
                <div class="container-select-table">
                  <h2>Selecciona el nivel<h3>
                  <ul class="tables-levels">
                    <li class="active"> <i class="fa fa-star"></i> Nivel 1</li>
                    <li class=""><i class="fa fa-star"></i> Nivel 2 </li>
                    <li class=""><i class="fa fa-star"></i> Nivel 3 </li>
                    <li class=""><i class="fa fa-star"></i> Nivel 4 </li>
                    <li class=""><i class="fa fa-star"></i> Nivel 5 </li>
                    <li class=""><i class="fa fa-star"></i> Nivel 6 </li>
                    <li class=""><i class="fa fa-star"></i> Nivel 7 </li>
                    <li class=""><i class="fa fa-star"></i> Nivel 8 </li>
                    <li class=""><i class="fa fa-star"></i> Nivel 9 </li>
                  </ul>
                  <ul class="dificult-list">
                    <li class="active"><i class="fa fa-check-square-o"></i> Practica</li>
                    <li><i class="fa"></i> Actividad</li>
                  <ul>
                </div>
            </div>
            <div class="btn-instrucciones">
              <div class="first-button">
                <button class="btn btn-warning hidden-xs"><i class="fa fa-paper-plane-o"></i> Omitir</button>
                <button class="btn btn-warning hidden-xs btn-advice-next"><i class="fa fa-share"></i> siguiente</button>
                <button class="btn btn-xs btn-warning visible-xs"><i class="fa fa-paper-plane-o"></i></button>
                <button class="btn btn-xs btn-warning visible-xs btn-advice-next"><i class="fa fa-share"></i></button>
              </div>
              <div class="second-button">
                <button class="btn btn-xs btn-warning btn-comenzar visible-xs"><i class="fa fa-play"></i></button>
                 <button class="btn btn-warning btn-comenzar hidden-xs">Comenzar juego</button>
                <button class="btn btn-xs btn-warning btn-comenzar visible-xs"><i class="fa fa-play"></i></button>
              </div>
            </div>
           </div>
           <div  class="bur">
            <div class="select-tables">

            </div>
            <i class="first"></i>
            <i class="medio"></i>
            <i class="last"></i>
            <img src="{{asset('/packages/images/games/avatar.gif')}}"/>
           </div>
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
@stop
