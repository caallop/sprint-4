"use client";

import React, { useState, useEffect } from "react";

export default function FormularioApoio() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuarioApoio");
    if (usuarioSalvo) {
      const dados = JSON.parse(usuarioSalvo);
      setNome(dados.nome);
      setSenha(dados.senha);
      setMensagem(`O usuário ${dados.nome} logou!`);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");
    setMensagem("");

    if (nome.trim().length <= 5) {
      setErro("Erro: O nome deve possuir mais de 5 letras.");
      return;
    }

    const temMaiuscula = /[A-Z]/.test(senha);
    const temEspecial = /[^a-zA-Z0-9]/.test(senha);

    if (!temMaiuscula || !temEspecial) {
      setErro(
        "Erro: A senha deve conter pelo menos uma letra maiúscula e um caractere especial.",
      );
      return;
    }

    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    const msgSucesso = `Bem vindo ${nome}! Você é o ${numeroAleatorio}º a apoiar nossa iniciativa!`;
    setNome("");
    setSenha("");
    setMensagem(msgSucesso);

    localStorage.setItem("usuarioApoio", JSON.stringify({ nome, senha }));
  };

  const handleExcluir = () => {
    localStorage.removeItem("usuarioApoio");
    setNome("");
    setSenha("");
    setMensagem("");
    setErro("");
  };

  return (
    <div className="formulario-caixa container">
      <div className="rounded formulario w-full">
        <h2 className="text-4xl font-bold mb-5 text-gray-800 text-center">
          Apoie a Iniciativa
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex-col content-center"
        >
          <div>
            <label
              htmlFor="nome"
              className="block mb-1 text-lg font-medium font-bold"
            >
              Nome:
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="campo border-2 mb-2 p-1 border-black-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nome"
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block mb-1 text-lg font-medium font-bold"
            >
              Senha:
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="campo mb-2 p-1 border-2 border-black-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
              placeholder="Senha"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
          >
            Submit
          </button>
        </form>

        <div className="mt-4">
          {erro && (
            <div className="p-3 bg-red-100 text-red-700 font-semibold rounded border border-red-200">
              {erro}
            </div>
          )}

          {mensagem && (
            <div className="p-3 bg-green-100 text-green-700 font-semibold rounded border border-green-200 flex justify-between items-center">
              <span>{mensagem}</span>
              <button
                onClick={handleExcluir}
                className="ml-4 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded font-bold transition-colors"
              >
                Excluir
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
