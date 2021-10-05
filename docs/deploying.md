---
sidebar_position: 7
---

# Deploying

To deploy the CV Keep application you will need a live Mongo DB server, and SMTP server and a Host Service of your choice. Since there are many different hosts with different specific configurations, we wont cover those specificities in this docs, only the common steps need to run a production CV Keep app. Check the [requirements](/requirements) section of this docs to know which stack and services you will need.

### Configuring the ENV

First configure the .env of your `cvkeep-backend` and the `cvkeep-frontend` applications. Many platforms have their own panel to manage ENV variables, for others you may keep a production env variable. If you host have a ENV variables panel, just add your production vars, otherwise, you must keep a `..env.production` ENV file on your prod server and configure your variables there.

### The Backend

With the ENV vars configured for the **cvkeep-backend** project on your production server, you must follow this steps:

1. Download or clone the sources on your server
2. Install the dependencies by running `npm install` on the project root
3. Ask your `Node` to run the `index.js` file on the project root with the command `node index.js`

If everything went well, you will have a new Express Server for you CV Keep API in according to your configurations. If you cant run commands on your server, or if there is no way to manage dependencies there, you will need to install them locally and upload the generated `node_modules` folder to your prod server alongside the project sources. The domain and host specific managements are up to you. Remember to specify the correct backend and frontend URIs for your ENV files.

### The Frontend

With the ENV vars configured for the **cvkeep-front** project on your production server, you must follow this steps:

1. Download or clone the sources on your server
2. Install the dependencies by running `npm install` on the project root
3. Build the front end by running `npm run build`
4. Now just ask your `Node` to run the `/server/index.js` file from the project root

If everything went well, you will have a new Express Server for you CV Keep Front End in according to your configurations. If you cant run commands on your server, or if there is no way to manage dependencies there, you will need to install them locally, then build the application locally and upload the folders `/dist`, `/server` and `node_modules` to your server, and run the same steps described above here. Also, the domain and host specific managements are up to you. Remember to specify the correct backend and frontend URIs for your ENV files.

### The Server Ports

Some hosts (like Heroku for example) do manage the Node Applications Ports automatically. In this case you must ommit the "PORT" ENV var for the Backend configuration, and the "FRONT_PROD_SERVER_PORT" or "PORT" ENV var for the Frontend configuration.