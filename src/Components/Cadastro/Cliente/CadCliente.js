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
    const [password, setpassword] = useState('');
    const [dadosViaCep, setDadosViaCep] = useState('');

    async function cadastroUsuarios(e) {
        try {
            e.preventDefault();
            if (!nome || !email || !password) {
                alert("Campos em Branco");
                return;
            };
            await apiLocal.post('/CadastrarUsuarios', {
                nome,
                email,
                cep,
                rua,
                numero,
                cidade,
                uf,
                password
            });
            toast.success('Cadastro Efetuado Com Sucesso', {
                toastId: 'ToastId'
            });
            mudarTela('/login');
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            });
        };
    };

    const handleCepBlur = async () => {
        if (cep.length === 8) {
            try {
                const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
                setDadosViaCep({
                    rua: resposta.data.longradouro,
                    setBairro: resposta.data.bairro,
                    setcidade: resposta.data.localidade,
                    setEstado: resposta.data.uf,
                });
            } catch (error) {
                console.log('Erro ao buscar o CEP', error);
            };
        };
    };

    useEffect(() => {
        async function mostrarCep() {
            setRua(dadosViaCep.rua);
            setBairro(dadosViaCep.bairro);
            setCidade(dadosViaCep.cidade);
            setUf(dadosViaCep.uf);
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
                        onChange={(e) => setRua({...dadosViaCep, rua: e.target.value})}
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
                        onChange={(e) => setBairro({...dadosViaCep, bairro: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder='Digite sua cidade'
                        value={cidade}
                        onChange={(e) => setCidade({...dadosViaCep, cidade: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder='Digite seu estado'
                        value={uf}
                        onChange={(e) => setUf({...dadosViaCep, uf: e.target.value})}
                    />
                    <input
                        type="password"
                        placeholder='Digite sua Senha'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
            <a href="/"><IoMdArrowRoundBack /></a>
        </div>
    );
};