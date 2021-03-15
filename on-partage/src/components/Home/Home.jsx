import { Grow } from "@material-ui/core";
import React from "react";
import imgHomeUm from "../../assets/images/imagem-section-1.svg";
import imgHomeDois from "../../assets/images/imagem-section-2.svg";
import imgHomeTres from "../../assets/images/imagem-section-3.png";
import { Contato } from "../Contato/Contato";
import { Planos } from "../Planos/Planos";
import { Titulo } from "../Titulo/Titulo";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Titulo>Armazenamento em nuvem com segurança e privacidade</Titulo>
      <Grow in={true} timeout={1000}>
        <section className="containerSection">
          <p className="containerSection__texto">
            Cadastre-se e experimente nosso serviço grátis por um mês!
          </p>
          <img className="containerSection__img" src={imgHomeUm} />
        </section>
      </Grow>
      <Grow in={true} timeout={1000}>
        <section className="containerSection">
          <img className="containerSection__img" src={imgHomeDois} />
          <p className="containerSection__texto">
            Vocês no controle dos seus dados
          </p>
        </section>
      </Grow>
      <section className="containerSection">
        <p className="containerSection__texto">
          Acesse seus arquivos de qualquer lugar através do nosso aplicativo
        </p>
        <img className="containerSection__img" src={imgHomeTres} />
      </section>

      <section className="home__tables">
        <Planos
          nomePlano="Bronze"
          infoUm="1 usuário"
          infoDois="2TB (2.000GB)"
          precoMensal="R$ 69,99/mês"
          precoAnual="R$ 65/mês"
        />
        <Planos
          nomePlano="Silver"
          infoUm="6 usuários"
          infoDois="3TB (3.000GB)"
          precoMensal="R$ 99,99/mês"
          precoAnual="R$ 95/mês"
        />
        <Planos
          nomePlano="Gold"
          infoUm="Mais de 3 usuários"
          infoDois="5TB (5.000GB)"
          precoMensal="R$ 79,99/mês"
          precoAnual="R$ 75/mês"
          porUsuario="por usuário"
        />
      </section>

      <Contato />
      <Titulo>Junte-se a nós!</Titulo>
    </>
  );
};
