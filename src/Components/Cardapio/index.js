import React, { useContext, useState, useEffect } from "react";
import { AutenticadoContexto } from "../../Contexts/authContexts";
import apiLocal from "../../Api/apiLocal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CirclesWithBar } from 'react-loader-spinner'

import { IoMdArrowRoundBack } from "react-icons/io";

import Header from '../Header'
import Contato from "../Footer";

export default function Cardapio() {
    const { verificarToken, token, autenticado } = useContext(AutenticadoContexto);
    verificarToken();

    const [dados, setDados] = useState(['']);
    const [n_pedido, setNPedido] = useState('');
    const [existePedido, setExistePedido] = useState(false);
    const [id_usuario, setIdUsuario] = useState('');


    const navigate = useNavigate();

    const [load, setLoad] = useState(false);

    useEffect(() => {
        try {
            async function consultarDadosprodutos() {
                const resposta = await apiLocal.get('/ConsultarProdutos');
                setDados(resposta.data);
                setLoad(true);
            };
            consultarDadosprodutos();
        } catch (err) {
            toast.error('Erro ao Comunicar com Backend', {
                toastId: 'ToastId'
            });
        };
        // eslint-disable-next-line
    }, [token]);

    useEffect(() => {
        const clienteU = localStorage.getItem('@id');
        setIdUsuario(JSON.parse(clienteU));
        const pedidoU = localStorage.getItem('@npedido');
        setNPedido(JSON.parse(pedidoU));
    }, [n_pedido]);

    async function adCarrinho(id1) {
        if (autenticado !== true) {
            navigate('/Login')
        } else if (existePedido === false) {
            try {
                const produto = dados.filter((item) => item.id === id1)
                const valor = Number(produto.map((item) => item.preco))
                const id_produto = String(produto.map((item) => item.id))
                const resposta = await apiLocal.post('/RealizarPedidos', {
                    id_usuario,
                    id_produto,
                    valor
                })
                localStorage.setItem('@npedido', JSON.stringify(resposta.data.n_pedido))
                localStorage.setItem('@id_pedido', JSON.stringify(resposta.data.id))
                setExistePedido(true)
                toast.success('Carrinho Criado Com Sucesso ', {
                    toastId: 'ToastID'
                })
            } catch (err) {
                toast.error(err.response.data.error, {
                    toastId: 'ToastID'
                })
            }
        } else {
            try {
                const idPedido = localStorage.getItem('@id_pedido')
                const id_carrinho = JSON.parse(idPedido)
                const produto = dados.filter((item) => item.id === id1)
                const valor = Number(produto.map((item) => item.preco))
                const id_produto = String(produto.map((item) => item.id))
                const resposta = await apiLocal.post('/AdicionarItensPedidos', {
                    id_produto,
                    id_carrinho,
                    valor
                })
                toast.success(resposta.data.dados, {
                    toastId: 'ToastID'
                })
            } catch (err) {
                toast.warning(err.response.data.error, {
                    toastId: 'ToastID'
                })
            }
        }
    }

    return (
        <>
            <Header />
            <section id="cardapio" className="cardapio">
                <div class="container">
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
                        <div className="cardapio__tabs">
                            {dados.map((item, index) => {
                                return (
                                    <div className="cardapio__tabs__item" key={index}>
                                        <img className="" src={`http://localhost:3333/files/${item.banner}`} alt={item.nome} />
                                        <h5 className="">Pizza: {item.nome}</h5>
                                        {
                                            item.descricao === ''
                                                ?
                                                <p></p>
                                                :
                                                <p title={item.descricao}>Descrição: {item.descricao}</p>
                                        }
                                        <p>
                                            Preço: R$
                                            {item.preco}
                                        </p>
                                        <button className="buy-button" onClick={() => adCarrinho(item.id)}>
                                            Adicionar
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </section>
            <a href="/" className="back"><IoMdArrowRoundBack /></a>
            <Contato />
        </>
    );
};