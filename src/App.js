import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Destaques from "./Components/Destaques";
import Espaco from "./Components/Espaco";
import Delivery from "./Components/Delivery";
import Contato from "./Components/Contato";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Destaques />
      <Espaco />
      <Delivery />
      <Contato />
    </div>
  );
}