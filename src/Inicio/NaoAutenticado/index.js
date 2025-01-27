import React from "react";

import { CgProfile } from "react-icons/cg";
import { TbCircleArrowUp } from "react-icons/tb";

import Header from '../../Components/Header/Main/Header';
import Hero from "../../Components/Inicio/Hero";
import Destaques from "../../Components/Inicio/Destaques";
import Contato from "../../Components/Footer/Main/Contato";

import "../../Styles/main.scss";

export default function Inicio() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Destaques />
            </main>
            <a href='/login' className='btn__login'><CgProfile /></a>
            <a href='#head' className='btn__up'><TbCircleArrowUp /></a>
            <Contato />
        </div>
    );
};