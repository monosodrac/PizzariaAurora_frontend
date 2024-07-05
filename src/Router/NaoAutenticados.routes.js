import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TbCircleArrowUp } from "react-icons/tb";

import Inicio from '../Inicio';
import Header from '../Components/Header';
import ModalLogin from '../Components/ModalLogin';

export default function NaoAutenticados() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Inicio />} />


                <Route path='*' element={<Inicio />} />
            </Routes>
        <ModalLogin />
        <a href='#head' className='btn__up'><TbCircleArrowUp /></a>
        </BrowserRouter>
    );
};