import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiLocal from '../../../Api/apiLocal';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";

export default function CadCliente() {
    const mudarTela = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [password, setPassword] = useState('');
    const [imagem, setImagem] = useState(null)
    const [dadosViaCep, setDadosViaCep] = useState('');

    function pegarImagem(e) {
        if (!e.target.files) {
            return
        }
        const image = e.target.files[0]
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
            setImagem(image)
        }
    }

    async function cadastroUsuarios(e) {
        try {
            e.preventDefault()
            const data = new FormData()
            data.append('nome', nome)
            data.append('email', email)
            data.append('cep', cep)
            data.append('rua', rua)
            data.append('numero', numero)
            data.append('bairro', bairro)
            data.append('cidade', cidade)
            data.append('uf', uf)
            data.append('password', password)
            data.append('file', imagem)
            const resposta = await apiLocal.post('/CadastrarUsuarios', data)
            toast.success(resposta.data.dados, {
                toastId: 'ToastId'
            })
            mudarTela('/')
        } catch (err) {
            console.log(err)
        }
        setNome('')
        setEmail('')
        setCep('')
        setRua('')
        setNumero('')
        setBairro('')
        setCidade('')
        setUf('')
        setImagem(null)
    };

    const handleCepBlur = async () => {
        if (cep.length === 8) {
            try {
                const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
                setDadosViaCep({
                    rua: resposta.data.logradouro,
                    bairro: resposta.data.bairro,
                    cidade: resposta.data.localidade,
                    uf: resposta.data.uf,
                });
                console.log(resposta);
            } catch (error) {
                console.log('Erro ao buscar o CEP', error);
            };
        };
    };

    useEffect(() => {
        async function mostrarCep() {
            if(!dadosViaCep) {
                return
            } else {
                setRua(dadosViaCep.rua);
                setBairro(dadosViaCep.bairro);
                setCidade(dadosViaCep.cidade);
                setUf(dadosViaCep.uf);
            }
        };
        mostrarCep();
    }, [dadosViaCep]);

    return (
        <div className="cadastro">
            <div className="hsection">
                <h2>Cadastro</h2>
            </div>
            <div className="container">
                <form className="form__client" onSubmit={cadastroUsuarios}>
                    <input
                        type="text"
                        placeholder='Digite seu Nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Digite seu E-Mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Digite seu CEP'
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        onBlur={handleCepBlur}
                    />
                    <input
                        type="text"
                        placeholder='Digite sua rua'
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Digite o numero da casa'
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Digite seu bairro'
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Digite sua cidade'
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Digite seu estado'
                        value={uf}
                        onChange={(e) => setUf(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Digite sua Senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="file"
                        accept='image/jpeg, image/png'
                        onChange={pegarImagem}
                    />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
            <a href="/"><IoMdArrowRoundBack /></a>
        </div>
    );
};