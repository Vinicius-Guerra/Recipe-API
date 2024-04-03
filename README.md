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
 
 
# 1. Receita
O objeto Receita é definido como:
```json
  {
    "id": number,
    "title": string,
    "content": string,
    "steps": string[],
  }
```
*A chave steps é definica como um array de string.

## Rotas
### 1.1 Criação de Recipe POST /recipes
Padrão de corpo
```json
  {
     "title": "Exemplo 1",
     "content": "conteudo de descrição",
     "steps": ["passo1", "passo 2"],
  }

```

Padrão de resposta:
```json
  {
     "id": 1,
     "title": "Exemplo 1",
     "content": "conteudo de descrição",
     "steps": ["passo1", "passo 2"],
  }
```

### 1.2 Leitura de Receita GET /recipes
Padrão de resposta:
### Status 200 OK
```json
[
    {
     "id": 1,
     "title": "Exemplo 1",
     "content": "conteudo de descrição",
     "steps": ["passo1", "passo 2"],
  }
]

### Leitura de Receita individual GET /recipes/:id
Padrão de Resposta:
```json
{
 "id": 1,
 "title": "Exemplo 1",
 "content": "conteudo de descrição",
 "steps": ["passo1", "passo 2"],
}
```
Possiveis erros:
### Receita não encontrada 404
```json
{
   "error": "Recipe not found."
}
```
