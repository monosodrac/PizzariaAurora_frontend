import React from "react";
import ImgCard from '../imgs/cardapio.png'
import ImgRod from '../imgs/rodizio.png'
import ImgProm from '../imgs/promocoes.png'

export default function Destaques() {
  return (
    <div>
      <div className="hsection" id="dest">
        <h2>Destaques</h2>
      </div>
      <section className="destaques">
        <div className="container">
          <ul className="destaques__list image-text-section--image-full-width-grid">
            <li className="destaques__list__item">
              <a href="building.html">
                <img src={ImgCard} alt="Anúncio Cardápio" />
              </a>
            </li>
            <li className="destaques__list__item">
              <a href="building.html">
                <img src={ImgRod} alt="Anúncio Rodízio" />
              </a>
            </li>
            <li className="destaques__list__item">
              <a href="building.html">
                <img src={ImgProm} alt="Anúncio Promoções" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}