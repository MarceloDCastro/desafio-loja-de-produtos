# Loja de Produtos 🛍️

![Loja de produtos](/.github/screenshot.png)

## 💻 Sobre


Projeto desenvolvido em React, empregando o framework Next.js. A essência da aplicação é uma loja de produtos, contendo diversas funcionalidades como autenticação de usuário, cadastro de produtos e um sistema de carrinho de compras.

O deploy da aplicação foi feito na Vercel, e está disponível neste [endereço](https://desafio-loja-de-produtos.vercel.app/).

## 🚀 Tecnologias


A aplicação foi desenvolvida utilizando as seguintes tecnologias:

- [React.js](https://react.dev/)
- [Next.js](https://nextjs.org/) em sua versão `14.0.4`
- [App Router](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Shadcn](https://ui.shadcn.com/)
- [Lucide](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vercel](https://vercel.com)

## ✨ Features


Principais features da aplicação:

- Autenticação com Google
- Cadastro de produtos
- Carrinho de compras
- Bloqueio de rotas
- Validações de formulário
- Notificações

## 🧑‍💻 Manual de Desenvolvimento

- Você precisará do [Node.js](https://nodejs.org) instalado em seu computador para rodar esta aplicação.
- Foi utilizado o [PNPM](https://pnpm.io/pt/) como gerenciador de pacotes padrão

### Rodando a Aplicação


Para executar o projeto, siga os passos abaixo:</br>

1 - Clonando o projeto.

```bash
  git clone https://github.com/MarceloDCastro/desafio-loja-de-produtos.git
```

2 - Crie um arquivo .env na pasta raiz do projeto. Para conseguir as variáveis do Google, siga a [documentação](https://next-auth.js.org/providers/google).

```bash
  NEXT_PUBLIC_AUTH_SECRET=SEU_SEGREDO
  GOOGLE_CLIENT_ID=VARIAVEL_AQUI
  GOOGLE_CLIENT_SECRET=VARIAVEL_AQUI
```

3 - Instalando as dependências.

```bash
  pnpm i
```

4 - Execute a aplicação.

```bash
  pnpm dev
```

5 - Abra [http://localhost:3000](http://localhost:3000) em seu navegador para acessar a aplicação.

### Contribuindo com a Aplicação


- Crie um fork do projeto
- Siga os passos acima
- Faça pull requests para a branch `develop`

### Padrão de Commit


Foi utilizada a convenção abordada na documentação do [Conventional Commits](https://www.conventionalcommits.org)

Padrão: `[tipo]: [descrição]`</br>
Exemplo: `feat: shopping cart`

- Tipos
  - `feat`: Inclusão de um novo recurso.
  - `fix`: Soluçao de um problema (bug fix).
  - `docs`: Mudanças na documentação.
  - `test`: Alterações em testes, seja criando, alterando ou excluindo testes unitários.
  - `build`: Modificações em arquivos de build e dependências.
  - `perf`: Alterações de código relacionadas a performance.
  - `style`: Alterações referentes a formatações de código, lint, etc.
  - `refactor`: Refatorações que não alterem sua funcionalidade.
  - `chore`: Atualizações de tarefas de build, configurações de administrador, pacotes, etc.
  - `ci`: Mudanças relacionadas a integração contínua.
  - `raw`: Mudanças relacionadas a arquivos de configurações, dados, features, parametros.
  - `revert`: Reversão de um commit anterior

### Comandos principais


- `pnpm i` instala as dependências do projeto
- `pnpm dev` executa a aplicação em modo de desenvolvimento
- `pnpm build` gera a versão estática da aplicação
- `pnpm start` inicia o servidor de desenvolvimento local
- `pnpm lint` busca por problemas de formatação e inconsistências