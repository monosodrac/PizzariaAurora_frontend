import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

import '../Dashboard/Cliente';

export default function CadCliente() {
    // const navegacao = useNavigate();

    const [usuario, setUsuario] = useState();
    const [telefone, setTelefone] = useState();
    const [cep, setCep] = useState();
    const [rua, setRua] = useState();
    const [numCasa, setNumCasa] = useState();
    const [bairro, setBairro] = useState();
    const [email, setEmail] = useState();

    function cadUsuarios(e) {
        e.preventDefault();

        if (!usuario || !telefone || !cep || !rua || !numCasa || !bairro || !email) {
            alert('Campos em Branco');
            return;
        };
    };

    return (
        <div className="login">
            <div class="hsection">
                <h2>Cadastro</h2>
            </div>
            <div class="container">
                <form onSubmit={cadUsuarios}>
                    <input type="text" required='true' placeholder="Seu Nome" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <input type="number" required='true' placeholder="Seu Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    <input type="number" required='true' placeholder="Seu CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                    <input type="text" required='true' placeholder="Sua Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
                    <input type="text" required='true' placeholder="Número da Casa" value={numCasa} onChange={(e) => setNumCasa(e.target.value)} />
                    <input type="text" required='true' placeholder="Seu Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                    <input type="email" required='true' placeholder="Seu E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};