import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>Copyright © 2022 - Todos os direitos reservados.</p>
      <div className="redes-sociais">
        <a href="https://www.instagram.com" target="_blank">
          <img src="imagens/icone-instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <img src="imagens/icone-facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src="imagens/icone-twitter.png" alt="Twitter" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

  