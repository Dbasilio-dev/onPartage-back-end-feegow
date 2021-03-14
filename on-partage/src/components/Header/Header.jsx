import React from 'react'
import logo from '../../assets/images/logo.svg'
import { Cadastro, Acessar } from '../Button/Button'
import './Header.css'
// import styles from '../Button/Button.module.css'
// import { Button } from '@material-ui/core'

export const Header = (props) => {
    return (
        <header>
            <img className="header__imagem" src={logo}/>
            <nav className="header__nav">
                <a className="header__nav__item" href="#">Início</a>
                <a className="header__nav__item" href="#">Planos</a>
                <a className="header__nav__item" href="#">Quem somos</a>
                <a className="header__nav__item" href="#">Contato</a>
                <a className="header__nav__item" href="#">Sou funcionário</a>
            </nav>
            <div>
                <Acessar>Acessar</Acessar>
                <Cadastro>Cadastre-se</Cadastro>
            </div>
        </header>
    )
}
