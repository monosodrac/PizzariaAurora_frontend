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
            return
        }
        const image = e.target.files[0]
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
            setImagem(image)
        }
    }

    async function cadastrarProduto(e) {
        try {
            e.preventDefault()
            const data = new FormData()
            data.append('nome', nome)
            data.append('descricao', descricao)
            data.append('preco', preco)
            data.append('file', imagem)
            const resposta = await apiLocal.post('/CadastrarProdutos', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(resposta);
            toast.success(resposta.data.dados, {
                toastId: 'ToastId'
            })
            navigate("/cardapio")
        } catch (err) {
            console.log(err)
        }
        setNome('')
        setDescricao('')
        setPreco('')
        setImagem(null)
    }
    return (
        <div className="cadastro">
            <div className="hsection">
                <h2>Cadastro de Produtos</h2>
            </div>
            <section id="produtos">
                <div className="row">
                    <div className="tab-content">
                        <div className="tab-pane active" id="aba1">
                            <div className="container">
                                <form className="form__Prod" onSubmit={cadastrarProduto}>
                                    <label>
                                        Nome do produto:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        autoFocus
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
                                    <input
                                        id="image__input"
                                        type="file"
                                        accept="image/jpeg, image/png"
                                        onChange={pegarImagem}
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