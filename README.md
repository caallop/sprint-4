# RALUGUVA — Sprint 4

## Sobre o projeto

O RALUGUVA transforma sons do ambiente em informações visuais para apoiar pessoas surdas ou com deficiência auditiva. Nesta Sprint 4, o projeto evolui com React e Next.js, mantendo a proposta das etapas anteriores.

## Tecnologias

- React e Next.js
- JavaScript e JSX
- CSS
- Google Identity Services para exibir o nome da conta Google
- MockAPI para simular dados de alertas sonoros
- GitHub e Vercel

## Estrutura do projeto

- `sprint-4/app/components`: componentes da navegação, apresentação, público, formulário, rodapé e demonstração de alertas.
- `sprint-4/app/hooks`: hooks personalizados `useGoogle` e `useAlertas`.
- `sprint-4/app/styles`: estilos da aplicação e regras de responsividade.
- `sprint-4/public`: imagens e demais arquivos públicos.

## Funcionalidades

- Página responsiva para Desktop, Tablet e Mobile.
- Login com Google que exibe o nome da conta e um número de apoiador gerado aleatoriamente. Esses dados ficam apenas na página e não são salvos no `localStorage`.
- Demonstração de alerta sonoro no cartão “O radar visual para o seu dia a dia”. O botão busca os registros da MockAPI e seleciona um para mostrar o tipo de alerta, os decibéis e a direção.
- Os alertas são simulados e não representam uma leitura real do microfone.

## Configurar o login com Google

Crie um arquivo `.env.local` dentro de `sprint-4` — no mesmo nível do `package.json` — com o Client ID OAuth da aplicação Web:

```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=seu-client-id.apps.googleusercontent.com
```

Cadastre `http://localhost:3000` como origem JavaScript autorizada no Google Cloud. Se o app OAuth estiver em modo de teste, adicione as contas Google que serão usadas nos testes como usuários de teste.

## API de alertas

A demonstração consome a API:

`https://6ae7f6a856b2ee1e5440afdc.mockapi.io/alertas`

Cada registro possui `codigoSom`, `decibeis`, `direcao` e `id`. O código do som é convertido na interface em Campainha, Buzina, Alarme ou Sirene; as direções em inglês são mostradas em português.

## Instalar e executar

É necessário ter Node.js e npm instalados. No terminal, entre na pasta do projeto Next.js:

```bash
cd sprint-4
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador. Para criar a versão de produção local:

```bash
npm run build
npm run start
```

## Uso de inteligência artificial

A Inteligência Artificial foi usada, principalmente para resolver problemas e tirar dúvidas do codigo. Toda a implementação e alterção direta do codigo foi feita pela equipe.

## Repositório e deploy

- GitHub: [sprint-4-webdev-front-end](https://github.com/caallop/sprint-4-webdev-front-end)

- Vercel: https://sprint-4-azure.vercel.app/

## Integrantes

Os nomes completos e RMs dos integrantes estão no arquivo `integrantes.txt`.
