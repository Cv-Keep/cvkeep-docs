# Deploying

Esta documentação não vai cobrir estrategias de deployment, uma vez que existe uma plenitude delas por aí, vc pode usar um Droplet, Heroku, AWS, etc. Logo, será mostrado os aspectos chave da aplicação que vc deverá configurar seja qual for a estrategia que tomar.

Antes de tudo, configura a sua `.env.production` para ambos os projetos: `cvkeep-frontend` e `cvkeep-backend`. Lembre-se de considerar que provavelmente vc estará rodando sob um domínio, considere-o na hora de definir referencias a URLs.

Uma vez que vc tenha configurado sua .env, vc necessitará uma instancia Mongo DB online, e algumas ferramentas da stack que vimos no passo 1. dessa doc, a depender da sua estratégia. 

# Rodando Online

Agora que vc configurou suas envs em prod, clonou ou enviou o repo para o host, eis o que vc precisará rodar:

1. `Backend`: Vc deve executar o arquivo `cvkeep-backend/index.js` no seu host da forma que preferir (Pode ser via configuração, PM2, sei lá).
2. `Frontend`: Vc deve executar o arquivo `cvkeep-frontend/server/index.js` no seu host da maneira que preferir. 
3. Caso vc esteja configurando tudo por si, é possível que vc necessite de um proxy reverso. É recomendado utilizar Nginx pra isso.

# Considerações

Para ambos, frontend e backend, as estrategias de deploy e configuração são as mesmas pra qualquer aplicação Express comum. Uma vez que cada host tem sua maneira para fazer isso, seria uma perda de tempo descrever apenas uma aqui. Sendo assim, se vc tiver dificuldades com isso, deixe uma issue no projeto e tentaremos ajudar.