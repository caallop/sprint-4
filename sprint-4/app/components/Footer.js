import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div id="equipe" className="cards container">
        <div className="cards-information">
          <Image
            src="/img/equipe/guilherme.jpg"
            alt="imagem do integrante guilherme do grupo"
            width={200}
            height={200}
          />
          <p className="nome">Guilherme Rosa</p>
          <p className="roles">
            Desenvolvedor visual do projeto, responsável pelo layout.
          </p>
        </div>

        <div className="cards-information">
          {" "}
          <Image
            src="/img/equipe/luiz.jpg"
            alt="imagem do integrante luiz do grupo"
            width={200}
            height={200}
          />
          <p className="nome">Luiz Felipe</p>
          <p className="roles">Desenvolvedor Back-end da solução, em Python.</p>
        </div>

        <div className="cards-information">
          {" "}
          <Image
            src="/img/equipe/rafa.jpg"
            alt="imagem do integrante rafael do grupo"
            width={200}
            height={200}
          />
          <p className="nome">Rafael Boneti</p>
          <p className="roles">
            Apresentador da marca, realizando diversos modelos de uso.
          </p>
        </div>
      </div>

      <div className="container">
        <div id="contato">
          <a href="#" className="fi">
            <Image
              src="/img/icon/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a href="#" className="fi">
            <Image
              src="/img/icon/github.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
          </a>
          <a href="#" className="fi">
            <Image
              src="/img/icon/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
            />
          </a>
          <a href="#" className="fi">
            <Image
              src="/img/icon/youtube.svg"
              alt="YouTube"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
