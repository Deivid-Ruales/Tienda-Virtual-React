import { Fragment } from "react";
import { Component } from "react";
import '../styles/login.css';


export class Formulariologin extends Component {


    render() {
        return (
            <Fragment>
                <center>
                    <div class="contenedor-login">

                        <div class="formulario">
                            <h2 class="titulo-formulario">Iniciar Sección</h2>
                            <form class="formatito">
                                <label for="usuario o email"></label>
                                <input class="campotex" type="text" name="usuario o email" placeholder="Usuario o Email" />
                                <br></br>
                                <br></br>
                                <label for="contraseña"></label>
                                <input class="campotex" type="text" name="Contraseña" placeholder="Contraseña" />
                            </form>
                            <div >

                                <button onclick="btn" className="btn element" >                         
                                                                  
                                    Ingresar

                                </button>

                                

                            </div>
                            <div className="pass">
                                <br></br>
                                <br></br>
                                <a href="#" class="input">¿Olvidaste tu contraseña?</a>
                                <br></br>
                                <a href="#" class="input">Registrarse</a>

                            </div>



                        </div>

                    </div>
                </center>
            </Fragment >

        );
    }

}
