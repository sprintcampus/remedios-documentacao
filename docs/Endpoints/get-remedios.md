# Listar - GET /remedios

Este endpoint é usado para recuperar uma lista de todos os remedios cadastrados na api

- Metodo: GET
- Retorna: Uma lista de remedios

Exemplo de formato do JSON de resposta:

```JSON

[
  {
    "id"          : 000000,
    "nome"        : "Nome",
    "via"         : "ORAL",
    "lote"        : "0000",
    "laboratorio" : "LABEXEMP",
    "validade"    : "2024-01-01"
  }
]

```
