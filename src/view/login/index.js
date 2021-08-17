import React, {useState} from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    function autenticar(){
        
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            alert('CONECTADO');
        })
        .catch(erro => {
            alert(erro);
        })
    }
    
    return(
        <div>
            
            <NavbarTop />
            <NavbarMenu />

            <div className="container mt-3">
                <form className="" action="" method="POST" id="form_cadastro">
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <div className="text-center mt-3 p-1">
                                <p>Bem vindo(a) de volta</p>
                            </div>
                            <div className="mx-5">
                                <label for="email" className="form-label">E-mail:</label><br/>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" className="campo mb-3" id="email"/>
                            </div>
                            <div className="mx-5">
                                <label for="senha" className="form-label">Senha:</label><br/>
                                <input onChange={(e) => setSenha(e.target.value)} type="password" name="senha" className="campo mb-3" id="senha"/>
                            </div>
                            <div className="mx-5 mt-5 text-center">
                                <input className="btn btn-warning" value="Login" type="button" id="login" onClick={autenticar}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
            
        </div>
    )
}

export default Login;