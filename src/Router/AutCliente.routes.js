import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoardCliente from '../Dashboard/Cliente';

export default function AutCliente() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<DashBoardCliente />} />

                    <Route path='*' element={<DashBoardCliente />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};