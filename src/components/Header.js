import React from 'react';
import Logo from '../imgs/logo.png';

export default function Header() {
    return(
        <div>
            <header>
                <div className="container">
                    <img src={Logo} alt="Pizzaria Aurora" />
                    <nav>
                        <ul>
                            <li>
                                <a>
                                    Destaques
                                </a>
                            </li>
                            <li>
                                <a>
                                    Espaço
                                </a>
                            </li>
                            <li>
                                <a>
                                    Delivery
                                </a>
                            </li>
                            <li>
                                <a>
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