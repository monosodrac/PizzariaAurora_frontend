import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoardCliente from '../Dashboard/Cliente';
import Cardapio from '../Components/Cardapio';
import Perfil from '../Components/Perfil/PerfilCliente';
import Pedido from '../Components/ConfirmaPedido/Pedido';
import PedConf from '../Components/ConfirmaPedido/PedConf';

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<DashBoardCliente />} />
                    
                    <Route path='/cardapio' element={<Cardapio />} />
                    <Route path='/perfil' element={<Perfil />} />
                    <Route path='/pedido' element={<Pedido />} />
                    <Route path='/pedido-confirmado' element={<PedConf />} />

                    <Route path='*' element={<DashBoardCliente />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};