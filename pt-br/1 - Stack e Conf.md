# Stack e Configuração

CV Keep é escrito numa stack MEVN (Mongo, Express, Vue e Node), e é focado na simplicidade. Uma vez que vc configurou corretamente suas .envs, a aplicação já vem production-ready e internacionalizada (en e pt-br por default).

# A Stack

Pra rodar local você precisará das seguintes ferramentas:

1. `A Unix-Like system` (Um sistema unix-like tipo Linux ou OSX)
2. `MongoDB`: Uma instancia mongo DB >=4.4.5v.
3. `Node JS` >=10.19.0v
5. `NPM`: Use a versão de acordo com sua versão do Node
4. `An SMTP Server`: Você pode usar o do Gmail, Zoho, Hotmail ou qualquer outro 
5. `Git`: mas é claro. 

Uma vez que você tenha todas as ferramentas acima instaladas e rodando, é hora de ligar os pontos.

# Os Sources

Agora você deve clonar os repositorios `frontend` e `backend` da CV Keep.
Você encontra o frontend [AQUI](https://github.com/Cv-Keep/cvkeep-frontend/) e o backend [AQUI](https://github.com/Cv-Keep/cvkeep-backend/).  

Se você preferir, você pode apenas executar os comandos:

``` js
// clonando o frontened
git clone https://github.com/Cv-Keep/cvkeep-frontend.git

// clonando o backend
git clone https://github.com/Cv-Keep/cvkeep-backend.git
``` 

# Backend `.env`

Vá até sua pasta `cvkeep-backend` e copie o arquivo `.env` para `.env.local`. Estamos fazendo dessa forma porque vamos rodar o projeto de forma local. Ao fazer uma build para deploy, você utilizaria a `.env.production`, etc.

Agora devemos configurar a `env.local` da seguinte maneira:

```bash
# Esse é o base path da sua URL. Se você esta rodando o
# backend a partir da raiz do server, deixe assim mesmo.
# Mas se por algum motivo existe uma subfolder, ou a app
# nao está rodando na raiz do server/url, por exemplo:
# https://whatever.com/my-api/, você deve adicionar o 
# path aqui. por exemplo, no caso acima:  "my-api"
BASE=/

# Porta em que o app backend rodará
PORT=5000

# Linguagem default para as responses (status messages)
DEFAULT_LANG=en

# Nome da marca (se você vai hospedar seu proprio app,
# você deve modificar esse valor)
BRAND_NAME="Cv Keep"

# Aqui deve conter a URL do front. Esta é a default para
# localhost. Para prod deve estar um pouco diferente.
CLIENT_URL=https://localhost:8080

# URL em que estará rodando o backend, (mals pelo nome ruim)
SERVER_URL=http://localhost:5000

# Tamanho máx de arquivo pra upload
UPLOAD_MAX_FILE_SIZE_MB=20

# JNome do Cookie JWT (às vezes utilizado)
JWT_COOKIE_NAME=__CV_APP_SESSION_0001__

# Este deve ser um e-mail valido, é pra onde possíveis
# reclamações e denuncias serão endereçadas
REPORT_EMAIL_ADDRESS=report@email.com

# Este é o seu endereço "no-reply"
NOREPLY_EMAIL_ADDRESS=noreply@email.com

# Se você vai usar autenticação via rede social, vc deve
# preencher esses campos com suas API credentials
SOCIAL_AUTH_GITHUB_CLIENT_ID=""
SOCIAL_AUTH_GITHUB_CLIENT_SECRET=""
SOCIAL_AUTH_LINKEDIN_CLIENT_ID=""
SOCIAL_AUTH_LINKEDIN_CLIENT_SECRET=""

# Esta string é utilizada em alguns processos de
# criptografia. Ela não deve ser publica e é recomendado
# que tenha ao menos 450 caracteres random.
APP_SECRET=dRskMJextBbeZfCzZd3Pmq0IwSYAC2YS76gvatIDY5zjYeMcGxhJRneRNBYhMk8TZgjyybG90F25akNzHvEeZk7DKvlezpazrfBHG3P0Rt4BBRkQAHVNtiCWPx4CJ87Yzvw48c576dzDTBNlBL1aDfW1XJCILhqjHOoYl5SMPIAQDh22fAlYly6uO8WnkC4reTyRVjoCGm18t1dMG6LyTHwOHKCN97K8gtAKxExJcNaGEPWvTcqCu6e3JHlTb2eWA8ABwEEfwc6EM001LnV5frG3U3eJEQMxRsa7ukgrza3hRLaC7qhYYWLYmTlwF37xV2iC3WAYofOThvgLgzBDrAGM2iC4alQQEHNnGvl64cVgEwCv2ftmBzTFoW8GFwXxSBCCakpLHoh5GGVWEJCV3wuCPJPTYjA3AqXraZGd4D5Iuq1U0dnwVBEe2uxImJNczP

# Essa é a sua configuração de SMTP. como dito
# vc pode usar qualquer SMTP como Google, Zoho,
# Hotmail, etc. Esse objeto sera utilizado para
# instanciar um transportador Node-Mailer, portanto
# qualquer configuração de Node Mailer Transporter
# será valida aqui. Você encontra as docs disso aqui:
# https://nodemailer.com/smtp/
MAILER_CONFIG={
	"service": "Service",
	"host": "smtp.service.com",
	"port": 465,
	"secure": true,
	"auth": {
		"user": "user@service.com",
		"pass": "p2$$w05d"
	}
}

# Esta é a configuração do modulo MongoJS. Geralmente
# isso é tudo o que vc precisará em modo local. pra
# outros casos, verifique a doc:
# https://www.npmjs.com/package/mongojs
DATABASE_CONFIG={
	"username": "",
	"password": "",
	"database": "cvkeep",
	"url": "mongodb://localhost:27017"
}
```

# Frontend `.env`

Agora navegue até a pasta `cvkeep-frontend` e copie o arquivo `.env` para `.env.local`. Novamente fazemos isso posi vamos rodar o front em modo local. Pra build e deploy vc criaria uma .env.production, por exemplo. Uma vez que o front é feito utilizando Vue-CLI 3, vc pode saber mais sobre .env files aqui: https://cli.vuejs.org/guide/mode-and-env.html.

Agora que vc tem sua`.env.local`, vamos configura-la. Vc deve fazer isso de acordo com suas necessidades. Aqui estão os parametros:

```bash
# Aqui vc insere qual será sua marca. Lembre-se,
# se vc está hospedando seu próprio serviço, vc
# deve modificar este campo
VUE_APP_BRAND_NAME="CV Keep"

# Esta é a URL local que aponta para o backend, 
# se vc esta rodando o backend com as confs default,
# deixe do jeito que está
VUE_APP_API_URL="http://localhost:5000"

# Estes são os metodos de autenticação que vc permitirá.
# Adicione ou remova sempre separando com espaço. 
# Para ter facebook, linkedin e github como metodos auth
# vc precisar obter as credenciais de cada um deles
VUE_APP_AUTH_AVAILABLE="email facebook github likedin"

# Aqui voce configura as credenciais para facebook e linkedin,
# a do github será utilizada diretamente no backend e configurada lá
VUE_APP_FACEBOOK_API_VERSION="v7.0"
VUE_APP_FACEBOOK_API_ID=""
VUE_APP_LINKEDIN_API_KEY=""

# Este é o seu email para contato. Quando um usuário envia
# um email, ele será enviado para este endereço
VUE_APP_CONTACT_EMAIL="contact@email.com"

# Estas são configurações relacionadas ao server front end,
# veremos mais sobre elas no passo 3
FRONT_SERVER_PORT=9090
FRONT_SERVER_APP_URL="http://localhost:9090"
SEO_CARD_IMAGE_URL="http://localhost:9090/seo/card.png"
SEO_TWITTER_USER="username"
```

# SEO Card

A aplicação referencia um arquivo "/seo/card.png", o qual é a imagem dos cards de pré-visualização quando vc compartilhar qualquer link CV numa rede social, por exemplo. Este arquivo não existe por default, você deve cria-lo em "/cvkeep-frontend/public/seo/" e chama-lo "card.png". A imagem deve ter `1200 x 665` pixels e deve ser um arquivo PNG.

# Isso é tudo

Isso é tudo que vc precisa para o setup. Agora estamos prontos para rodar o projeto. Bora pro passo 2.