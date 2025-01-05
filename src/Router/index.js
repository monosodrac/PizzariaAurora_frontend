import React, { useContext } from 'react';
import { AutenticadoContexto } from '../Contexts/authContexts'

import NaoAutenticados from './NaoAutenticados.routes';
import Autenticados from './Autenticados.routes';

export default function Rotas() {
    const { autenticado } = useContext(AutenticadoContexto);
    // const autenticado = true;

    return (
        <>
            {autenticado === true ? <Autenticados /> : <NaoAutenticados />}
        </>
    );
};