Estrutura de pastas

/                               Raiz do projeto
+---/ src
+-------/ model                 Classes do modelo do domínio
+-------/ domain-services       Regras de negócio do domínio
+-------/ application-services  Entry pointo para regras
+-------/ infra-data            Encapsula interação com banco de dados
+-------/ controllers           Middleware do Express.js que consumirá os application-services
+-------/ authentication
+---/dist                       Pacote de distribuição do projeto
+---/node_modules               Dependências
/ app.ts                        Express.js
/ main.ts                       Encapsula inicialização do server
/ routes.ts*                    Configura as rotas para os endpoints
/ package.json
/ tsoa.json
/ tsconfig.json

Para compilar: npm run build
Para rodar o server: node main.js (publicado na pasta dist)