@extends('juegos.vista_juego_layer')

@section('juego_css')
  {{HTML::style('/packages/css/curiosity/juegos/ahorcado.css')}}
@stop

@section('title')
  ahorcado
@stop
@section('panel_opciones')
@section('juego')

          <!-- SECCION DONDE SE DESARROLLARÁ EL JUEGO EN SI -->
          <div id="zona-play">
            <div class="row">
              <div class="col-md-8 text-left">
              </div>
              <div class="col-md-4 text-right">
                <div class="temp">
                      <i class="fa fa-heart"></i>
                      <i class="fa fa-heart"></i>
                      <i class="fa fa-heart"></i>
                      <i class="fa fa-heart"></i>
                      <i class="fa fa-heart"></i>
                      <i class="fa fa-heart"></i>
                </div>
              </div>
            </div>
            <div id="game" class="row">
              <div class='col-md-7 first-part-game'>
                <!-- all horcado here-->
                <canvas id="can">Sorry, your browser doesn't support the HTML5 element canvas.</canvas>
              </div>
              <div class="col-md-5 second-part-game">
                <!-- all operation here-->
                <div class="zona-operation">
                  <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <h1 class="first-operation">87</h1>
                    </div>
                  </div>
                  <div class="row">
                    <h1 class="col-md-4 operation">+</h1>
                    <div class="col-md-4">
                      <h1 class="second-operation">32</h1>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                    <h1 class="resp-operation"></h1>
                    </div>
                  </div>
                </div>
                <div class="zona-numeros row">
                  <div class="col-md-10 numeros">
                    <div class="row">
                        <h1 class="num">1</h1>
                        <h1 class="num">2</h1>
                        <h1 class="num">3</h1>
                        <h1 id="delete"><i class="fa fa-arrow-left"></i></h1>
                    </div>
                    <div class="row">
                        <h1 class="num">4</h1>
                        <h1 class="num">5</h1>
                        <h1 class="num">6</h1>
                        <h1 id="check"><i class="fa fa-check-circle"></i></h1>
                    </div>
                    <div class="row">
                        <h1 class="num">7</h1>
                        <h1 class="num">8</h1>
                        <h1 class="num">9</h1>
                        <h1 class="num">0</h1>
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
                      <div id="combo">
                      </div>
                    </div>
                    <div class="col-xs-4 text-right">
                      <div class="verific">
                      </div>
                    </div>
                     <img src="{{asset('packages/images/games/good.png')}}" class="img-responsive img-start"/>
                     <img src="{{asset('packages/images/games/sad.png')}}" class="img-responsive img-incorrect"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
@stop

@section('juego_js')
  {{HTML::script('packages/js/curiosity/juegos/ahorcado.js')}}
@stop
