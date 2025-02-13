import React, { useState, useContext } from "react";
import { AutenticadoContexto } from "../../../Contexts/authContexts";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import apiLocal from '../../../Api/apiLocal';

export default function CadProdutos() {
    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    const [nome, setNome] = useState(['']);
    const [descricao, setDescricao] = useState(['']);
    const [preco, setPreco] = useState(['']);
    const [imagem, setImagem] = useState(null);

    const navigate = useNavigate();

    function pegarImagem(e) {
        if (!e.target.files) {
            return;
        };
        const image = e.target.files[0];
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
            setImagem(image);
        };
    };

    async function cadastroProdutos(e) {
        try {
            e.preventDefault();
            const data = new FormData();
            data.append('nome', nome);
            data.append('descricao', descricao);
            data.append('preco', preco);
            data.append('file', imagem);
            const resposta = await apiLocal.post('/CadastrarProdutos', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(resposta)
            toast.success(resposta.data.dados, {
                toastId: 'ToastId'
            });
            
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            });
        };
        setNome('');
        setDescricao('');
        setPreco('');
        setImagem(null);
    };

    return (
        <div className="cadastro">
            <div className="hsection">
                <h2>Cadastro</h2>
            </div>
            <section id="produtos">
                <div className="row">
                    <nav className="nav nav-pills flex-column col-lg-2 col-md-12">
                        <button data-bs-toggle="tab" data-bs-target="#aba1" className="nav-link active" type="button">Cadastro</button>
                    </nav>
                    <div className="tab-content col-lg-10">
                        <div className="tab-pane active" id="aba1">
                            <div className="container">
                                <form className="form__Prod" onSubmit={cadastroProdutos}>
                                    <input
                                        type="file"
                                        accept="image/jpeg, image/png"
                                        onChange={pegarImagem}
                                    />
                                    <label>
                                        Nome do produto:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                    <label>
                                        descrição do produto:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)}
                                    />
                                    <label>
                                        Preço:
                                    </label>
                                    <input
                                        type="text"
                                        name="Preço"
                                        value={preco}
                                        onChange={(e) => setPreco(e.target.value)}
                                    />
                                    <button className="btn" type="submit">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};