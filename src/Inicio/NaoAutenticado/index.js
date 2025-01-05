import React from "react";

import { CgProfile } from "react-icons/cg";
import { TbCircleArrowUp } from "react-icons/tb";

import Header from '../../Components/Header/Main/Header';
import Hero from "../../Components/Inicio/Hero";
import Destaques from "../../Components/Inicio/Destaques";
import Espaco from "../../Components/Inicio/Espaco";
import Delivery from "../../Components/Inicio/Delivery";
import Contato from "../../Components/Footer/Main/Contato";

import "../../Styles/main.scss";

export default function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Hero />
                <Destaques />
                <Espaco />
                <Delivery />
            </main>
            <a href='/login' className='btn__login'><CgProfile /></a>
            <a href='#head' className='btn__up'><TbCircleArrowUp /></a>
            <footer>
                <Contato />
            </footer>
        </div>
    );
};