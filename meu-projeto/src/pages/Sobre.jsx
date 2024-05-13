import React, { useState } from "react";
import Slideshow from "../pages/Slideshow";
import "../styles.css";

function Sobre() {
    const [secaoAtual, setSecaoAtual] = useState('home');

    const secoes = {
        'Quem Somos?': 'qs',
        'Nosso Objetivo': 'obj',
    };

    const handleSlideChange = (novoTexto) => {
        setSecaoAtual(secoes[novoTexto]);
    };

    return (
        <div className="sobre">
            <div className="slideshow-container">
                <Slideshow onSlideChange={handleSlideChange} />
            </div>

            <div className="secao">
                {secaoAtual === 'qs' && (
                    <h1>Bem-vindo à nossa jornada gastronômica! Somos uma equipe apaixonada por comida e dedicada a criar uma experiência única de hambúrgueres para os amantes da culinária. Com uma combinação irresistível de ingredientes frescos e sabores autênticos, estamos elevando o conceito de hambúrguer a um patamar totalmente novo.
                    </h1>
                )}
                {secaoAtual === 'obj' && (
                    <h1>Em nossa jornada, buscamos reinventar os clássicos favoritos e apresentar criações inovadoras que surpreendam o seu paladar. Cada hambúrguer é cuidadosamente elaborado, desde a seleção dos melhores cortes de carne até a escolha dos acompanhamentos e molhos artesanais que proporcionam uma explosão de sabor em cada mordida.</h1>
                )}
                {}
            </div>
        </div>
    );
}

export default Sobre;
