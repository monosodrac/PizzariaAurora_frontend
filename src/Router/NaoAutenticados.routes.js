import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TbCircleArrowUp } from "react-icons/tb";

import Inicio from '../Inicio';
import ModalLogin from '../Components/ModalLogin';
import CadCliente from '../Components/CadCliente';

export default function NaoAutenticados() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />

                <Route path='/cadastro-cliente' element={<CadCliente />} />

                <Route path='*' element={<Inicio />} />
            </Routes>
        <ModalLogin />
        <a href='#head' className='btn__up'><TbCircleArrowUp /></a>
        </BrowserRouter>
    );
};