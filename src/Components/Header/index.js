import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutenticadoContexto } from '../../Contexts/authContexts';

import Logo from '../../Styles/Imgs/logo-removebg-preview.png';

export default function HeaderNaoAutenticado() {
    const { verificarToken, autenticado } = useContext(AutenticadoContexto);
    verificarToken();

    const navigator = useNavigate();

    function sairSistema() {
        localStorage.clear();
        navigator('/login');
    }

    return (
        <div>
            <header className="navbar navbar-expand-lg sticky-top" id='head'>
                <div className="container">
                    <a href='/'>
                        <img className="navbar-brand m-0 section-title" src={Logo} alt="Pizzaria Aurora" />
                    </a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu-navegacao">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav className="navbar-collapse collapse animation justify-content-end" id="menu-navegacao">
                        <ul className="nav nav-pills d-block d-md-flex">
                            {autenticado === true
                                ?
                                <>
                                    <li className="nav-item fw-bold">
                                        <a href='#dest' className="nav-link">
                                            Destaques
                                        </a>
                                    </li>
                                    <li className="nav-item fw-bold">
                                        <a href='#cont' className="nav-link">
                                            Contato
                                        </a>
                                    </li>
                                    <li className="nav-item fw-bold" id='log'>
                                        <a href="/perfil" className="nav-link">
                                            Perfil
                                        </a>
                                    </li>
                                    <li className="nav-item fw-bold">
                                        <a href="/pedido" className="nav-link">
                                            Pedido
                                        </a>
                                    </li>
                                    <li className="nav-item fw-bold">
                                        <button onClick={sairSistema} className="nav-link">
                                            Sair
                                        </button>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item fw-bold">
                                        <a href='#dest' className="nav-link">
                                            Destaques
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
                                </>
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};