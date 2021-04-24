# Front End SSR

When you run `npm run serve` on the `cvkeep-frontend` repository, you are actually running the Vue Built-in Web Pack Server. This is a built-in server for development purposes.  

Once you build your application, it must be served by a real server. Of course, you can just drop the `dist` folder on some host and access it directly, maybe will work; but thats not the best approach, and you will miss importante parts of this machinary: SEO, Server Cache, Observability, etc.

So, when running your build, you must run the SSR Server. Its just an Express Application that runs your front end build. This application is responsible to deliver the app, do a simple server side cache for some common data, and inject the page metatags for SEO optimization and social networks link preview.

Note that the "SSR" engine is very very very simple for while, has no dependency at all (yes, Vanilla JS SSR) and runs just to inject the metatags. If you gonna run your own comercial plaform you will need to do some work on this server to run a real Vue SSR Process.

# The Front End Server

The `Front End Server` files are located on a folder called `server` on the `cvkeep-frontend` root. This is what will run on production also. Before execute it, you must configure some entries on your `.env.local` or `.env.production` files:

```bash
# The Front End Server Port
FRONT_SERVER_PORT=9090

# The Front End Server URL
# Can be slightly different on production 
FRONT_SERVER_APP_URL="http://localhost:9090"

# Where is the SEO card PNG file (URL)
SEO_CARD_IMAGE_URL="http://localhost:9090/seo/card.png"

# Your application twitter user
SEO_TWITTER_USER="username"
```

Since you have configured this entries, you must assure that you have a build on your application root dir. You will see a `dist` folder on the root dir. If there is no dist, you must run:

```bash
# if you are in local mode, this will build
# using the .env.local environment file
npm run build:local

# if you are in production mode, this will build
# using the .env.production environment file
npm run build
``` 

Now that you have your build, lets run the Front Server

# Running the Front End Server

Run the following commands:

```bash
# if you are in local mode
npm run serve:ssr

# if you are in prod mode
npm run serve:prod
``` 

Thats all, if you are running with default config in local mode, you can navigate to `http://localhost:9090` and you will see the front end being served. This is specially useful to debug problems that are happening in production.