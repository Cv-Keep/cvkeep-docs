---
sidebar_position: 9
---

# The Database

The Cv Keep Mongo Database has a very very simples structure. You can find all the models on the **cvkeep-backend** project, at the folder `models`. Anyway, here is the finality of each collection:

|Name|Description|
|---|---|
|credentials|The user credentials as username, password etc|
|curriculum|The user curriculum content and some structure options|
|cvsearchindex|The searchable users and curriculums indexed using ngrams strategy|
|forgotpass|When a user open a forget pass requisition, it will be stored here|
|jwtsecrets|The application JWT RSA keys|
|registering|When a user starts a registration process, it will hold here till be confirmed|