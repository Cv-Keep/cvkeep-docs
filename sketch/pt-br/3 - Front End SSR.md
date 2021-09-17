# Front End SSR

Quando você roda `npm run serve` no projeto `cvkeep-frontend`, vc na verdade está rodando o Vue Built-in WebPack Server. Este é um built-in server para desenvolvimento apenas.  

Uma vez que vc gera uma build, ela deve ser servida por um server de verdade. É claro, se vc simplesmente dropar sua pasta `dist` em algum lugar no seu host e acessa-la diretamente, talvez funcione; mas essa não é a melhor estratégia, e vc vai perder partes importantes do maquinário: SEO, Server Cache, Observability, etc.

Então, ao rodar a sua build, vc precisa o rodar o SSR Server. É simplesmente uma aplicação Express que entrega a build. Esta aplicação é responsável por algumas estratégias siples de cache e metatags injection.

Note que a "SSR" engine é muito muito muito simples por enquanto, nenhuma dependencia (sim, Vanilla JS SSR) e está ali simplesmente pra injetar as metatags. Se vc vai rodar uma plataforma comercial e quer fazr um marketing massivo, vc precisará implementar uma Vue SSR mais robusta.

# The Front End Server

Os arquivos do `Front End Server` ficam localizados na pasta `server` na raiz do projeto `cvkeep-frontend`. Isso é o que será executado em produção também. Antes de executa-lo, vc deve configurar algumas entries na sua `.env.local` ou `.env.production`:

```bash
# Porta do front server
FRONT_SERVER_PORT=9090

# URL do front server
# Sera bem diferente em prod, claro 
FRONT_SERVER_APP_URL="http://localhost:9090"

# Onde esta o card png para preview SEO (URL)
SEO_CARD_IMAGE_URL="http://localhost:9090/seo/card.png"

# usuário twitter da sua aplicação
SEO_TWITTER_USER="username"
```

Uma vez que vc tenha configurado a env, vc deve assegurar que há uma build da sua aplicação pra ser servida. Se vc ver uma pasta `dist` na raiz do projeto, há uma build, do contrario, vc deve executar:

```bash
# se vc está em modo local, e fará a build
# utilizando a .env.local
npm run build:local

# se vc está em modo de produção, e fará a build
# utilizando a .env.production
npm run build
``` 

Agora que vc tem sua build, vamos rodar o Front Server

# Rodando o Front End Server

Execute os seguintes comandos:

```bash
# utilizara a env de acordo com o mode
npm run serve:ssr

# força o uso da .env.local
npm run serve:prod
``` 

Isso é tudo, se vc está rodando com configurações padrão, basta abrir o endereço `http://localhost:9090` e a aplicação será servida. Isso pode ser especialmente util para debugar coisas que acontecem apenas em prod.