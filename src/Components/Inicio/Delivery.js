import React from "react";
import ImgIFood from '../../Styles/Imgs/ifood.png'

export default function Delivery() {
    return(
        <div>
            <div className="hsection" id="dlvr">
                <h2>Delivery</h2>
            </div>
            <section className="delivery">
                <div className="container">
                    <img src={ImgIFood} alt="Logo do Ifood" />
                    <div className="delivery__text">
                        <h4>
                            Para comer em casa
                        </h4>
                        <p>
                            Quer receber na sua casa? <br />
                            Você pode optar pelo iFood. Não esqueça de <br />
                            consultar as taxas e disponibilidade na sua região.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}