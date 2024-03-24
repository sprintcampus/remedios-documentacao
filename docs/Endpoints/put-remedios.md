# Atualizar - PUT /remedios

Este método é utilizado para atualizar um certo remédio.

- Metodo: PUT

Na requisição, deve ser enviado um body em JSON contendo as seguintes informações:
- id          : Long
- nome        : String
- via         : Via
- laboratorio : Laboratorio

Exemplo de JSON:

```JSON
{
  "id"          : 0000,
  "nome"        : "Teste",
  "via"         : "NASAL",
  "laboratorio" : "LABEXEMP"
}
```
Para mais informações, veja DadosAtualizarRemedio.java
<!--TODO: adicionar links para arquivos .java e para documentação destes arquivos-->
