import React from 'react';
import Logo from '../Imgs/logo.png';

export default function Header() {
    return(
        <div>
            <header id='head'>
                <div className="container">
                    <img src={Logo} alt="Pizzaria Aurora" />
                    <nav>
                        <ul>
                            <li>
                                <a href='#dest'>
                                    Destaques
                                </a>
                            </li>
                            <li>
                                <a href='#spc'>
                                    Espaço
                                </a>
                            </li>
                            <li>
                                <a href='#dlvr'>
                                    Delivery
                                </a>
                            </li>
                            <li>
                                <a href='#cont'>
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}