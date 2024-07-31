import React, { useState } from "react";

export default function Login() {

    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();

    function logarUsuarios(e) {
        e.preventDefault();

        if (!usuario || !senha) {
            alert('Campos em Branco');
            return;
        }

        if (usuario === 'cliente@gmail.com' && senha === '666') {
            alert('Login cliente efetuado com sucesso');
        } else if (usuario === 'empresa@gmail.com' && senha === '666') {
            alert('Login empresa efetuado com sucesso');
        } else {
            alert('Usuario/Senha incorretos');
            return;
        };
    };

    return (
        <div className="login">
            <div className="hsection">
                <h2>Login</h2>
            </div>
            <div className="container">
                <form onSubmit={logarUsuarios}>
                    <input type="email" autoFocus placeholder="E-mail" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <input type="password" placeholder="Password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <div className="cad-res">
                        <a href="/cadastro-cliente">Cadastre-se</a>
                        <a href='/'>Esqueci minha senha</a>
                    </div>
                    <button className="btn" type="submit">Fazer Login</button>
                </form>
            </div>
        </div>
    );
};