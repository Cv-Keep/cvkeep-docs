---
sidebar_position: 8
---

# Internationalization

CV Keep is already internationalized. The application is available in PT-BR and EN, but you may want to extend the i18n options and add new languages. In this case, first lets see how the i18n is implemented on each project.

### Frontend

The Frontend uses the `vue-i18n` package to manage its i18n options, and uses 2 strategies to internationalize the application: global locale files and built-in i18n information for each component. This is made this way because components are lazy loaded on the pages, so a single locale json file would become huge with all the application translated texts and would never be fully used, ending up in unnecessary network payload.

The i18n global messages are stored on the folder `/src/shared/i18n-messages` folder. For the components, each one that needs its scoped translations has a `i18n.messages` object on its `script` layer, this way the translation payload is only loaded if the component has been loaded, lightening the network payload and the application cold start.

If you want to change something about the default i18n behavior, you must consider the following files:

|file|description|
|---|---|
|i18n.js | This file exports a vue-18n instance singleton already configured |
|bootstrap.js | This file bootstraps the Vue i18n Instance on the application |
|src/shared/i18n-messages/index.js | This file is an index of all global messages available |
|src/views/Terms.vue | This component is responsible to load the translated terms and conditions |
|src/components/terms | Contains all the translated terms by language that will be loaded by Terms.vue |
|src/components/header/LangMenu.vue | Is the language selector component |

### Backend

All the messages and emails that the API returns or send are translated directly on the backend, then delivered. An `i18n Express Middleware` was created specially to do it, you can check all the documentation for the i18n Middleware and its behavior on this link: https://github.com/felippe-regazio/express-rest-i18n. 

So, there is no backend messages on the frontend translations, and the backend doesn't send any translation key to the front end, the front and back internationalization are completely separated concerns. To specify to the API which language you want the responses, just set an `application-language` Header on your requests, the API will use this header to define the response locale. The Cv Keep Frontend will automatically handle this header for your when making requests to the API.

If you plan to change how the i18n works for the backend, or change the messages you must take a look on the root folder `/i18n`. For deeper modifications you will need to change the `i18n Express Middleware`.

# Adding New Languages

The process of adding a new language for CvKeep i18n takes the frontend and backend application as a complete separated concerns. So, first we will see how to translate the frontend to a new language, and after we will see about the backend. **So, lets imagine you will add Spanish as a new language**, here are the steps you must follow:

### Frontend

1. Create a new JS file to hold your new static translations on the folder `src/shared/i18n-messages/`. THe file can have the name you prefer, but is highly recommended to use the **Language ISO 639-1 Codes**. In our hypothetical Spanish translation, we would use `en`. Here's the reference of the language iso codes: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes.

2. With your new file created, copy the content of an existent one to it and add your translation. Now you must register you file as an available language option on the file `index.js` still on the folder `src/shared/i18n-messages/`. On the file `index.js` you must import your new translation file and add its contents as a key to the exported object. Ex: 


```diff
import en from './en.js';
import ptBr from './pt-br.js';
+import es from './es.js';


export default {
  'en': en,
  'pt-br': ptBr,
+ 'es': es,
}
``` 

3. Now go to the `src/components/terms` folder, copy a new Terms-* file and name it posfixing with your language code. In our case, we will name it `terms-es.vue`. You must translate this file also. After create and translate your new Terms file, you must register on the Terms view: go to the `src/views/Terms.vue` component, import and register your `terms-es.vue` component:

```diff
<script>
	const TermsEn = () => import( /* webpackChunkName: "Terms-En" */ '@/components/terms/terms-en.vue' )
	const TermsPtBr = () => import( /* webpackChunkName: "Terms-Pt-Br" */ '@/components/terms/terms-pt-br.vue' )
+	const TermsEs = () => import( /* webpackChunkName: "Terms-Es" */ '@/components/terms/terms-es.vue' )


	export default {
		name: 'Terms',

		components: {
			TermsEn,
			TermsPtBr
+           TermsEs,
		}
	}
</script>
```

4. Now you must translate the components scoped locales. We suggest you to do a global seach on the frontend for the string `i18n:`, this will show you all the components that have a scoped translation. Now, you must locally add your new locale there. The structure is always the same, a `i18n object` on the component `script`. Adding `es` translation to a component would be something like:

```diff
i18n: {
  messages: {
    'pt-br': {
      'hello': 'Olá',
    },

    'en': {
      'hello': 'Hello',
    },

    'es': {
      'hello': 'Holá',
    }
  }
}
```

5. Now you must add your new translation as a language option on the locale menu. Go to the `src/components/header/LangMenu.vue` component, find the `ul.dropdown` on the HTML, and add a new `li` item for your new language. For example:

```diff
<ul class="dropdown" @click="hideMenu">
    <li @click="changeLocale('pt-br')">
      <img src="/img/flags/pt-br.webp" alt="pt-br menu flag">
      <span>{{$t('portuguese')}}</span>
    </li>

    <li @click="changeLocale('en')">
      <img src="/img/flags/en.webp" alt="pt-br menu flag">
      <span>{{$t('english')}}</span>
    </li>

+  <li @click="changeLocale('es')">
+    <img src="/img/flags/es.webp" alt="es menu flag">
+    <span>{{$t('spanish)}}</span>
+  </li>  
</ul>
``` 

Don't forget to add the word "spanish" to the `i18n` object of the LangMenu component. After that 5 steps, you will be added a new language to CV Keep FrontEnd.

### Backend

The backend translation process is quiet simple: 

1. First you must translation the application messages. For that, go to the folder `i18n/messages/` and create your new locale file. Following our previous example, lets add an `es.js` file for our imaginary spanish translation. Now, copy any other file content on the same folder and do your translation keeping the file structure. Now open the `index.js` file, import your `es.js` file and register as a new language:

```diff
const en = require('./en.js');
const ptBr = require('./pt-br.js');
+ const es = require('./es.js');


module.exports = {
	'en': en,
	'pt-br': ptBr,
+ 'es': es,
};
``` 

2. Now you must translate the e-mail messages. Go to the folder `functions/mailer/templates/`. You will see a bunch of subfolders, for each subfolder you will add a new pair of files representing your new translated message as html and txt. Just copy a pair of existent one and rename for your locale. Lets take the `change-email` subfolder, for example: you will create  an `html-es` and an `text-es` files, then just add your translation.