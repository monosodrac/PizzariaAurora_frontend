import React, { useState, useEffect, useContext } from 'react'
import { AutenticadoContexto } from "../../Contexts/authContexts";
import { useParams } from 'react-router-dom';
import apiLocal from '../../Api/apiLocal';
import { toast } from 'react-toastify';

import { IoMdArrowRoundBack } from "react-icons/io";

export default function PedidoConf() {
    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    useEffect(() => {
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
        } catch (err) {
            toast.error('Erro ao Comunicar com o Servidor', {
                toastId: 'ToastId'
            });
        };
    }, []);

    return (
        <div>
            <div className="hsection" id="dlvr">
                <h2>Confirmação do Pedido</h2>
            </div>
            <section className="delivery">
                <div className="container">
                    <div className="delivery__text">
                        <h2>
                            Pedido Confirmado
                        </h2>
                        <h4>
                            Pizza: {nome}
                        </h4>
                        <p>
                            Descrição: {descricao}
                        </p>
                        <p>
                            Valor: R${preco}
                        </p>
                        <a href="/" className="back"><IoMdArrowRoundBack /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}