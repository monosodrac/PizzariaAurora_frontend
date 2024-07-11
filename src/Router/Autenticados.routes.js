import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoardCliente from '../Dashboard/Cliente';
import Header from '../Components/Header';

export default function Autenticados() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<DashBoardCliente />} />


                <Route path='*' element={<DashBoardCliente />} />
            </Routes>
        </BrowserRouter>
    );
};