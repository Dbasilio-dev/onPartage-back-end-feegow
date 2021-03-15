import React from "react";
import logo from "../../assets/images/logo.svg";
import { Cadastro, Acessar } from "../Button/Button";
import "./Header.css";
// import styles from '../Button/Button.module.css'
// import { Button } from '@material-ui/core'
import {
  Navbar,
  Nav
} from "react-bootstrap";

export const Header = (props) => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand href="#home">
          <img className="header__imagem" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto header__nav">
            <Nav.Link className="header__nav__item" href="#">Início</Nav.Link>
            <Nav.Link className="header__nav__item" href="#quem-somos">Quem somos</Nav.Link>
            <Nav.Link className="header__nav__item" href="#planos">Planos</Nav.Link>
            <Nav.Link className="header__nav__item" href="#contato">Contato</Nav.Link>
            <Nav.Link className="header__nav__item" href="#sou-funcionario">Sou funcionário</Nav.Link>
          </Nav>
          <Nav className="header__nav__btns">
            <Acessar>Acessar</Acessar>
            <Cadastro>Cadastre-se</Cadastro>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <img className="header__imagem" src={logo}/>
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
            </div> */}
    </header>
  );
};
