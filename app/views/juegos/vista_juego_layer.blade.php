@extends('admin_base')

@section('mi_css')
  {{ HTML::style('/packages/css/curiosity/juegos/juego_layer.css') }}
  @yield('juego_css')
@stop

@section('titulo_contenido')
  <label id="juego-titulo"></label>
@stop

@section('panel_opcion')
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="modal fade" id="modalPrueba" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header" id="modal-header-juego">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <div class="row">
                  <div class="col-md-4 col-md-offset-4">
                    <img src="/packages/images/cups/win1.png" alt="" class="img-responsive">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-center" id="modal-puntos">
                    <center><h1><b id="modal-puntos-head"></b></h1></center>
                  </div>
                </div>
              </div>
              <div class="modal-body" id="modal-body-juego">
                <div class="row">
                  <div class="col-md-6">
                    <h4 id="modal-puntos-max"></h4>
                    <h4 id="modal-eficiencia-max"></h4>
                  </div>
                  <div class="col-md-6">
                    <h4 id="modal-puntos-now"></h4>
                    <h4 id="modal-eficiencia-now"></h4>
                  </div>
                </div>
              </div>
              <div class="modal-footer" id="modal-footer-juego">
                <div class="row">
                  <div class="col-md-12">
                    <center>
                      <div class="actividadBotones">
                        <button type="button" class="btn btn-default btnVideo">
                          <span class="fa fa-youtube-play"></span>&nbsp;
                          <b>Ver explicación en video</b>
                        </button>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>

  <div class="modal fade" id="modalVideo" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="">Video de Estudio</h4>
        </div>
        <div class="modal-body">
          <video src="" controls id="videoApoyo" class="img-responsive" preload></video>
        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
      <div class="row">
          <div class="col-xs-12">
              <div class="zona-juego">
                <div id="zona-obj">
                  <div class='row'>
                    <div class='col-md-5 text-center' id='max-pts'>
                      <center>
                        <img src="" class="img-responsive" width="60%" id="imgNivel"/>
                      </center>
                      <div class="row">
                        <div class="col-md-6 cal-titulo">
                          <h3>Máxima Puntuación</h3>
                          <h1><b id="num-max-pts"></b></h1>
                        </div>
                        <div class="col-md-6 cal-titulo">
                          <h3>Eficiencia de Juego</h3>
                          <h1><b id="num-max-efic"></b></h1>
                        </div>
                      </div>
                    </div>
                    <div class='col-md-7' id='objetivo'>
                      <h2>Objetivo de la actividad</h2>
                      <p id="juego-objetivo"></p>
                      <div class="text-right boton-comezar">
                        <button type="button" class="btn btn-info btn-lg" id="btn-comenzar">
                          Comenzar Actividad
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                @yield('juego')
            </div>
        </div>
    </div>

  <!-- SECCION FINAL DONDE SE COLOCA LA PUNTUACION POR ESTRELLAS Y LOS BOTONES DE DESCARGA Y VIDEO -->
  <div class="row">
    <div class="col-md-4">
      <h3><b>Califica la Actividad</b></h3>
      <span class="fa fa-star-o fa-2x"></span>
      <span class="fa fa-star-o fa-2x"></span>
      <span class="fa fa-star-o fa-2x"></span>
      <span class="fa fa-star-o fa-2x"></span>
      <span class="fa fa-star-o fa-2x"></span>
    </div>
    <div class="col-md-8 text-right">
      <div class="actividadBotones">
        <a target="_blank" class="btn btn-default btnDownloadPDF">
          <span class="fa fa-download"></span>&nbsp;
          <b>Guía de estudio PDF</b>
        </a>
        <button type="button" class="btn btn-default btnVideo">
          <span class="fa fa-youtube-play"></span>&nbsp;
          <b>Ver explicación en video</b>
        </button>
      </div>
    </div>
  </div>
</div>
@stop

@section('mi_js')
  {{ HTML::script('/packages/js/curiosity/juegos/juegos_layer.js') }}
  @yield('juego_js')
@stop
