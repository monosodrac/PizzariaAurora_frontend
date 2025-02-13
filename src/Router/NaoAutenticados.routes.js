import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from '../Inicio';
import Login from '../Components/Login/Login';
import CadCliente from '../Components/Cadastro/Cliente/CadCliente';
import Maintenance from '../Maintenance/index';
import Cardapio from '../Components/Cardapio';
// import Perfil from '../Components/Perfil/PerfilCliente'

export default function NaoAutenticados() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />

                <Route path='/login' element={<Login />} />
                <Route path='/cadastro-cliente' element={<CadCliente />} />
                <Route path='/maintenance' element={<Maintenance />} />
                <Route path='/cardapio' element={<Cardapio />} />
                {/* <Route path='/perfil' element={<Perfil />} /> */}

                <Route path='*' element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    );
};