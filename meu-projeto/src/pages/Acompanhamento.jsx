import React from "react";
import { Link } from "react-router-dom";
import "./acompanhamento.css"

const Acompanhamento = () => {

    const Acompanhamentos = [
        { nome: "Bacon Crispy", imagem: "imagens/acp1.png" },
        { nome: "Batata G Cheddar Bacon", imagem: "imagens/acp2.png" },
        { nome: "Batata M Cheddar Bacon", imagem: "imagens/acp3.png" },
        { nome: "Nuggets 20 unidades", imagem: "imagens/acp4.png" },
        { nome: "Nuggets 40 unidades", imagem: "imagens/acp5.png" },
    ]

    return (
        <div className="acompanhamento">
            <div className="nome-sobre">
                <h1>NOSSOS PRODUTOS</h1>
                <div className="menu2">
                    <div className="link-item">
                        <Link to="/cardapio">SANDUÍCHES</Link>
                    </div>
                    <div className="link-item">
                        <Link to="/acompanhamento">ACOMPANHAMENTOS</Link>
                    </div>
                    <div className="link-item">
                        <Link to="/bebida">BEBIDAS</Link>
                    </div>
                    <div className="link-item">
                        <Link to="/sobremesa">SOBREMESAS</Link>
                    </div>
                </div>
            </div>
            <div className="acompanhamento-list">
                {Acompanhamentos.map((acompanhamento, index) => (
                    <div key={index} className="acompanhamento-item">
                        <div className="imagem-acompanhamento">
                            <img src={acompanhamento.imagem} alt={acompanhamento.nome} />
                        </div>
                        <div className="nome-acompanhamento">
                            <p>{acompanhamento.nome}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Acompanhamento;