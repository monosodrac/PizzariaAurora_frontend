import React from "react";
import ImgCard from '../Imgs/cardapio.png'
import ImgRod from '../Imgs/rodizio.png'
import ImgProm from '../Imgs/promocoes.png'

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
              <a href="/maintenance">
                <img src={ImgRod} alt="Anúncio Rodízio" />
              </a>
            </li>
            <li className="destaques__list__item">
              <a href="/maintenance">
                <img src={ImgProm} alt="Anúncio Promoções" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}