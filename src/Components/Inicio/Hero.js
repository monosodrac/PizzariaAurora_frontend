import React from "react";
import BgHero from "../../Styles/Imgs/bg-hero.png";
import BtnHero from "../../Styles/Imgs/btn-hero.png";

export default function Hero() {
  return (
    <div>
      <section className="image-text-section image-text-section--image-full-width">
        <img src={BgHero} alt="Imagem promocional" />
        <div className="image-text-section__text_container image-text-section--image-full-width__text_container">
          <h2 className="title">
            Renovamos a tradição <br />
            de fazer a melhor pizza!
          </h2>
          <p className="text">
            Alta qualidade nos ingredientes, tradição no preparo, inovação e talento na criação de sabores únicos.
          </p>
          <a href="/cardapio" className="btn-hero">
            {/* <img src={BtnHero} alt="Veja nosso cadápio" /> */}
            <p>VEJA NOSSO CARDÁPIO</p>
          </a>
        </div>
      </section>
    </div>
  );
}