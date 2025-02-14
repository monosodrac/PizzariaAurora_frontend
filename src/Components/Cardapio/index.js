import React, { useContext, useState, useEffect } from "react";
import { AutenticadoContexto } from "../../Contexts/authContexts";
import apiLocal from "../../Api/apiLocal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { IoMdArrowRoundBack } from "react-icons/io";

import { salgadas } from "../../Assets/assets";
import Contatto from '../Footer/Main/Contato'
import Contato from "../Footer/Main/Contato";

export default function Cardapio() {
    const { verificarToken } = useContext(AutenticadoContexto);
    verificarToken();

    const [dadosProdutos, setDadosProdutos] = useState(['']);

    useEffect(() => {
        try {
            async function consultarDadosprodutos() {
                const resposta = await apiLocal.get('/ConsultarProdutos');
                // console.log(resposta.data);
                setDadosProdutos(resposta.data);
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
            <section id="cardapio" className="cardapio pt-5 pb-5">
                <div class="container">
                    <div className="cardapio__tabs">
                        {dadosProdutos.map((item, index) => {
                            const imagemProduto = salgadas.find(img => img.imagem)?.imagem
                            return(
                            <Link to={`/pedido/${item.id}`}>
                                <div className="cardapio__tabs__item" key={index}>
                                    <img className="" src={imagemProduto} alt={item.nome} />
                                    <h5 className="">{item.nome}</h5>
                                    <p>
                                        {item.descricao}
                                    </p>
                                    <p>
                                        {item.preco}
                                    </p>
                                </div>
                            </Link>
                        )})}
                    </div>
                </div>
            </section>
            <a href="/" className="back"><IoMdArrowRoundBack /></a>
            <Contato />
        </div>
    );
};