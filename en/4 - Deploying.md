# Deploying

This doc wont cover server strategies of deployment since there are a plenty of them out there, you can use a Droplet, Heroku, AWS etc. So, this will show you what all of them must run in order to have your application running online.

First of all, configure your `.env.production` for both `cvkeep-frontend` and `cvkeep-backend` projects. Remember to consider that you probably will run under a domain, so the addresses references must be the original ones (with the domain).

Since you configured your .env files, you will need a Mongo DB online, and may some tools from the stack discribed on the step 1. of this doc, depending on your strategy. 

# Running Online

Now that you configured your prod envs, cloned or have sent the respository and env files to the host, this is what you will need to run:

1. `Backend`: You must run the `cvkeep-backend/index.js` app on your host the way you prefer (You can use Host configurations or PM2, i dont know).
2. `Frontend`: You must run the `cvkeep-frontend/server/index.js` app on your host the way you prefer. 
3. Its possible that if you are configuring all by yourself, you need a reverse proxy. We recommend Nginx to do that.

# Considerations

For both, fronend and backend, the strategies are same to deploy and configure any Express application. Since every host has its way and there are many ways to do it, it would be a waste of time to describe a single one here, so if you are running in difficulties, drop an issue and we'll try to help you.