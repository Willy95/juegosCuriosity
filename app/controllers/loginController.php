<?php

/**
 *
 */
class loginController extends BaseController
{

  function verPagina()
  {
    if(Request::method() == 'POST')
        {
          /*Guardamos en la variable $Form todos los valores obtenidos*/
          $Form = Input::get('data'); //datos
          /*Creamos la reglas de validacion para esos valores*/
          $Reglas = array(
            'username' => 'required',
            'password' => 'required'
          );
          $mensajes = array(
            'required' => 'Ingresar Contraseña'
          );
          /*Creamos la validación diciendo que datos
          * y como se validarán
          */
          $Validar  = Validator::make($Form, $Reglas, $mensajes);
          /* Verificamos si los datos fueron validados*/
          if($Validar->fails())
          {
              /*Retornamos los errores de validación encontrados*/
             return $Validar->messages();
          }
          else
          {
            if(Input::get('data.username') == "tester-curiosity" &&
               Input::get('data.password') == "teamcuriosity"){
                 Session::put('tester', 'curiosity');
                 return Response::json(array(0=>'success'));
            }
            else{
                return Response::json(array(0=>'error'));;
            }
          }
        }
      else{
        return View::make('vista_login');
      }
    }

    public function salir(){
        Session::flush();
        return Redirect::to('/');
    }

    public function verificarUsuario(){
      if(Input::get('data.username') != "tester-curiosity"){
        return Response::json(array(0 =>'null'));
      }
      else{
        return "true";
      }
    }

}


 ?>
