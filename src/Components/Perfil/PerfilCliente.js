import React, { useState, useEffect, useContext } from 'react';
import { AutenticadoContexto } from '../../Contexts/authContexts';
import { toast } from 'react-toastify';
import apiLocal from '../../Api/apiLocal';

import { IoMdArrowRoundBack } from "react-icons/io";

export default function DashBoard() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    const idT = localStorage.getItem('@id');
    const id = JSON.parse(idT);

    useEffect(() => {
        try {
            async function exibirInfoPerfil() {
                const resposta = await apiLocal.post('/ConsultarUsuariosUnico', {
                    id
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setNome(resposta.data.nome);
                setEmail(resposta.data.email);
                // setPassword(resposta.data.password);
            };
            exibirInfoPerfil();
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            });
        };
    }, []);

    return (
        <>
            <div className='hsection'>
                <h1>Perfil</h1>
            </div>
            <div className=''>
                <section className="delivery">
                    <div className="container">
                        <img src="" alt="Foto de perfil" />
                        <div className="delivery__text">
                            <h4>
                                {nome}
                            </h4>
                            <p>
                                {email}
                            </p>
                            <a href="/editar-perfil" className="">Editar informações</a>
                        </div>
                    </div>
                </section>
                <a href="/" className="back"><IoMdArrowRoundBack /></a>
            </div>
        </>
    );
};