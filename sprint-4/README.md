# RALUGUVA

Aplicação Next.js do projeto RALUGUVA. A página apresenta a solução e permite que um visitante escolha uma conta Google para exibir o nome retornado durante a sessão atual da página.

## Requisitos

- Node.js
- npm
- Client ID OAuth 2.0 configurado no Google Cloud para aplicação Web

## Configurar o login com Google

1. No Google Cloud Console, crie um Client ID OAuth do tipo **Aplicativo da Web**.
2. Cadastre as origens autorizadas usadas no desenvolvimento e no deploy, por exemplo `http://localhost:3000` e o domínio da aplicação na Vercel.
3. Copie `.env.example` para `.env.local` e preencha `NEXT_PUBLIC_GOOGLE_CLIENT_ID` com o Client ID criado.
4. Configure a mesma variável de ambiente nas configurações do projeto na Vercel.

O hook personalizado `useGoogle` integra o botão do Google Identity Services, lê somente o campo `name` da credencial retornada e gera um número aleatório de apoiador. Nome e número ficam no estado da página e não são gravados no `localStorage`. Esse fluxo exibe os dados escolhidos; ainda não cria uma sessão segura nem protege rotas privadas.

## Demonstração de alertas

O cartão "O radar visual para o seu dia a dia" consulta a API `https://6ae7f6a856b2ee1e5440afdc.mockapi.io/alertas`. O hook `useAlertas` carrega os registros com `useEffect`; ao clicar em "Simular alerta sonoro", um registro é escolhido aleatoriamente e exibido no mesmo cartão. O código do som é apresentado como Campainha, Buzina, Alarme ou Sirene; as direções em inglês são traduzidas para português. Os dados são simulados e não representam uma medição real do microfone.

## Instalar e executar

Na pasta `sprint-4`, execute:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Build de produção

```bash
npm run build
npm run start
```
