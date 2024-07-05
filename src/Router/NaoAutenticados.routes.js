import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

import Inicio from '../Inicio';
import Header from '../Components/Header';

export default function NaoAutenticados() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Inicio />} />


                <Route path='*' element={<Inicio />} />
            </Routes>
        <a href='' className='btn__login'><CgProfile /></a>
        </BrowserRouter>
    );
};