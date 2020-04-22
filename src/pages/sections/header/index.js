import React from 'react';
import {Link} from 'react-router-dom'


import './style.css';

import Logo from '../../../assets/logo-p.png';

export default function Header(){
    return(
        <header className="container-header">
            <img src={Logo} alt="Logo"/>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/news" className="link">
                            Notícias
                        </Link>
                    </li>
                    <li>
                        <Link to="/ecomerce" className="link">
                            Loja Virtual
                        </Link>
                    </li>
                    <li>
                        <Link to="/mapa" className="link">
                            Mapa
                        </Link>
                    </li>
                </ul>
                <div className="buttons">
                    <button>Registrar</button>
                    <button>Login</button>
                </div>
            </nav>
        </header>
    ) 
}