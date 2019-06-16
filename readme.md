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

## Links úteis
[Web API standards - White House](https://github.com/WhiteHouse/api-standards)


# Metas desse projeto

## Aplicar princípio SOLID
* S     SRP: Single Responsibility (uma classe deve ter apenas uma única responsabilidade)
* O	    OCP: Open for extension/Closed for changing (entidades de software devem ser abertas para extensão, mas fechadas para modificação)
* L	    LSP: Liskov Substitution (objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa)
* I	    ISP: Interface Segregation (muitas interfaces de clientes específicas, são melhores do que uma para todos propósitos)
* D     DIP: Dependency Inversion (deve-se depender de abstrações, não de objetos concretos)