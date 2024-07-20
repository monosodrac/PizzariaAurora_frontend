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

        if (usuario === 'empresa@gmail.com' && senha === '666') {
            alert('Login Efetuado com Sucesso');
        } else {
            alert('Usuario/Senha incorretos');
            return;
        };
    };

    return (
        <div className="login">
            <div class="hsection">
                <h2>Login</h2>
            </div>
            <div class="container">
                <form onSubmit={logarUsuarios}>
                    <input type="email" autoFocus placeholder="E-mail" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <input type="password" placeholder="Password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <div class="cad-res">
                        <a href="/cadastro-cliente">Cadastre-se</a>
                        <a href='/'>Esqueci minha senha</a>
                    </div>
                    <button type="submit">Fazer Login</button>
                </form>
            </div>
        </div>
    );
};