import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi.png'
import userIcon from '../assets/static/user-icon.png'

const Header = () => (
    <header className="header">
        <img
            tabIndex="0"
            className="header__img"
            src={logo} 
            alt="Platzi"
        />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img tabIndex="0" src={userIcon} alt="User" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a 
                        href="/"
                    >Cuenta</a></li>
                <li><a 
                    href="file:///C:/Projects/Aprender_Programacion/JS/Retos/html/inicio-sesion.html?"
                    >Cerrar Sesión</a>
                </li>
            </ul>
        </div>
    </header>
)

export default Header