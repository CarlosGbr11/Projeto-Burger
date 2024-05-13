import React from "react";
import { Link } from "react-router-dom";
import "./bebida.css"

const Bebida = () => {
    const Bebidas = [
        {nome:"Água Mineral",imagem:"imagens/bebida1.png"},
        {nome:"Del Valle Uva 700ml",imagem:"imagens/bebida2.png"},
        {nome:"Del Valle Uva 500ml",imagem:"imagens/bebida3.png"},
        {nome:"Del Valle Uva 300ml",imagem:"imagens/bebida4.png"},
        {nome:"Del Valle Laranja 700m",imagem:"imagens/bebida5.png"},
        {nome:"Del Valle Laranja 500m",imagem:"imagens/bebida6.png"},
        {nome:"Del Valle Laranja 300m",imagem:"imagens/bebida7.png"},
        {nome:"Coca-Cola 700ml",imagem:"imagens/bebida8.png"},
        {nome:"Coca-Cola 500ml",imagem:"imagens/bebida9.png"},
        {nome:"Coca-Cola 300ml",imagem:"imagens/bebida10.png"},
        {nome:"Fanta Laranja 700ml",imagem:"imagens/bebida11.png"},
        {nome:"Fanta Laranja 500ml",imagem:"imagens/bebida12.png"},
        {nome:"Fanta Laranja 300ml",imagem:"imagens/bebida13.png"},
    ];

    return(
        <div className="bebida">
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
        <div className="bebida-list">
        {Bebidas.map((bebida, index) => (
                    <div key={index} className="bebida-item">
                        <div className="imagem-bebida">
                        <img src={bebida.imagem} alt={bebida.nome} />
                        </div>
                        <div className="nome-bebida">
                        <p>{bebida.nome}</p>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    )
}
export default Bebida;
