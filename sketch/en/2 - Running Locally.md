# Running Locally

Now that you have configured the stack and the environment, its time to run the project.  
First you must go to the `cvkeep-backend` folder and run the following command:

```bash
npm install # only for the first time
npm run serve
```

Now for the front end, go to the `cvkeep-frontend` folder, and run the following command:

```bash
npm install # only for the first time
npm run serve
```

Thats all. You must have everything up. No just navigate to `https://localhost:8080`, and wellcome aboard!

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

On the `cvkeep-frontend` project, the following scripts can be useful:

```bash
# build for production
npm run build

# lint the codebase
npm run lint

# serve the front end
npm run serve

# serve the front end in SSR mode 
# with a dedicated server application
npm run serve:ssr

# serve the front end server locally
# using the .env.local. this is not to
# be used on prod, its to simulate prod
# locally
npm run serve:prod

# do a local build (need to run before serve:ssr)
# ignoring the .env.production
npm run build:local
``` 

Obs: The serve:ssr, serve:prod and build:local are scripts related to the Front End SSR. They will be discussed in the step 3 of the docs.

# You are up and running

On this step you must have a CV Keep platform up and running locally :D