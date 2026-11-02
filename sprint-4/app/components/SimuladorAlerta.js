"use client";

import { useAlertas } from "../hooks/useAlertas";

const tiposDeAlerta = [
  { limite: 24, nome: "Campainha", icone: "🔔" },
  { limite: 49, nome: "Buzina", icone: "🚗" },
  { limite: 74, nome: "Alarme", icone: "🚨" },
  { limite: 100, nome: "Sirene", icone: "🚨" },
];

const direcoesEmPortugues = {
  North: "Norte",
  East: "Leste",
  South: "Sul",
  West: "Oeste",
};

function encontrarTipoDeAlerta(codigo) {
  return tiposDeAlerta.find((tipo) => codigo <= tipo.limite) || tiposDeAlerta[3];
}

export default function SimuladorAlerta() {
  const { alertaAtual, carregando, erro, simularAlerta } = useAlertas();
  const tipo = alertaAtual ? encontrarTipoDeAlerta(alertaAtual.codigoSom) : null;

  return (
    <div className="simulador-alertas">
      <p className="simulador-alertas-legenda">Demonstração simulada</p>

      <button
        className="simulador-alertas-botao"
        type="button"
        onClick={simularAlerta}
        disabled={carregando || Boolean(erro)}
      >
        {carregando ? "Carregando alertas..." : "Simular alerta sonoro"}
      </button>

      {erro && (
        <p className="simulador-alertas-feedback" role="alert">
          {erro}
        </p>
      )}

      {alertaAtual && tipo && (
        <div className="simulador-alertas-resultado" role="status" aria-live="polite">
          <span className="simulador-alertas-icone" aria-hidden="true">
            {tipo.icone}
          </span>
          <div>
            <p className="simulador-alertas-tipo">{tipo.nome}</p>
            <p className="simulador-alertas-detalhes">
              {alertaAtual.decibeis} dB ·{" "}
              {direcoesEmPortugues[alertaAtual.direcao] || alertaAtual.direcao}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
