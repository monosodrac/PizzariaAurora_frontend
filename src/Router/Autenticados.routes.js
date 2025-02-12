import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoardCliente from '../Dashboard/Cliente';
import Cardapio from '../Components/Cardapio';
import Perfil from '../Components/Perfil/PerfilCliente';
import EditarPerfil from '../Components/EditarPerfil';
import Pedido from '../Components/Pedido/Pedido';
import PedConf from '../Components/Pedido/PedConf';
import CadProdutos from '../Components/Cadastro/Produtos/CadProdutos'

import Maintenance from '../Maintenance/index'

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<DashBoardCliente />} />

                    <Route path='/cadastro-produtos' element={<CadProdutos />} />
                    <Route path='/cardapio' element={<Cardapio />} />
                    <Route path='/perfil' element={<Perfil />} />
                    <Route path='/editar-perfil' element={<EditarPerfil />} />
                    <Route path='/pedido/:id' element={<Pedido />} />
                    <Route path='/pedido-confirmado' element={<PedConf />} />

                    <Route path='/maintenance' element={<Maintenance />} />


                    <Route path='*' element={<DashBoardCliente />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};