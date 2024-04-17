# DadosAtualizarRemedio

## Visão Geral:

**'DadosAtualizarRemedio'** é um DTO (Data Transfer Object) usado para transferir dados necessários para atualizar um remédio no sistema. Esta classe é parte do módulo de gestão de remédios e é utilizada para passar dados entre as camadas de serviço e controle.

## Estrutura do Record:

- **id ('Long')**: Identificador único do remédio. Deve ser não nulo e válido, representando um remédio existente no banco de dados.
- **nome ('String')**: Nome do remédio. Este campo pode ser nulo se o nome não for alterado durante a atualização.
- **via ('Via')**: Enumeração que descreve a via de administração do remédio (por exemplo, oral, intravenosa, etc.). Pode ser nulo se não for alterado.
- **laboratorio ('Laboratorio')**: Objeto que representa o laboratório associado ao remédio. Este pode ser nulo se o laboratório não for alterado na atualização.

## Validações:

- **id**: Deve ser fornecido para a atualização e é validado com a anotação @NotNull para garantir que não seja nulo.

## Uso:

- Este DTO é utilizado pelo método **'atualizar'** no **'RemedioController'** para receber os dados necessários para atualizar um registro de remédio no sistema. Os campos que não são obrigatórios permitem a atualização parcial dos dados do remédio.

## Exemplo de JSON para Requisição de Atualização:

```JSON
{
  "id"          : 0000,
  "nome"        : "Teste",
  "via"         : "NASAL",
  "laboratorio" : "LABEXEMP"
}
```

## Considerações de Design:

- **Flexibilidade**: Este record permite atualizações parciais, onde somente os campos fornecidos serão atualizados, proporcionando flexibilidade nas operações de atualização.
- **Integração**: Deve ser integrado com a camada de serviço para garantir que as atualizações sejam aplicadas corretamente no banco de dados, utilizando transações para manter a integridade dos dados.

## Segurança:

- Deve-se garantir que as operações que utilizam este DTO sejam seguras e autorizadas, especialmente no que diz respeito à alteração dos dados críticos do remédio.