import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from '../Inicio';
import Login from '../Components/Login';
import CadCliente from '../Components/CadCliente';
import Cardapio from '../Cardapio/index';

export default function NaoAutenticados() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />

                <Route path='/login' element={<Login />} />
                <Route path='/cadastro-cliente' element={<CadCliente />} />
                <Route path='/cardapio' element={<Cardapio />} />

                <Route path='*' element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    );
};