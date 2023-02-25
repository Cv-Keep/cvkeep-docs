---
sidebar_position: 4
---

# Backend Setup

To setup the Cv Keep API you will need MongoDB running on your machine, then create a new database and get its Mongo URI, you gonna need it. With MongoDB configured and the database URI available, follow the next steps. If you didn't cloned the **Cv Keep Backend** project, please, read the section [Requirements](/requirements) of this documentation. 

### The .Env Files

To run your project locally or in production, you will need to set a .env file based on your state. The cvkeep-backend project has 4 .env files

|Env File|Description
|---|---|
|.env | a simple example, ignored by all environments |
|.env.local | must be created by you to define the local environment env vars |
|.env.production | must be created by you to defined the production environment vars |
|.env.test | setup environment vars for automated tests |

### The .Env Vars

The **cvkeep-backend** environment variables are:

|Name|Description|Default|Required|
|---|---|---|---|
|BASE|The API base route to deliver the API. The default the application root, if you defined `/fizz` for example, the entire API you respond after /fizz/* |/|true|
|PORT|The API port to deliver the application. You can omit this information on your env in some hosts that sets ports automatically, like heroku for example. That doesn't mean you don't need a PORT env, only that was automatically setted|5000|true|
|DEFAULT_LANG|The default language that the API must use for human readable messages. By default, "pt-br" and "en" are available|en|true|
|BRAND_NAME|The brand name to use when referring to your application in messages and emails, for example|Cv Keep|true|
|EXTRA_ALLOWED_ORIGINS|The cvkeep api uses strict CORS to validate requests. Here you can allow other Origins to connect to your API. You must set the origins separated by spaces and consider complete URLs and its possible versions, for example: "https://www.otherorigin.com https://otherorigin.com"|""|false|
|CLIENT_URL|The Cv Keep frontend URL of the current environment|https://localhost:8080|true|
|SERVER_URL|The Cv Keep backend URL of the current environment|http://localhost:5000|true|
|UPLOAD_MAX_FILE_SIZE_MB|How big an image can be when being uploaded|10|true|
|JWT_COOKIE_NAME|The JWT token is stored on a Cookie, here you can setup this cookie name. If for some reason you need to invalidate all the sessions, you can only change the cookie name and all the old ones will be ignored be the application. The cookie used is a signed Cookie to prevent injection attacks|\__CV_APP_SESSION_0001\__|true|
|REPORT_EMAIL_ADDRESS|All the problems reported by users on the application will be sent to this email address|report@email.com|true|
|NOREPLY_EMAIL_ADDRESS|A simple noreply E-Mail for application routines like password changing, for example|noreply@email.com|true|
|SOCIAL_AUTH_GITHUB_CLIENT_ID|If you intend to support github login you must fill it|""|false|
|SOCIAL_AUTH_GITHUB_CLIENT_SECRET|If you intend to support github login you must fill it|""|false|
|MONGODB_URI|Your MongoDB Database URI|mongodb://localhost:27017/cvkeep|true|
|APP_SECRET|This must be a big random STR to be used as secret and salt for some operations. We recommend at least a 450 chars string|A 450 chars random string|true|
|MAILER_CONFIG|A JSON containing the application SMTP config, needed only for production mode|true|

### The SMTP

The application SMTP configuration is used to allow the application send e-mails. If you are in local mode, you don't need to configure it, all the sent emails will be directed to the Console (STD) and wont be really sent. But in production mode you must setup it. The SMTP configuration is set on the **MAILER_CONFIG** environment variable of your .env files (preferred the .env.production file). The env var content must be a JSON string with no line breaks like this:

```
{ "service": "Service", "host": "smtp.service.com", "port": 465, "secure": true, "auth": { "user": "user@service.com", "pass": "p2$$w05d" } }
```

The configuration above is very common: an SMTP service authenticated by user and password. If you need alternative configurations, you can pass any property accepted by the **nodemailer** configuration. You can checkout the nodemailer docs here: https://www.npmjs.com/package/nodemailer.

### The JWT RSA

The JWT tokens are protected by a RS256 RSA Key Pair with length 4096. This RSA is dynamically generated for you application at the first time you run it and stored on the database. If you need to invalidate all the tokens and their keys, you can go to you database, at the collection **jwtsecrets** and the delete the content of the fields **publicKey** and **privateKey**. After that, restart the application and a new RSA will be generated for you and all the old JWT tokens will be invalidated