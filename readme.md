# Boilerplate
A finalidade deste projeto é servir de ponto de partida para a execução de projetos web-api rodando Node.js.

## Estrutura de pastas

* /                               Raiz do projeto
* +---/ src
* +-------/ model                 Classes do modelo do domínio
* +-------/ domain-services       Regras de negócio do domínio
* +-------/ application-services  Entry point para regras
* +-------/ repositories          Repositórios
* +-------/ infra-data            Encapsula interação com banco de dados
* +-------/ controllers           Middleware do Express.js que consumirá os application-services
* +-------/ authentication
* +---/dist                       Pacote de distribuição do projeto
* +---/node_modules               Dependências
* / app.ts                        Express.js
* / main.ts                       Encapsula inicialização do server
* / routes.ts*                    Configura as rotas para os endpoints
* / package.json
* / tsoa.json
* / tsconfig.json

## Comandos úteis
* Para compilar: npm run build
* Para rodar o server: node main.js (publicado na pasta dist)