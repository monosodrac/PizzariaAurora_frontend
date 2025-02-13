import React, { useState, useEffect, useContext } from 'react'
import { AutenticadoContexto } from "../../Contexts/authContexts";
import { useNavigate, useParams } from 'react-router-dom';
import apiLocal from '../../Api/apiLocal';
import { toast } from 'react-toastify';

import { IoMdArrowRoundBack } from "react-icons/io";

import Pizza from "../../Styles/Imgs/pizza1-1.jpg";

export default function Pedido() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    useEffect (() => {
        try {
            async function consultarProdutos() {
                const resposta = await apiLocal.post('/ConsultarProdutosUnico', {
                    id
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setNome(resposta.data.nome)
                setDescricao(resposta.data.descricao)
                setPreco(resposta.data.preco)
            };
            consultarProdutos();
        } catch(err) {
            toast.error('Erro ao Comunicar com o Servidor', {
                toastId: 'ToastId'
            });
        };
    }, []);

    function confPed() {
        navigate(`/pedido-confirmado/${id}`)
    }

    return (
        <div>
            <div className="hsection" id="dlvr">
                <h2>Pedido</h2>
            </div>
            <section className="delivery">
                <div className="container">
                    <img src={Pizza} alt="Pizza de Frango com Bacon" />
                    <div className="delivery__text">
                        <h4>
                            {nome}
                        </h4>
                        <p>
                            {descricao}
                        </p>
                        <p>
                            {preco}
                        </p>
                        <button onClick={confPed} className="btn" type="submit">Confirmar Pedido</button>
                    </div>
                </div>
            </section>
            <a href="/cardapio" className="back"><IoMdArrowRoundBack /></a>
        </div>
    )
}