@extends('juegos.vista_juego_layer')

@section('juego_css')
  {{HTML::style('/packages/css/curiosity/juegos/memorama.css')}}
@stop

@section('title')
  Memorama
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
                </div>
              </div>
            </div>
            <div id="game">
   			 <div class="row">
   			     <div class="col-md-12">
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+1</h1>
   			             </div>
   			         </div>
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+2</h1>
   			             </div>
   			         </div>
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+3</h1>
   			             </div>
   			         </div>
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+4</h1>
   			             </div>
   			         </div>
   			     </div>
   			 </div>
   			 <div class="row">
   			     <div class="col-md-12">
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+1</h1>
   			             </div>
   			         </div>
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+2</h1>
   			             </div>
   			         </div>
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+3</h1>
   			             </div>
   			         </div>
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+4</h1>
   			             </div>
   			         </div>
   			     </div>
   			 </div>
   			 <div class="row">
   			     <div class="col-md-12">
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+1</h1>
   			             </div>
   			         </div>
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+2</h1>
   			             </div>
   			         </div>
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+3</h1>
   			             </div>
   			         </div>
   			         <div class="card-cont">
   			             <div class="card">
   			                 <div class="reverso"><img src="{{asset('/packages/images/games/memorama-cart.gif')}}" alt="" class="img-responsive"></div>
   			             </div>
   			             <div class="inverso">
   			                 <h1>1+4</h1>
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
  {{HTML::script('packages/js/curiosity/juegos/memorama.js')}}
@stop
