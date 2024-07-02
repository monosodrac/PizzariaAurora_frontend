import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destaques from "./components/Destaques";
import Espaco from "./components/Espaco";
import Delivery from "./components/Delivery";
import Contato from "./components/Contato";

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