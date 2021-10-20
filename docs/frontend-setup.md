---
sidebar_position: 5
---

# Frontend Setup

The Cv Keep Frontend application is made of two layers: The static builded application and a simple express server to serve your Front End. This section will show you how to setup this layers to properly run the app.

### The .Env Files

The front end is built with **Vue CLI-3**, this means that the .env files follows the Vue pattern. You can check out more information about how Vue handles .env files in this link: https://cli.vuejs.org/guide/mode-and-env.html.

### The .Env Vars

The **cvkeep-frontend** environment variables are:

|Name|Description|Default|Required|
|---|---|---|---|
|VUE_APP_BRAND_NAME|The application brand name|CV Keep|true|
|VUE_APP_LOGO_PATH|Must point to your log file on the app. You can use vue notation here|@/assets/logo/logo.png|true|
|VUE_APP_API_URL|The API URL or your current mode|http://localhost:5000|true|
|VUE_APP_AUTH_AVAILABLE|Authentication methods that will be available for the user. You must separate each method with an space. The methods can be: email, facebook and/or github|email facebook github|true|
|VUE_APP_FACEBOOK_API_ID|You facebook app id in case you are using facebook auth|""|false|
|VUE_APP_FACEBOOK_API_VERSION|The facebook API version to be used in case of facebook auth|v11.0|false|
|VUE_APP_CONTACT_EMAIL|Your institutional contact email|contact@email.com|true|
|VUE_APP_DONATION_PAYPAL_URL|Fill this env only if you want to ask for donations for your app|""|false|
|VUE_APP_DONATION_PIX_KEY|Fill this env only if you want to ask for donations for your app|""|false|
|VUE_APP_DONATION_BITCOIN|Fill this env only if you want to ask for donations for your app|""|false|
|VUE_APP_TWITTER_USERNAME|Your app twitter account username, used by the front end express server SEO injection|username|true|
|VUE_APP_SW_ENABLE|Tells to the vue build to use of not the an application service worker to manage and cache the client app|false|true|
|VUE_APP_JWT_LOCAL_STORAGE|Decide if must save the JWT Token on local storage despite the Http Signed Cookie|true|false| 
|FRONT_PROD_SERVER_PORT|The port to serve your front end by express (not the vue server port, not the static files por of your server). This defines only the port that the front end express application will use to deliver your builded app|9090|true|
|FRONT_PROD_SERVER_SEO_CARD_URL|Must be a complete URI pointing to a PNG file that will be user as card cover for SEO/link preview|http://localhost:9090/seo/card.png|true|
|FRONT_PROD_SERVER_FORCE_HTTPS|Redirect front matter `http` connections to `https`. Recommended to set this to true on production mode|false|

### The JWT Token

The JWT Token is stored on the Browser using an HTTP Signed Cookie by default. But, since the backend is a separated project from the front end, it can be running in completely different host and domain. If the CV Keep API are bering served under a different URI of the Front Matter, this Cookie will be threated as a "Thirdy Party Cookie" by the browser.

Some modern browsers are blocking thirdy party users unless the user gives an explicity permission. In this case, the login wont be possible. The solution is to use the local storage an a fallback method of cookie storage. Unfortunatelly the local storage is not as secure as the cookie due XSS attack risky. If you are using this method because your API hosting method requires thirdy party cookies to be setted on the front end, keep all your dependencies up to date and your editable content sanitazed and you will be fine. 

### The Front End Server

We use an Express Server to serve the front end application. You dont need this server when running the app locally, but you will probably need it to serve your production app. Also, this server is responsible to render each page SEO metatags. There is no setup to do about the front end server itself, you will see how to start it at the next section: Running Locally.