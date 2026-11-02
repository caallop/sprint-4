"use client";

import { useCallback, useRef, useState } from "react";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

function lerNomeDaConta(credencial) {
  const payload = credencial.split(".")[1];
  const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
  const binario = window.atob(base64);
  const bytes = Uint8Array.from(binario, (caractere) => caractere.charCodeAt(0));
  const dados = JSON.parse(new TextDecoder().decode(bytes));

  return typeof dados.name === "string" ? dados.name : "";
}

export function useGoogle() {
  const botaoRef = useRef(null);
  const [nome, setNome] = useState("");
  const [numeroApoiador, setNumeroApoiador] = useState(null);
  const [erro, setErro] = useState("");

  const receberCredencial = useCallback((resposta) => {
    try {
      const nomeDaConta = lerNomeDaConta(resposta.credential);
      if (!nomeDaConta) {
        setErro("Não foi possível obter o nome dessa conta Google.");
        return;
      }

      setErro("");
      setNumeroApoiador(Math.floor(Math.random() * 1000) + 1);
      setNome(nomeDaConta);
    } catch {
      setErro("Não foi possível ler os dados retornados pelo Google.");
    }
  }, []);

  const carregarBotaoGoogle = useCallback(() => {
    if (!GOOGLE_CLIENT_ID) {
      setErro("Configure o Client ID do Google para ativar o login.");
      return;
    }

    if (!window.google?.accounts?.id || !botaoRef.current) {
      setErro("Não foi possível carregar o serviço de login do Google.");
      return;
    }

    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: receberCredencial,
    });
    botaoRef.current.replaceChildren();
    window.google.accounts.id.renderButton(botaoRef.current, {
      type: "standard",
      theme: "filled_blue",
      size: "large",
      text: "signin_with",
      shape: "pill",
      logo_alignment: "left",
      width: 320,
      locale: "pt-BR",
    });
  }, [receberCredencial]);

  return { botaoRef, nome, numeroApoiador, erro, carregarBotaoGoogle };
}
