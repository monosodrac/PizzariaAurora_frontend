import React, { useState, useEffect, useContext } from 'react'
import { AutenticadoContexto } from "../../Contexts/authContexts";
import { useNavigate, useParams } from 'react-router-dom';
import apiLocal from '../../Api/apiLocal';
import { toast } from 'react-toastify';

import { IoMdArrowRoundBack } from "react-icons/io";

export default function Pedido() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState(null);

    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

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
                setImagem(resposta.data.banner)
            };
            consultarProdutos();
        } catch (err) {
            toast.error('Erro ao Comunicar com o Servidor', {
                toastId: 'ToastId'
            });
        };
    }, [id, token]);

    function confPed() {
        navigate(`/pedido-confirmado/${id}`)
    }

    return (
        <div>
            <div className="hsection">
                <h2>Pedido</h2>
            </div>
            <section className="pedido">
                <div className="container">
                    <img src={`http://localhost:3333/files/${imagem}`} alt={descricao} />
                    <div className="pedido__text">
                        <h4>
                            Pizza: {nome}
                        </h4>
                        <p>
                            Descrição: {descricao}
                        </p>
                        <p>
                            Preço: R${preco}
                        </p>
                        <button onClick={confPed} className="btn" type="submit">Confirmar Pedido</button>
                    </div>
                </div>
            </section>
            <a href="/cardapio" className="back"><IoMdArrowRoundBack /></a>
        </div>
    )
}