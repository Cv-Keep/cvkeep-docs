# Stack and Setup

CV Keep is written in a MEVN stack (Mongo, Express, Vue and Node), and is focused on simplicity. Since you properly configure your .env files, the App is production ready and already internationalized (en and pt-br by default).

# The Stack

To run CV Keep you will need the following tools:

1. `A Unix-Like system` (Linux or OSX for example)
2. `MongoDB`: A mongo DB instance >=4.4.5v.
3. `Node JS` >=10.19.0v
5. `NPM`: Use the proper version according to your Node version
4. `An SMTP Server`: Locally you can use Gmail, Zoho or any other 
5. `Git`: of course. 

Since you have all the things above installed and running, its time to put the peaces together.

# The Sources

Now you must clone the CV Keep `frontend` and `backend` repositories.  
You will find the frontend [HERE](https://github.com/Cv-Keep/cvkeep-frontend/) and the backend [HERE](https://github.com/Cv-Keep/cvkeep-backend/).  

If you prefer, you can just execute the following commands.

``` js
// cloning the frontened
git clone https://github.com/Cv-Keep/cvkeep-frontend.git

// cloning the backend
git clone https://github.com/Cv-Keep/cvkeep-backend.git
``` 

# The Backend `.env`

Go to the `cvkeep-backend` folder and copy the `.env` file to `.env.local` file. We are doing it because we're gonna run it locally. To build and deploy you must create a .env.production, etc.

Now you must configure your `.env.local` file:

```bash
# This is the url address base path. If you will run the
# backend on the root of the server, leave it as it is.
# But if your backend is being served by an apache or
# nginx for example, and is under a path, for example
# https://whatever.com/my-api/, so you must add the path
# here, in the exemple case would be "my-api"
BASE=/

# The port where the backend will run
PORT=5000

# The default language for responses (status messages)
DEFAULT_LANG=en

# The brand name (if you gonna host your own platform
# you must change it)
BRAND_NAME="Cv Keep"

# This is your front end URL. THis is the default for
# localhost. For deployment will change a bit.
CLIENT_URL=https://localhost:8080

# This is the URL of the Backend, sorry for the poor name
SERVER_URL=http://localhost:5000

# The maximum size of a file upload 
UPLOAD_MAX_FILE_SIZE_MB=20

# JWT can use signed cookies, and this is the cookie name 
JWT_COOKIE_NAME=__CV_APP_SESSION_0001__

# This must be a valid e-mails the user reports will be
# addressed to this e-mail
REPORT_EMAIL_ADDRESS=report@email.com

# This is your "no-reply" email address
NOREPLY_EMAIL_ADDRESS=noreply@email.com

# If you are using social authentication, you must
# fill this entries with your API credentials
SOCIAL_AUTH_GITHUB_CLIENT_ID=""
SOCIAL_AUTH_GITHUB_CLIENT_SECRET=""
SOCIAL_AUTH_LINKEDIN_CLIENT_ID=""
SOCIAL_AUTH_LINKEDIN_CLIENT_SECRET=""

# Here you configure yoru Public and Private RSA Keys,
# for things such JWT signing and crypt. you MUST change
# this keys (create new ones) when deploying your apps.
RSA_PUBLIC_KEY="functions/jwt/rsa/public.key"
RSA_PRIVATE_KEY="functions/jwt/rsa/private.key"

# The App Secret must be a random hash string,
# it will be used for some encryption processes.
# YOU MUST change it on production. try to use
# a string with at least 450 chars
APP_SECRET=dRskMJextBbeZfCzZd3Pmq0IwSYAC2YS76gvatIDY5zjYeMcGxhJRneRNBYhMk8TZgjyybG90F25akNzHvEeZk7DKvlezpazrfBHG3P0Rt4BBRkQAHVNtiCWPx4CJ87Yzvw48c576dzDTBNlBL1aDfW1XJCILhqjHOoYl5SMPIAQDh22fAlYly6uO8WnkC4reTyRVjoCGm18t1dMG6LyTHwOHKCN97K8gtAKxExJcNaGEPWvTcqCu6e3JHlTb2eWA8ABwEEfwc6EM001LnV5frG3U3eJEQMxRsa7ukgrza3hRLaC7qhYYWLYmTlwF37xV2iC3WAYofOThvgLgzBDrAGM2iC4alQQEHNnGvl64cVgEwCv2ftmBzTFoW8GFwXxSBCCakpLHoh5GGVWEJCV3wuCPJPTYjA3AqXraZGd4D5Iuq1U0dnwVBEe2uxImJNczP

# This is the Mailer config, commonly an SMTP.
# You can use Gemail, Zoho, Hotmail or whatever.
# This object will be used to constrcut a Node-Mailer
# Transport Instance. So, any Node mailer transport
# Configuration is valid. You'll find the docs here:
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

# This is a MongoJS configuration. Commonly this
# will be all that you need. In other cases, you
# can check all the docs here:
# https://www.npmjs.com/package/mongojs
DATABASE_CONFIG={
	"username": "",
	"password": "",
	"database": "cvkeep",
	"url": "mongodb://localhost:27017"
}
```

# The Frontend `.env`

Now go to the `cvkeep-frontend` folder and copy the `.env` file to `.env.local` file. We are doing it because we're gonna run it locally. To build and deploy you must create a .env.production, for example. Since the frontend is written with Vue-CLI 3, you can know more about its .env files here: https://cli.vuejs.org/guide/mode-and-env.html.

Now you have your `.env.local` file, lets configure it. You will do it in according to your needings. Here are the parameters:

```bash
# Here you will insert your brand name. Remember,
# if are hosting your own service, you cannot use 
# the CV Keep brand. If you are just contributing
# leave it as default
VUE_APP_BRAND_NAME="CV Keep"

# This is the local backend URL, in this step we dont
# have the backend yet, but we gonna run it on this
# same URL so leave it as it is
VUE_APP_API_URL="http://localhost:5000"

# This is the authentications and registrations methods
# available. You can add or remove this options always
# separating with spaces. To have facebook and linkedin
# login types you will need their API Credentials
VUE_APP_AUTH_AVAILABLE="email facebook github likedin"

# Here are the AUTH API Credentials that you must fullfill
# in order to have social login. If yoy doesnt have the
# credentials you must deactivate those kinds of auths
VUE_APP_FACEBOOK_API_VERSION="v7.0"
VUE_APP_FACEBOOK_API_ID=""
VUE_APP_LINKEDIN_API_KEY=""

# This will be your contact e-mails. When a user sends
# and e-mail, will go to this address
VUE_APP_CONTACT_EMAIL="contact@email.com"

# Those are each URL for configure donation on your plaform.
# If you are a free platform and want to ask for a coffee on
# the homepage, here you will configure your Paypal donaton
# URL, a pix key and a bitcoin address. Leave all the fields
# empty to not show the donation section on the homepage
VUE_APP_DONATION_PAYPAL_URL=""
VUE_APP_DONATION_PIX_KEY=""
VUE_APP_DONATION_BITCOIN=""

# Here are the configurations related to the Front End Server
# and SSR, we gonna know more about on the step 3. Leave
# it as it is for now, we'll come back here later
FRONT_SERVER_PORT=9090
FRONT_SERVER_APP_URL="http://localhost:9090"
SEO_CARD_IMAGE_URL="http://localhost:9090/seo/card.png"
SEO_TWITTER_USER="username"
```

# SEO Card

The plaform references a file "/seo/card.png", which is the card image that will appear when you are sharing the page on the internet. This file doesnt exists by default, you will need to create it on "/cvkeep-frontend/public/seo/" and name it "card.png". The image must have `1200 x 665` pixels and must be a PNG.

# Thats all

Thats all the setup you need. Now you are ready to run the project. Please go to the step 2.