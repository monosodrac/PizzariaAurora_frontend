import React, { useContext, useState } from 'react';
import { AutenticadoContexto } from '../../Contexts/authContexts';
import { toast } from 'react-toastify';
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Login() {
    const { loginEntrada, verificarToken } = useContext(AutenticadoContexto);
    verificarToken();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function dadosLogin(e) {
        e.preventDefault()
        if (!email || !password) {
            toast.warning('Preencha todos os campos');
            return;
        };
        try {
            await loginEntrada(email, password);
        } catch (err) {
            
        };
    };

    return (
        <div className="login">
            <div className="hsection">
                <h2>Login</h2>
            </div>
            <div className="container">
                <form onSubmit={dadosLogin}>
                    <input
                        type="email"
                        autoFocus
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="cad-res">
                        <a href="/cadastro-cliente">Cadastre-se</a>
                        <a href='/maintenance'>Esqueci minha senha</a>
                    </div>
                    <button className="btn" type="submit">Fazer Login</button>
                </form>
            </div>
            <a href="/" className="back"><IoMdArrowRoundBack /></a>
        </div>
    );
};