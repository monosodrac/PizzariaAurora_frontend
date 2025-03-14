import React, { useContext, useState, useEffect } from "react";
import { AutenticadoContexto } from "../../Contexts/authContexts";
import apiLocal from "../../Api/apiLocal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CirclesWithBar } from 'react-loader-spinner'

import { IoMdArrowRoundBack } from "react-icons/io";

import Contato from "../Footer";

export default function Cardapio() {
    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    const [dadosProdutos, setDadosProdutos] = useState(['']);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        try {
            async function consultarDadosprodutos() {
                const resposta = await apiLocal.get('/ConsultarProdutos');
                // console.log(resposta.data);
                if (resposta.data.dados === 'Token Inválido') {
                    setLoad(false)
                } else {
                    setDadosProdutos(resposta.data);
                    setLoad(true)
                }
            };
            consultarDadosprodutos();
        } catch (err) {
            toast.error('Erro ao Comunicar com Backend', {
                toastId: 'ToastId'
            });
        };
    }, [token]);

    return (
        <div>
            <div className="hsection" id="cont">
                <h2>Cardápio</h2>
            </div>
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
                            {dadosProdutos.map((item, index) => {
                                return (
                                    <Link to={`/pedido/${item.id}`} >
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
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    }
                </div>
            </section>
            <a href="/" className="back"><IoMdArrowRoundBack /></a>
            <Contato />
        </div>
    );
};