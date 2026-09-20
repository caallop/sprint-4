import Image from "next/image";

export default function Publico() {
  return (
    <div id="publico" className="publico container">
      <div className="publico-wrapper">
        <div className="publico-grid">
          <div id="solucao" className="publico-card card-headline">
            <div className="forma-decorativa"></div>

            <div className="card-conteudo">
              <h1 className="titulo-principal">
                O radar visual para o seu dia a dia
              </h1>

              <p className="texto-metrica">
                {" "}
                Desenvolvido especialmente para pessoas surdas ou com
                deficiência auditiva, o Raluguva transforma o cotidiano de quem
                precisa navegar pelo mundo visualmente.
              </p>

              <p className="texto-metrica">
                {" "}
                Para esse público, a solução é vital porque devolve a autonomia
                e aumenta a segurança nas ruas, em casa ou no trabalho.
              </p>
            </div>
          </div>

          <div className="publico-coluna-direita">
            <div className="publico-card card-social">
              <div className="card-conteudo">
                <p className="texto-descricao">
                  Mais segurança, autonomia e confiança para pessoas surdas ou
                  com deficiência auditiva explorarem o mundo.{" "}
                </p>
              </div>
            </div>

            <div className="publico-card card-imagem">
              <div className="imagem-container">
                <Image
                  className="imagem-fundo"
                  src="/img/generic/publico.jpg"
                  alt="Imagem descritiva da seção público alvo"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
