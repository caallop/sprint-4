"use client";

import { useCallback, useEffect, useState } from "react";

const API_ALERTAS = "https://6ae7f6a856b2ee1e5440afdc.mockapi.io/alertas";

export function useAlertas() {
  const [alertas, setAlertas] = useState([]);
  const [alertaAtual, setAlertaAtual] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const controlador = new AbortController();

    async function buscarAlertas() {
      try {
        const resposta = await fetch(API_ALERTAS, {
          signal: controlador.signal,
        });

        if (!resposta.ok) {
          throw new Error("A API não conseguiu carregar os alertas.");
        }

        const dados = await resposta.json();
        if (!Array.isArray(dados) || dados.length === 0) {
          throw new Error("A API não retornou alertas para simular.");
        }

        setAlertas(dados);
        setErro("");
      } catch (erroDaBusca) {
        if (erroDaBusca.name !== "AbortError") {
          setErro("Não foi possível carregar os alertas agora.");
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    buscarAlertas();

    return () => controlador.abort();
  }, []);

  const simularAlerta = useCallback(() => {
    if (alertas.length === 0) return;

    const indiceAleatorio = Math.floor(Math.random() * alertas.length);
    setAlertaAtual(alertas[indiceAleatorio]);
  }, [alertas]);

  return { alertaAtual, carregando, erro, simularAlerta };
}
