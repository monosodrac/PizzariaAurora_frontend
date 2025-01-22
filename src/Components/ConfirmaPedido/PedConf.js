import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function PedidoConf() {
    return (
        <div>
            <div className="hsection" id="dlvr">
                <h2>Confirmação do Pedido</h2>
            </div>
            <section className="delivery">
                <div className="container">
                    <div className="delivery__text">
                        <h4>
                            Pizza de Frango com Bacon.
                        </h4>
                        <p>
                            Frango, Bacon, Milho e Azeitona.
                        </p>
                        <p>
                            Endereço: <br />
                            Rua Lorem, 66 <br />
                            Vila Luciano <br />
                            Senac SP
                        </p>
                        <p>
                            Tempo estimado para entrega: 33 minutos.
                        </p>
                        <p>
                            Valor: R$66,66
                        </p>
                        <a href="/" className="back"><IoMdArrowRoundBack /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}