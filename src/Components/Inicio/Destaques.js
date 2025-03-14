import React from "react";
import ImgCard from '../../Styles/Imgs/cardapio.png'

export default function Destaques() {
  return (
    <div>
      <div className="hsection" id="dest">
        <h2>Destaques</h2>
      </div>
      <section className="destaques">
        <div className="container">
          <ul className="destaques__list">
            <li className="destaques__list__item">
              <a href="/cardapio">
                <img src={ImgCard} alt="Anúncio Cardápio" />
              </a>
            </li>
            <li className="destaques__list__item">
              <p className="title">
              Preservamos a essência da tradição na pizza, elevando-a com ingredientes selecionados, técnicas autênticas e uma pitada de inovação para surpreender seu paladar!
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}