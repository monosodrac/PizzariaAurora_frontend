import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashBoardEmpresa from '../Dashboard/Empresa';

export default function AutEmpresa() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DashBoardEmpresa />} />

                <Route path='*' element={<DashBoardEmpresa />} />
            </Routes>
        </BrowserRouter>
    );
};