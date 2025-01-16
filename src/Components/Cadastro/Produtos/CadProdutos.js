import React, { useState } from "react";
import { toast } from 'react-toastify';
import apiLocal from '../../../Api/apiLocal';

export default function CadProdutos() {
    const [nome, setNome] = useState(['']);
    const [preco, setPreco] = useState(['']);

    async function cadastroProdutos(e) {
        try {
            e.preventDefault();
            if (!nome || !preco ) {
                alert("Campos em Branco");
                return;
            };
            await apiLocal.post('/CadastrarProdutos', {
                nome,
                preco,
            });
            toast.success('Cadastro Efetuado Com Sucesso', {
                toastId: 'ToastId'
            });
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            });
        };
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