import React from 'react';
import Img1Esp from '../Imgs/spc-img1.png';
import Img2Esp from '../Imgs/spc-img2.png';
import Img3Esp from '../Imgs/spc-img3.png';
import Img4Esp from '../Imgs/spc-img4.png';
import Img5Esp from '../Imgs/spc-img5.png';

export default function Espaco() {
    return(
        <div>
            <div class="hsection" id="spc">
                <h2>Espaço</h2>
            </div>
            <section class="espaco">
                <div class="container">
                    <ul class="espaco__list">
                        <li class="espaco__list__item" id="img1">
                            <img src={Img1Esp} alt="Pizza pronta" />
                        </li>
                        <div class="grid-3">
                            <li class="espaco__list__item" id="img2">
                                <img src={Img2Esp} alt="Espaço interno do restaurante" />
                            </li>
                            <li class="espaco__list__item" id="img3">
                                <img src={Img3Esp} alt="Espaço interno do restaurante" />
                            </li>
                            <li class="espaco__list__item" id="img4">
                                <img src={Img4Esp} alt="Espaço interno do restaurante" />
                            </li>
                        </div>
                        <li class="espaco__list__item" id="img5">
                            <img src={Img5Esp} alt="Pizza indo ao forno" />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}