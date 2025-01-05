import React from "react";

import Pizza1 from "../../Styles/Imgs/pizza1-1.jpg";
import Pizza2 from "../../Styles/Imgs/pizza1-2.jpg";
import Pizza3 from "../../Styles/Imgs/pizza2-1.jpg";
import Pizza4 from "../../Styles/Imgs/pizza2-2.jpg";
import Beb1 from "../../Styles/Imgs/beb1.jpg";
import Beb2 from "../../Styles/Imgs/beb2.jpg";

export default function Cardapio() {
    return (
        <div>
            <div className="hsection" id="cont">
                <h2>Cardápio</h2>
            </div>
            <section id="cardapio" class="pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <aside class="col-md-2">
                            <nav class="nav nav-pills flex-column nav-cardapio">
                                <button type="button" data-bs-toggle="tab" data-bs-target="#salg" class="fw-bold text-start nav-link text-colored active">Pizzas Salgadas</button>
                                <button type="button" data-bs-toggle="tab" data-bs-target="#doces" class="fw-bold text-start nav-link text-colored">Pizzas Doces</button>
                                <button type="button" data-bs-toggle="tab" data-bs-target="#bebs" class="fw-bold text-start nav-link text-colored">Bebidas</button>
                            </nav>
                        </aside>
                        <div class="menu col-md-10">
                            <div class="tab-content">
                                <div class="tab-pane active" id="salg">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <a href="/login">
                                                <img class="d-block w-100" src={Pizza1} alt="Pizza de Frango com Bacon" />
                                                <h5 class="text-colored fw-bold mt-2">Pizza de Frango com Bacon</h5>
                                                <p>
                                                    Frango, Bacon, Milho, e Azeitona.
                                                </p>
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <a href="/login">
                                                <img class="d-block w-100" src={Pizza2} alt="Pizza de Mussarela" />
                                                <h5 class="text-colored fw-bold mt-2">Pizza de Mussarela</h5>
                                                <p>
                                                    Mussarela, Tomate, Cebola, e Azeitona.
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="doces">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <a href="/login">
                                                <img class="d-block w-100" src={Pizza3} alt="Pizza de Chocolate com Morango" />
                                                <h5 class="text-colored fw-bold mt-2">Pizza de Chocolate com Morango</h5>
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <a href="/login">
                                                <img class="d-block w-100" src={Pizza4} alt="Pizza de M&M" />
                                                <h5 class="text-colored fw-bold mt-2">Pizza de M&M</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="bebs">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <a href="/login">
                                                <img class="d-block w-100" src={Beb1} alt="Coca Cola" />
                                                <h5 class="text-colored fw-bold mt-2">Coca Cola</h5>
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <a href="/login">
                                                <img class="d-block w-100" src={Beb2} alt="Água sem gás" />
                                                <h5 class="text-colored fw-bold mt-2">Água sem gás</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


// {products().map((item, index) => (
//     <a href={item.link}>
//         <div className="" key={index}>
//             <img class="d-block w-100" src={item.imagem} alt="Pizza de Frango com Bacon" />
//             <h5 class="text-colored fw-bold mt-2">{item.nome}</h5>
//             <p>
//                 {item.descricao}
//             </p>
//         </div>
//     </a>
// ))}