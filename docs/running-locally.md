---
sidebar_position: 6
---

# Running Locally

First of all, lets assume you have cloned or downloaded both the applications: **cvkeep-frontend** and **cvkeep-backend** sources. If you didn't, please go to the [requirements](/requirements) section of this documentation.

### Backend

Lets start running the API. First of all, go to the `cvkeep-backend` project root. Now, copy the `.env` file content to a `.env.local` file, and change the env variables in according to your needings. To check how to configure the .env, please, read the [Backend Setup](/backend-setup) section of this documentation. Generally for the local mode you only need to configure your Mongo URI on the `.env.local` file. Now, if you didn't installed the dependencies, please run:

```bash
npm install
```

With dependencies installed now run:

```
npm run serve
```

If all goes well, you will see the following information:

``` 
Server is running with stage "development" on port 5000
Env: /projects/cvkeep-backend/.env.local
```

With the default env values, your API will be available on: http://localhost:5000/.

### Front End

To run the front end, first copy the `.env` file content to a `.env.local` file, and change the env variables in according to your needings. Now, if you didn't installed the dependencies, please run:

```bash
npm install
```

With dependencies installed now run:

```
npm run serve
```

If all goes well, you will see the following information:

``` 
  App running at:
  - Local:   https://localhost:8080/ 
  - Network: https://localhost:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

With the default env values, the front end will be available on: http://localhost:8080/.

### Front End Server

There is an Express Application meant to serve the front end. This is optional when in local mode, but can be very useful for debbuging. To run the front server, just run:

```bash
npm run serve:prod
``` 

It will run a production-like server, but locally. You can now access the front end at http://localhost:9090