# Criar - POST /remedios

Este endpoint é usado para **cadastrar um novo remedio** na api.

- Método: POST

Na requisição deve ser enviado um body em JSON contendo as seguintes informações:
- nome        : String
- via         : Via
- lote        : Long
- quantidade  : int
- validade    : LocalDate
- laboratorio : Laboratorio

Exemplo de JSON:

```JSON
{
  "nome"        : "nome",
  "via"         : "ORAL",
  "lote"        : "000",
  "quantidade"  :  1,
  "validade"    : "2024-01-01",
  "laboratorio" : "LABEXEMP"
}
```

Para mais informações, veja DadosCadastroRemedio.java
<!--TODO: adicionar links para arquivos .java e para documentação destes arquivos-->
