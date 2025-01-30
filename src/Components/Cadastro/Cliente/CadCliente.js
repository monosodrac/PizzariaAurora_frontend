import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiLocal from '../../../Api/apiLocal';
import { IoMdArrowRoundBack } from "react-icons/io";

export default function CadCliente() {
    const mudarTela = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    async function cadastroUsuarios(e) {
        try {
            e.preventDefault();
            if (!nome || !email || !password) {
                alert("Campos em Branco");
                return;
            };
            await apiLocal.post('/CadastrarUsuarios', {
                nome,
                email,
                password
            });
            toast.success('Cadastro Efetuado Com Sucesso', {
                toastId: 'ToastId'
            });
            mudarTela('/login');
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            });
        };
    };

    return (
        <div className="cadastro">
            <div className="hsection">
                <h2>Cadastro</h2>
            </div>
            <div className="container">
                <form className="form__client" onSubmit={cadastroUsuarios}>
                <input
                    type="text"
                    placeholder='Digite Seu Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu E-Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Digite Sua Senha'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <button type='submit'>Enviar</button>
                </form>
            </div>
            <a href="/"><IoMdArrowRoundBack /></a>
        </div>
    );
};