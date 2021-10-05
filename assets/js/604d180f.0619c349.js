"use strict";(self.webpackChunkcvkeep_docs=self.webpackChunkcvkeep_docs||[]).push([[320],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2734:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:5},p="Frontend Setup",u={unversionedId:"frontend-setup",id:"frontend-setup",isDocsHomePage:!1,title:"Frontend Setup",description:"The Cv Keep Frontend application is made of two layers: The static builded application and a simple express server to serve your Front End. This section will show you how to setup this layers to properly run the app.",source:"@site/docs/frontend-setup.md",sourceDirName:".",slug:"/frontend-setup",permalink:"cvkeep-docs/frontend-setup",editUrl:"https://github.com/Cv-Keep/cvkeep-docs/edit/master/docs/docs/frontend-setup.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mySidebar",previous:{title:"Backend Setup",permalink:"cvkeep-docs/backend-setup"},next:{title:"Running Locally",permalink:"cvkeep-docs/running-locally"}},s=[{value:"The .Env Files",id:"the-env-files",children:[]},{value:"The .Env Vars",id:"the-env-vars",children:[]},{value:"The Front End Server",id:"the-front-end-server",children:[]}],d={toc:s};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"frontend-setup"},"Frontend Setup"),(0,l.kt)("p",null,"The Cv Keep Frontend application is made of two layers: The static builded application and a simple express server to serve your Front End. This section will show you how to setup this layers to properly run the app."),(0,l.kt)("h3",{id:"the-env-files"},"The .Env Files"),(0,l.kt)("p",null,"The front end is built with ",(0,l.kt)("strong",{parentName:"p"},"Vue CLI-3"),", this means that the .env files follows the Vue pattern. You can check out more information about how Vue handles .env files in this link: ",(0,l.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/guide/mode-and-env.html"},"https://cli.vuejs.org/guide/mode-and-env.html"),"."),(0,l.kt)("h3",{id:"the-env-vars"},"The .Env Vars"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"cvkeep-frontend")," environment variables are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_BRAND_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"The application brand name"),(0,l.kt)("td",{parentName:"tr",align:null},"CV Keep"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_LOGO_PATH"),(0,l.kt)("td",{parentName:"tr",align:null},"Must point to your log file on the app. You can use vue notation here"),(0,l.kt)("td",{parentName:"tr",align:null},"@/assets/logo/logo.png"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_API_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"The API URL or your current mode"),(0,l.kt)("td",{parentName:"tr",align:null},"http://localhost:5000"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_AUTH_AVAILABLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication methods that will be available for the user. You must separate each method with an space. The methods can be: email, facebook and/or github"),(0,l.kt)("td",{parentName:"tr",align:null},"email facebook github"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_FACEBOOK_API_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"You facebook app id in case you are using facebook auth"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_FACEBOOK_API_VERSION"),(0,l.kt)("td",{parentName:"tr",align:null},"The facebook API version to be used in case of facebook auth"),(0,l.kt)("td",{parentName:"tr",align:null},"v11.0"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_CONTACT_EMAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"Your institutional contact email"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:contact@email.com"},"contact@email.com")),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_DONATION_PAYPAL_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Fill this env only if you want to ask for donations for your app"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_DONATION_PIX_KEY"),(0,l.kt)("td",{parentName:"tr",align:null},"Fill this env only if you want to ask for donations for your app"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_DONATION_BITCOIN"),(0,l.kt)("td",{parentName:"tr",align:null},"Fill this env only if you want to ask for donations for your app"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_TWITTER_USERNAME"),(0,l.kt)("td",{parentName:"tr",align:null},"Your app twitter account username, used by the front end express server SEO injection"),(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VUE_APP_SW_ENABLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Tells to the vue build to use of not the an application service worker to manage and cache the client app"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRONT_PROD_SERVER_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"The port to serve your front end by express (not the vue server port, not the static files por of your server). This defines only the port that the front end express application will use to deliver your builded app"),(0,l.kt)("td",{parentName:"tr",align:null},"9090"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRONT_PROD_SERVER_SEO_CARD_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Must be a complete URI pointing to a PNG file that will be user as card cover for SEO/link preview"),(0,l.kt)("td",{parentName:"tr",align:null},"http://localhost:9090/seo/card.png"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h3",{id:"the-front-end-server"},"The Front End Server"),(0,l.kt)("p",null,"We use an Express Server to serve the front end application. You dont need this server when running the app locally, but you will probably need it to serve your production app. Also, this server is responsible to render each page SEO metatags. There is no setup to do about the front end server itself, you will see how to start it at the next section: Running Locally."))}c.isMDXComponent=!0}}]);