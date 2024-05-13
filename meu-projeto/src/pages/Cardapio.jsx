import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./cardapio.css";

const Cardapio = () => {
    const hamburgueres = [
        { nome: "Classic Beef", imagem: "imagens/hamburguer1.png" },
        { nome: "Double Beef", imagem: "imagens/hamburguer2.png" },
        { nome: "Burger Delight", imagem: "imagens/hamburguer3.png" },
        { nome: "Habanero Chicken", imagem: "imagens/hamburguer4.png" },
        { nome: "Gourmet Veggie", imagem: "imagens/hamburguer5.png" },
        { nome: "Southwest Chipotle", imagem: "imagens/hamburguer6.png" },
        { nome: "Chicken Ranch", imagem: "imagens/hamburguer7.png" },
        { nome: "Gourmet Grill", imagem: "imagens/hamburguer8.png" },
        { nome: "Italian Sausage", imagem: "imagens/hamburguer9.png" },
        { nome: "BBQ Bacon", imagem: "imagens/hamburguer10.png" },
        { nome: "Gourmet Angus", imagem: "imagens/hamburguer11.png" },
        { nome: "Philly Cheesesteak", imagem: "imagens/hamburguer12.png" },
    ];

    return (
        <div className="produto">
            <div className="nome-sobre">
                <h1>NOSSOS PRODUTOS</h1>
            </div>
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
            <div className="produto-list">
                {hamburgueres.map((hamburguer, index) => (
                    <div key={index} className="produto-item">
                        <div className="imagem-hamburguer">
                            <img src={hamburguer.imagem} alt={hamburguer.nome} />
                        </div>
                        <div className="nome-hamburguer">
                            <p>{hamburguer.nome}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cardapio;