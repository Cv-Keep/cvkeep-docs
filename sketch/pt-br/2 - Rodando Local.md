# Rodando Local

Agora que vc configurou toda a stack e todo o ambiente, é hora de rodar o projeto.
Primeiro vc deve ir até a pasta `cvkeep-backend` e rodar os seguintes comandos:

```bash
npm install # apenas na primeira vez
npm run serve
```

Agora para o front, vá para a pasta `cvkeep-frontend`, e rode os seguintes comandos:

```bash
npm install # apenas na primeira vez
npm run serve
```

Isso é tudo. Você deve ter o serviço rodando agora. Apenas navegue para `https://localhost:8080`, e bem vindo a bordo!

# Backend NPM Scripts

On the `cvkeep-backend` project, the following scripts can be useful:

```bash
# lint the codebase
npm run lint

# exec unit tests (jest)
npm run test

# exec unit tests verbose
npm run test:debug

# serve the app
npm run serve

# serve the app (verbose)
npm run serve:debug

# generate fake users on mongo
# see the tests/usergen/index.js file
npm run usergen {dbname} {amount}
```

# Frontend NPM Scripts

Quando estiver em `cvkeep-frontend`, os seguintes NPM Scripts pode ser uteis:

```bash
# build para production
npm run build

# lint para codebase
npm run lint

# serve o front end
npm run serve

# serve o front end em modo SSR 
# utilizando a .env de acordo com o mode
npm run serve:ssr

# serve o front em modo de produção 
# porem utilizando a .env.local
# vc nao deve usar esse script em prod,
# ele existe para simular prod em modo local
npm run serve:prod

# faz uma build local (deve ser executado antes de um serve:ssr)
npm run build:local
``` 

Obs: Os scripts serve:ssr, serve:prod e build:local são relacinados ao Front End SSR. Eles serão melhor discutidos no passo 3.

# Temos tudo rodando

Nesse passo vc já deve ter a plataforma completa rodando local :D