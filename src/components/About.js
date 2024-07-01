import React from "react";
import ImgSobre from '../imgs/img-sobre.png'
import ImgLogo from '../imgs/logo.png'

export default function About() {
  return (
    <div>
      <section className="about">
        <div className="container">
          <div class="about__img">
            <img src={ImgSobre} alt="Ambiente interno do restaurante" />
          </div>
          <div className="about__text">
            <div class="about__text__head">
              <img src={ImgLogo} alt="Logo do restaurante" />
              <h2>L'Ange</h2>
            </div>
            <p className="about__text__p">
            Inspirada nas vibrantes vibrações dos rooftops, a L’Ange traz uma abordagem revolucionária, combinando a cozinha contemporânea com uma seleção exclusiva de coquetéis artesanais, criados por especialistas em mixologia de destaque na América Latina. Em nossos espaços, os clientes desfrutam não apenas de delícias culinárias, mas também de panoramas deslumbrantes, convidando-os a explorar novos horizontes de sabor e estilo. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}