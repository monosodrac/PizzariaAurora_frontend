import React from 'react';

import Logo from '../Imgs/logo.png';


export default function Header() {
    return (
        <div>
            <header className="navbar navbar-expand-lg sticky-top" id='head'>
                <div className="container">
                    <img className="navbar-brand m-0 section-title" src={Logo} alt="Pizzaria Aurora" />
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu-navegacao">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav className="navbar-collapse collapse animation justify-content-end" id="menu-navegacao">
                        <ul className="nav nav-pills d-block d-md-flex">
                            <li className="nav-item fw-bold">
                                <a href='#dest' className="nav-link">
                                    Destaques
                                </a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a href='#spc' className="nav-link">
                                    Espaço
                                </a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a href='#dlvr' className="nav-link">
                                    Delivery
                                </a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a href='#cont' className="nav-link">
                                    Contato
                                </a>
                            </li>
                            <li className="nav-item fw-bold" id='log'>
                                <a href="/login" className="nav-link">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};