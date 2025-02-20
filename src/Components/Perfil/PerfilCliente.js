import React, { useState, useEffect, useContext } from 'react';
import { AutenticadoContexto } from '../../Contexts/authContexts';
import { toast } from 'react-toastify';
import apiLocal from '../../Api/apiLocal';
import { CirclesWithBar } from 'react-loader-spinner'

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
    const [banner, setBanner] = useState('')
    // const [password, setPassword] = useState('')

    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    const [load, setLoad] = useState(false);

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
                if (resposta.data.dados === 'Token Inválido') {
                    setLoad(false);
                } else {
                    setNome(resposta.data.nome);
                    setEmail(resposta.data.email);
                    setCep(resposta.data.cep);
                    setRua(resposta.data.rua);
                    setNumero(resposta.data.numero);
                    setBairro(resposta.data.bairro);
                    setCidade(resposta.data.cidade);
                    setUf(resposta.data.estado);
                    setBanner(resposta.data.banner);
                    setLoad(true);
                };
            };
            exibirInfoPerfil();
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            });
        };
    }, [token]);

    return (
        <>
            <div className='hsection'>
                <h1>Perfil</h1>
            </div>
            <div className=''>
                <section className="perfil">
                    <div className="container">
                        {load === false ?
                            <CirclesWithBar
                                height="100"
                                width="100"
                                color="#4fa94d"
                                outerCircleColor="#ffffff"
                                innerCircleColor="#000000"
                                barColor="#0000ff"
                                ariaLabel="circles-with-bar-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                            :
                            <>
                                <div class="perfil__img-nome">
                                    <img className="" src={`http://localhost:3333/files/${banner}`} alt="Foto do Perfil" />
                                    <h4>
                                        {nome}
                                    </h4>
                                </div>
                                <div className="perfil__text">
                                    <label>Email: </label>
                                    <input
                                        type="text"
                                        value={email}
                                        disabled
                                    />
                                    <label>CEP: </label>
                                    <input
                                        type="text"
                                        value={cep}
                                        disabled
                                    />
                                    <label>Rua: </label>
                                    <input
                                        type="text"
                                        value={rua}
                                        disabled
                                    />
                                    <label>Numero: </label>
                                    <input
                                        type="text"
                                        value={numero}
                                        disabled
                                    />
                                    <label>Bairro: </label>
                                    <input
                                        type="text"
                                        value={bairro}
                                        disabled
                                    />
                                    <label>Cidade: </label>
                                    <input
                                        type="text"
                                        value={cidade}
                                        disabled
                                    />
                                    <label>Estado: </label>
                                    <input
                                        type="text"
                                        value={uf}
                                        disabled
                                    />
                                    <a href="/editar-perfil" className="">Editar informações</a>
                                </div>
                            </>
                        }
                    </div>
                </section>
                <a href="/" className="back"><IoMdArrowRoundBack /></a>
            </div>
        </>
    );
};