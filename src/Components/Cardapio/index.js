import React, { useContext, useState, useEffect } from "react";
import { AutenticadoContexto } from "../../Contexts/authContexts";
import apiLocal from "../../Api/apiLocal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { IoMdArrowRoundBack } from "react-icons/io";

import { salgadas, doces, bebidas } from "../../Assets/assets";

export default function Cardapio() {
    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    const [dadosProdutos, setDadosProdutos] = useState(['']);

    useEffect(() => {
        try {
            async function consultarDadosprodutos() {
                const resposta = await apiLocal.get('/ConsultarProdutos', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(resposta.data);
                // setDadosProdutos(resposta.data);
            };
            consultarDadosprodutos();
        } catch (err) {
            toast.error('Erro ao Comunicar com Backend', {
                toastId: 'ToastId'
            });
        };
    }, []);

    return (
        <div>
            <div className="hsection" id="cont">
                <h2>Cardápio</h2>
            </div>
            <section id="cardapio" class="pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <aside class="col-md-2">
                            <nav class="nav nav-pills flex-column nav-cardapio">
                                <button type="button" data-bs-toggle="tab" data-bs-target="#salg" class="fw-bold text-start nav-link text-colored active">Pizzas Salgadas</button>
                                <button type="button" data-bs-toggle="tab" data-bs-target="#doces" class="fw-bold text-start nav-link text-colored">Pizzas Doces</button>
                                <button type="button" data-bs-toggle="tab" data-bs-target="#bebs" class="fw-bold text-start nav-link text-colored">Bebidas</button>
                            </nav>
                        </aside>
                        <div class="menu col-md-10">
                            <div class="tab-content">
                                <div class="tab-pane active" id="salg">
                                    <div class="row">
                                        {salgadas.map((item, index) => (
                                            <div class="col-md-3 coluna">
                                                <a href="/pedido">
                                                    <div className="" key={index}>
                                                        <img className="d-block w-100" src={item.imagem} alt="Pizza de Frango com Bacon" />
                                                        <h5 className="text-colored fw-bold mt-2">{item.nome}</h5>
                                                        <p>
                                                            {item.descricao}
                                                        </p>
                                                        <p>
                                                            {item.preco}
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div class="tab-pane" id="doces">
                                    <div class="row">
                                        {doces.map((item, index) => (
                                            <div class="col-md-3 coluna">
                                                <a href="/pedido">
                                                    <div className="" key={index}>
                                                        <img className="d-block w-100" src={item.imagem} alt="Pizza de Frango com Bacon" />
                                                        <h5 className="text-colored fw-bold mt-2">{item.nome}</h5>
                                                        <p>
                                                            {item.preco}
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div class="tab-pane" id="bebs">
                                    <div class="row">
                                        {bebidas.map((item, index) => (
                                            <div class="col-md-3 coluna">
                                                <a href="/pedido">
                                                    <div className="" key={index}>
                                                        <img className="d-block w-100" src={item.imagem} alt="Pizza de Frango com Bacon" />
                                                        <h5 className="text-colored fw-bold mt-2">{item.nome}</h5>
                                                        <p>
                                                            {item.preco}
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <a href="/" className="back"><IoMdArrowRoundBack /></a>
        </div>
    );
};