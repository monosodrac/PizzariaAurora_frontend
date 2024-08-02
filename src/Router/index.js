import React from 'react';

import NaoAutenticados from './NaoAutenticados.routes';
import Autenticados from './Autenticados';

export default function Rotas() {

    const autenticado = false;

    return (
        <>
            {autenticado === true ? <Autenticados /> : <NaoAutenticados />}
        </>
    );
};