import Footer from "./Footer";
import "./section.css"

function Section() {
    return (
      <section className="sobre">
        <div className="bola">
          <img src="imagens/combo.png" />
        </div>
        <div className="center">
          <div className="texto-principal">
            <h1>
              TA COM FOME? <br /> <span style={{ color: "black" }}>VEM</span> DE
              <span style={{ color: "chocolate" }}> BURGER EXPRESS</span>
            </h1>
            <p>
              Nossa dedicação à excelência em serviço, qualidade de alimentos e inovação nos permite atender às diversas preferências e necessidades de nossos clientes em cada mercado em que operamos. Além disso, estamos comprometidos em ser uma força positiva em nossas comunidades, contribuindo para o desenvolvimento econômico, social e ambiental em todos os lugares onde fazemos negócios.
            </p>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
  
  export default Section;