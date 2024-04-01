# Documentação da Recipe-API

 API para gerenciar uma lista de Receitas
## Tabela de Conteúdos
* Visão Geral
* Arquitetura
* Endpoints

# 1. Visão Geral
Visão geral do projeto, um pouco das tecnologias usadas.
* NodeJS
* Express
* TypeScript
* Zod

# 2. Arquitetura
  - Controller + Services, Interfaces, Routes, middlewares + errors, database(fake);

# 3. Endpoints
##Indice
* Recipe
  * Post - /recipes (Criação de uma Receita)
  * Get = /recipes (Leitura de todas as Receitas)
  * Get - /recipes/:id (Leitura de uma receita especifica)
  * Delete - /recipes/:id (Apagar uma receita)
  * Patch - /recipes/:id (Editar uma receita)
