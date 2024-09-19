import React from 'react';
import { Link } from 'react-router-dom';
import './LoginScreen.css';

function LoginScreen() {
    return (
        <div className='div-login'>
            <div className='div-repository-link'>
                <button>&lt; Confira o repositório &gt;</button>
            </div>

            <div className='div-register-button'>
                <h3>Não possui conta?</h3>
                <button><Link to="/register"  className='button-repository-link'>Registrar</Link></button>
            </div>
            <h1>Simple Chat</h1>

            <form className='form-login' onSubmit=''>
                <div className='field'>
                    <label htmlFor="email">EMAIL</label>
                    <input 
                        type="email"
                        placeholder='Insira seu email'
                        name='email'
                        className='form-field'
                        required
                    />
                </div>
                <div className='field'>
                    <label htmlFor="email">SENHA</label>
                    <input 
                        type="password"
                        placeholder='Insira sua senha'
                        name='password'
                        className='form-field'
                        required
                    />
                </div>

                <button type='submit' className='button-login'>Log in</button>

            </form>
        </div>
    );
}

export default LoginScreen;
