import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoardCliente from '../Dashboard/Cliente';
import Cardapio from '../Cardapio/Autenticado/index';
import Pedido from '../Components/Pedido';
import PedConf from '../Components/PedConf';

export default function AutCliente() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<DashBoardCliente />} />
                    
                    <Route path='/cardapio' element={<Cardapio />} />
                    <Route path='/pedido' element={<Pedido />} />
                    <Route path='/pedido-confirmado' element={<PedConf />} />



                    <Route path='*' element={<DashBoardCliente />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};