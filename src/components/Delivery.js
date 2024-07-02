import React from "react";
import ImgIFood from '../imgs/ifood.png'

export default function Delivery() {
    return(
        <div>
            <div class="hsection" id="dlvr">
                <h2>Delivery</h2>
            </div>
            <section class="delivery">
                <div class="container">
                    <img src={ImgIFood} alt="Logo do Ifood" />
                    <div class="delivery__text">
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