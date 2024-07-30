import React from "react";
import ImgLogo from '../Imgs/logo.png';
import Iframe from "react-iframe";

import '../Dashboard/Empresa';

export default function Contato() {
    return (
        <div>
            <div className="hsection" id="cont">
                <h2>Contato</h2>
            </div>
            <footer className="contato">
                <div className="container">
                    <div className="contato__list">
                        <img src={ImgLogo} alt="Logo da pizzaria" />
                        <p>
                            (14) 2924-7968 <br />
                            PizzariaAurora@gmail.com <br />
                            1798 Felipe Alameda - Ubiretama, SP / 15472-261
                        </p>
                        <div className="maps">
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14616.711249417065!2d-46.71751499176024!3d-23.6695983575832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5036539648d5%3A0x78501a72680ea23a!2sCentro%20Universit%C3%A1rio%20Senac%20-%20Campus%20Santo%20Amaro!5e0!3m2!1sen!2sbr!4v1719185505596!5m2!1sen!2sbr" />
                        </div>
                        <div className="rodape">
                            <h2>
                                &copy; Desenvolvido por Mono <br />
                                Projeto final para unidade curricular 3 <br />
                                Técnico em informática para Internet - Senac
                            </h2>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};