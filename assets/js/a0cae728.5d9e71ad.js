"use strict";(self.webpackChunkcvkeep_docs=self.webpackChunkcvkeep_docs||[]).push([[884],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9393:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={sidebar_position:8},s="Internationalization",p={unversionedId:"internationalization",id:"internationalization",isDocsHomePage:!1,title:"Internationalization",description:"CV Keep is already internationalized. The application is available in PT-BR and EN, but you may want to extend the i18n options and add new languages. In this case, first lets see how the i18n is implementend on each project.",source:"@site/docs/internationalization.md",sourceDirName:".",slug:"/internationalization",permalink:"/internationalization",editUrl:"https://github.com/Cv-Keep/cvkeep-docs/edit/master/docs/docs/internationalization.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"mySidebar",previous:{title:"Deploying",permalink:"/deploying"},next:{title:"The Database",permalink:"/the-database"}},d=[{value:"Frontend",id:"frontend",children:[]},{value:"Backend",id:"backend",children:[]},{value:"Frontend",id:"frontend-1",children:[]},{value:"Backend",id:"backend-1",children:[]}],c={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"internationalization"},"Internationalization"),(0,r.kt)("p",null,"CV Keep is already internationalized. The application is available in PT-BR and EN, but you may want to extend the i18n options and add new languages. In this case, first lets see how the i18n is implementend on each project."),(0,r.kt)("h3",{id:"frontend"},"Frontend"),(0,r.kt)("p",null,"The Frontend uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"vue-i18n")," package to manage its i18n options, and uses 2 strategies to internationalize the application: global locale files and built-in i18n information for each component. This is made this way because components are lazy loaded on the pages, so a single locale json file would become huge with all the application translated texts and would never be fully used, ending up in unecessary network payload."),(0,r.kt)("p",null,"The i18n global messages are stored on the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/shared/i18n-messages")," folder. For the components, each one that needs its scoped translations has a ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n.messages")," object on its ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," layer, this way the translation payload is only loaded if the component has been loaded, lightening the network payload and the application cold start."),(0,r.kt)("p",null,"If you want to change something about the default i18n behavior, you must consider the following files:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"file"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i18n.js"),(0,r.kt)("td",{parentName:"tr",align:null},"This file exports a vue-18n instance singleton already configured")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bootstrap.js"),(0,r.kt)("td",{parentName:"tr",align:null},"This file bootstraps the Vue i18n Instance on the application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"src/shared/i18n-messages/index.js"),(0,r.kt)("td",{parentName:"tr",align:null},"This file is an index of all global messages available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"src/views/Terms.vue"),(0,r.kt)("td",{parentName:"tr",align:null},"This component is responsible to load the translated terms and conditions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"src/components/terms"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains all the translated terms by language that will be loaded by Terms.vue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"src/components/header/LangMenu.vue"),(0,r.kt)("td",{parentName:"tr",align:null},"Is the language selector component")))),(0,r.kt)("h3",{id:"backend"},"Backend"),(0,r.kt)("p",null,"All the messages and emails that the API returns or send are translated directly on the backend, then delivered. An ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n Express Middleware")," was created specially to do it, you can check all the documentation for the i18n Middleware and its behavior on this link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/felippe-regazio/express-rest-i18n"},"https://github.com/felippe-regazio/express-rest-i18n"),". "),(0,r.kt)("p",null,"So, there is no backend messages on the frontend translations, and the backend doesnt send any translation key to the front end, the front and back internationalization are completely separated concerns. To specify to the API which language you want the responses, just set an ",(0,r.kt)("inlineCode",{parentName:"p"},"application-language")," Header on your requests, the API will use this header to define the response locale. The Cv Keep Frontend will automatically handle this header for your when making requests to the API."),(0,r.kt)("p",null,"If you plan to change how the i18n works for the backend, or change the messages you must take a look on the root folder ",(0,r.kt)("inlineCode",{parentName:"p"},"/i18n"),". For deeper modifications you will need to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n Express Middleware"),"."),(0,r.kt)("h1",{id:"adding-new-languages"},"Adding New Languages"),(0,r.kt)("p",null,"The process of adding a new language for CvKeep i18n takes the frontend and backend application as a complete separated concerns. So, first we will see how to translate the frontend to a new language, and after we will see about the backend. ",(0,r.kt)("strong",{parentName:"p"},"So, lets imagine you will add Spanish as a new language"),", here are the steps you must follow:"),(0,r.kt)("h3",{id:"frontend-1"},"Frontend"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new JS file to hold your new static translations on the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"src/shared/i18n-messages/"),". THe file can have the name you prefer, but is highly recommended to use the ",(0,r.kt)("strong",{parentName:"p"},"Language ISO 639-1 Codes"),". In our hypothetical Spanish translation, we would use ",(0,r.kt)("inlineCode",{parentName:"p"},"en"),". Here's the reference of the language iso codes: ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With your new file created, copy the content of an existent one to it and add your translation. Now you must register you file as an available language option on the file ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," still on the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"src/shared/i18n-messages/"),". On the file ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," you must import your new translation file and add its contents as a key to the exported object. Ex: "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"import en from './en.js';\nimport ptBr from './pt-br.js';\n+import es from './es.js';\n\n\nexport default {\n  'en': en,\n  'pt-br': ptBr,\n+ 'es': es,\n}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Now go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"src/components/terms")," folder, copy a new Terms-* file and name it posfixing with your language code. In our case, we will name it ",(0,r.kt)("inlineCode",{parentName:"li"},"terms-es.vue"),". You must translate this file also. After create and translate your new Terms file, you must register on the Terms view: go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"src/views/Terms.vue")," component, import and register your ",(0,r.kt)("inlineCode",{parentName:"li"},"terms-es.vue")," component:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"<script>\n    const TermsEn = () => import( /* webpackChunkName: \"Terms-En\" */ '@/components/terms/terms-en.vue' )\n    const TermsPtBr = () => import( /* webpackChunkName: \"Terms-Pt-Br\" */ '@/components/terms/terms-pt-br.vue' )\n+   const TermsEs = () => import( /* webpackChunkName: \"Terms-Es\" */ '@/components/terms/terms-es.vue' )\n\n\n    export default {\n        name: 'Terms',\n\n        components: {\n            TermsEn,\n            TermsPtBr\n+           TermsEs,\n        }\n    }\n<\/script>\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Now you must translate the components scoped locales. We suggest you to do a global seach on the frontend for the string ",(0,r.kt)("inlineCode",{parentName:"li"},"i18n:"),", this will show you all the components that have a scoped translation. Now, you must locally add your new locale there. The structure is always the same, a ",(0,r.kt)("inlineCode",{parentName:"li"},"i18n object")," on the component ",(0,r.kt)("inlineCode",{parentName:"li"},"script"),". Adding ",(0,r.kt)("inlineCode",{parentName:"li"},"es")," translation to a component would be something like:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"i18n: {\n  messages: {\n    'pt-br': {\n      'hello': 'Ol\xe1',\n    },\n\n    'en': {\n      'hello': 'Hello',\n    },\n\n    'es': {\n      'hello': 'Hol\xe1',\n    }\n  }\n}\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Now you must add your new translation as a language option on the locale menu. Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"src/components/header/LangMenu.vue")," component, find the ",(0,r.kt)("inlineCode",{parentName:"li"},"ul.dropdown")," on the HTML, and add a new ",(0,r.kt)("inlineCode",{parentName:"li"},"li")," item for your new language. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'<ul class="dropdown" @click="hideMenu">\n    <li @click="changeLocale(\'pt-br\')">\n      <img src="/img/flags/pt-br.webp" alt="pt-br menu flag">\n      <span>{{$t(\'portuguese\')}}</span>\n    </li>\n\n    <li @click="changeLocale(\'en\')">\n      <img src="/img/flags/en.webp" alt="pt-br menu flag">\n      <span>{{$t(\'english\')}}</span>\n    </li>\n\n+  <li @click="changeLocale(\'es\')">\n+    <img src="/img/flags/es.webp" alt="es menu flag">\n+    <span>{{$t(\'spanish)}}</span>\n+  </li>  \n</ul>\n')),(0,r.kt)("p",null,'Dont forget to add the word "spanish" to the ',(0,r.kt)("inlineCode",{parentName:"p"},"i18n")," object of the LangMenu component. After that 5 steps, you will be added a new language to CV Keep FrontEnd."),(0,r.kt)("h3",{id:"backend-1"},"Backend"),(0,r.kt)("p",null,"The backend translation process is quiet simple: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First you must translation the application messages. For that, go to the folder ",(0,r.kt)("inlineCode",{parentName:"li"},"i18n/messages/")," and create your new locale file. Following our previous example, lets add an ",(0,r.kt)("inlineCode",{parentName:"li"},"es.js")," file for our imaginary spanish translation. Now, copy any other file content on the same folder and do your translation keeping the file structure. Now open the ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," file, import your ",(0,r.kt)("inlineCode",{parentName:"li"},"es.js")," file and register as a new language:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const en = require('./en.js');\nconst ptBr = require('./pt-br.js');\n+ const es = require('./es.js');\n\n\nmodule.exports = {\n    'en': en,\n    'pt-br': ptBr,\n+ 'es': es,\n};\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Now you must translate the e-mail messages. Go to the folder ",(0,r.kt)("inlineCode",{parentName:"li"},"functions/mailer/templates/"),". You will see a bunch of subfolders, for each subfolder you will add a new pair of files representing your new translated message as html and txt. Just copy a pair of existent one and rename for your locale. Lets take the ",(0,r.kt)("inlineCode",{parentName:"li"},"change-email")," subfolder, for example: you will create  an ",(0,r.kt)("inlineCode",{parentName:"li"},"html-es")," and an ",(0,r.kt)("inlineCode",{parentName:"li"},"text-es")," files, then just add your translation.")))}u.isMDXComponent=!0}}]);