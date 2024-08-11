import React from "react";
import Builder from '../Imgs/pixel-art-12601_256.gif';

export default function Maintenance() {
    return (
        <div className="maintenance">
            <h1>Página em Manutenção</h1>
            <img src={Builder} alt="Pessoa Trabalhando" /> <br />
            <a href="/">Voltar para página inicial</a>
        </div>
    );
};