import Image from "next/image";

export default function Apresentacao() {
  return (
    <div className="principal container">
      <div className="apresentation">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-3xl">Ouvir com os Olhos: O Som do Mundo Ganha Forma.</h1>
        <h2 className="italic font-bold text-[1.45rem] text-[#555555cf]">
          Transforme os sons ao seu redor em avisos visuais simples na tela do
          seu celular ou óculos inteligente. Mais segurança e independência no
          seu dia a dia
        </h2>

        <p>
          Nossa tecnologia funciona como um radar visual para o dia a dia: ela
          'escuta' o ambiente e traduz sons importantes (como buzinas, sirenes
          ou chamadas) em pequenos ícones e luzes na tela do seu celular ou
          óculos inteligente, mostrando exatamente de qual direção o som está
          vindo. É como se os alertas da vida real ganhassem legendas visuais
          instantâneas.
        </p>
      </div>

      <div className="carrossel-wrapper">
        <input type="radio" name="carrossel" id="slide1" defaultChecked />
        <input type="radio" name="carrossel" id="slide2" />
        <input type="radio" name="carrossel" id="slide3" />

        <div className="carrossel-slides">
          <div className="slide slide1">
            <Image
              src="/img/carrosel/image3.png"
              alt="Slide 1"
              width={1200}
              height={800}
            />
          </div>

          <div className="slide slide2">
            <Image
              src="/img/carrosel/image2.png"
              alt="Slide 2"
              width={1200}
              height={800}
            />
          </div>

          <div className="slide slide3">
            <Image
              src="/img/carrosel/image1.png"
              alt="Slide 3"
              width={1200}
              height={800}
            />
          </div>
        </div>

        <div className="carrossel-nav">
          <label htmlFor="slide1" className="nav-dot"></label>
          <label htmlFor="slide2" className="nav-dot"></label>
          <label htmlFor="slide3" className="nav-dot"></label>
        </div>
      </div>
    </div>
  );
}
