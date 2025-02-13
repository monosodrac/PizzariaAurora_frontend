import React, { useState, useEffect, useContext } from 'react';
import { AutenticadoContexto } from '../../Contexts/authContexts';
import { useNavigate } from 'react-router-dom';
import apiLocal from '../../Api/apiLocal';
import { toast } from 'react-toastify';

export default function EditarPerfil() {
    const mudarTela = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [password, setPassword] = useState('');

    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    const idT = localStorage.getItem('@id');
    const id = JSON.parse(idT);

    useEffect(() => {
        try {
            async function consultarDados() {
                const resposta = await apiLocal.post('/ConsultarUsuariosUnico', {
                    id
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setNome(resposta.data.nome);
                setEmail(resposta.data.email);
                setCep(resposta.data.cep);
                setRua(resposta.data.rua);
                setNumero(resposta.data.numero);
                setBairro(resposta.data.bairro);
                setCidade(resposta.data.cidade);
                setUf(resposta.data.estado);
                setPassword(resposta.data.senha);
            };
            consultarDados();
        } catch (err) {
            toast.error('Erro ao Comunicar com o Servidor', {
                toastId: 'ToastId'
            });
        };
        // eslint-disable-next-line
    }, []);

    async function enviarAlteracao(e) {
        try {
            e.preventDefault()
            await apiLocal.put('/AlterarDadosUsuarios', {
                id,
                nome,
                email,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                uf
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success('Cadastro Alterado com Sucesso', {
                toastId: 'ToastId'
            });
            mudarTela('/perfil');
        } catch (err) {
            if (err.response) {
                console.log('Erro:', err.response.data);
                console.log('Status:', err.response.status);
            } else {
                console.log('Erro de rede ou configuração:', err.message);
            }
            // console.log(err.response)
            // toast.error('Erro ao Comunicar com o Servidor', {
            //     toastId: 'ToastId'
            // });
        };
    };

    return (
        <div>
            <div class="hsection">
                <h2>Editar Usuários</h2>
            </div>
            <div className="">
                <form onSubmit={enviarAlteracao}>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                    />
                    <input
                        type="text"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                    />
                    <input
                        type="text"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                    <input
                        type="text"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                    />
                    <input
                        type="text"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    />
                    <input
                        type="text"
                        value={uf}
                        onChange={(e) => setUf(e.target.value)}
                    />
                    <input
                        disabled
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>Enviar</button>
                    <button type='submit' className='buttonVoltar' onClick={() => mudarTela('/')}>Voltar</button>
                </form>
            </div>
        </div>
    )
}