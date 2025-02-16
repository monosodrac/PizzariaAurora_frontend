import React, { useState, useEffect, useContext } from 'react';
import { AutenticadoContexto } from '../../Contexts/authContexts';
import { toast } from 'react-toastify';
import apiLocal from '../../Api/apiLocal';

import { IoMdArrowRoundBack } from "react-icons/io";

export default function DashBoard() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
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
                setCep(resposta.data.cep);
                setRua(resposta.data.rua);
                setNumero(resposta.data.numero);
                setBairro(resposta.data.bairro);
                setCidade(resposta.data.cidade);
                setUf(resposta.data.estado);
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
                <section className="perfil">
                    <div className="container">
                        <img src="" alt="Foto de perfil" />
                        <div className="perfil__text">
                            <h4>
                                {nome}
                            </h4>
                            <p>
                                {email}
                            </p>
                            <p>
                                {cep}
                            </p>
                            <p>
                                {rua}
                            </p>
                            <p>
                                {numero}
                            </p>
                            <p>
                                {bairro}
                            </p>
                            <p>
                                {cidade}
                            </p>
                            <p>
                                {uf}
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