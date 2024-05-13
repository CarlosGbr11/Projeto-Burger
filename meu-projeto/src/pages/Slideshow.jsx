import React, { useState } from "react";
import "../styles.css";

function Slideshow({ onSlideChange }) {
    const textos = ['Quem Somos?', 'Nosso Objetivo'];
    const [indiceAtual, setIndiceAtual] = useState(0);

    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % textos.length);
        onSlideChange(textos[(indiceAtual + 1) % textos.length]);
    };

    const voltarSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice - 1 + textos.length) % textos.length);
        onSlideChange(textos[(indiceAtual - 1 + textos.length) % textos.length]);
    };

    return (
        <div className="slideshow">
            <div className="texto-slide">
                <h1>{textos[indiceAtual]}</h1>
            </div>

            <div className="botao-slide">
                <button onClick={voltarSlide}>Anterior</button>
                <button onClick={proximoSlide}>Próximo</button>
            </div>
        </div>
    );
}

export default Slideshow;
