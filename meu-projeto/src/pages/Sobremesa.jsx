import React from "react";
import "./sobremesa.css"
import { Link } from 'react-router-dom';

const Sobremesa = () => {

    const sobremesas = [
        { nome: "Sundae Morango", imagem: "imagens/shake1.png" },
        { nome: "Sundae Chocolate", imagem: "imagens/shake2.png" },
        { nome: "Sundae Caramelo", imagem: "imagens/shake3.png" },
        { nome: "Shake Caramelo", imagem: "imagens/shake4.png" },
        { nome: "Shake Browniee", imagem: "imagens/shake5.png" },
        { nome: "Shake Morango", imagem: "imagens/shake6.png" },
        { nome: "Shake Baunilha", imagem: "imagens/shake7.png" },
        { nome: "Shake Doce de Leite", imagem: "imagens/shake8.png" },
    ];

    return(
        <div className="sobremesa">
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
        <div className="sobremesa-list">
        {sobremesas.map((sobremesa, index) => (
                    <div key={index} className="sobremesa-item">
                        <div className="imagem-sobremesa">
                        <img src={sobremesa.imagem} alt={sobremesa.nome} />
                        </div>
                        <div className="nome-sobremesa">
                        <p>{sobremesa.nome}</p>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    )
}
export default Sobremesa;