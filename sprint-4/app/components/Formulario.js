"use client";

import Script from "next/script";
import { useGoogle } from "../hooks/useGoogle";

export default function FormularioApoio() {
  const { botaoRef, nome, numeroApoiador, erro, carregarBotaoGoogle } = useGoogle();

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={carregarBotaoGoogle}
      />

      <section className="formulario-caixa container" aria-labelledby="apoio-titulo">
        <div className="formulario">
          <h2 id="apoio-titulo" className="formulario-titulo">
            Apoie a Iniciativa
          </h2>
          <p className="formulario-descricao">
            Entre com sua conta Google para apoiar o Raluguva.
          </p>

          {!nome ? (
            <div className="google-login-area">
              <div ref={botaoRef} />
            </div>
          ) : (
            <p className="google-login-sucesso" role="status">
              Bem-vindo(a), <strong>{nome}</strong>! Você é o apoiador nº{" "}
              <strong>{numeroApoiador}</strong>. Obrigado por apoiar nossa iniciativa.
            </p>
          )}

          {erro && (
            <p className="google-login-erro" role="alert">
              {erro}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
