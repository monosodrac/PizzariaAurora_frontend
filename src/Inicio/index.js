import React from "react";

import Hero from "../Components/Hero";
import Destaques from "../Components/Destaques";
import Espaco from "../Components/Espaco";
import Delivery from "../Components/Delivery";
import Contato from "../Components/Contato";

import "../Styles/main.scss"; 

export default function App() {
    return (
        <div>
            <Hero />
            <Destaques />
            <Espaco />
            <Delivery />
            <Contato />
        </div>
    );
}