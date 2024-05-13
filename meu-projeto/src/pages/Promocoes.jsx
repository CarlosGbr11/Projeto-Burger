import React from "react";
import "./promocoes.css"

const Promocoes = () => {

    const Promocoess = [

        {nome:"Caquinha Baunilha",imagem:"imagens/pm1.png"},
        {nome:"Caquinha Mista",imagem:"imagens/pm2.png"},
        {nome:"Caquinha Doce de Leite",imagem:"imagens/pm3.png"},
        {nome:"Caquinha Recheio Nutella",imagem:"imagens/pm4.png"},
        {nome:"Caquinha Recheio Doce de Leite",imagem:"imagens/pm5.png"},
    ];

    return(
        <div className="promocao">
            <div className="nome-sobre">
                <h1>PROMOÇÕES</h1>
            </div>
        <div className="promocao-list">
        {Promocoess.map((promocoes, index) => (
                    <div key={index} className="promocao-item">
                        <div className="imagem-promocao">
                        <img src={promocoes.imagem} alt={promocoes.nome} />
                        </div>
                        <div className="nome-promocao">
                        <p>{promocoes.nome}</p>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    )
}
export default Promocoes;
