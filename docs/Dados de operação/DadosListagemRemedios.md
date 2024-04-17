# DadosListagemRemedios

## Visão Geral: 

**'DadosListagemRemedios'** é um DTO (Data Transfer Object) projetado para fornecer informações essenciais sobre os remédios para listagens, como em interfaces de usuário que exibem múltiplos itens ou em relatórios. Este record simplifica a transmissão de dados essenciais sem expor detalhes desnecessários que são típicos em visualizações detalhadas.

## Estrutura do Record: 

Este record contém os seguintes campos essenciais para a listagem de remédios:

- **id ('Long')**: Identificador único do remédio.
- **nome ('String')**: Nome do remédio.
- **via ('Via')**: Via de administração do remédio (nasal, oral, vemosa, intramuscular, retal).
- **lote ('String')**: Número de lote do remédio.
- **laboratorio ('Laboratorio')**: Laboratório que fabrica o remédio.
- **validade ('LocalDate')**: Data de validade do remédio.

## Construtor

O construtor de **'DadosListagemRemedios'** aceita um objeto **'Remedio'** como parâmetro, do qual extrai e mapeia os atributos necessários para este record. Isso facilita a conversão de entidades **'Remedio'** em DTOs de listagem, otimizando a camada de serviço que manipula a lógica de conversão.

## Uso

Este DTO é ideal para ser utilizado em:

- Interfaces que listam remédios, onde apenas informações chave são necessárias.
- Relatórios que requerem uma visão rápida e essencial dos remédios em estoque ou em circulação.

## Exemplo de JSON para Listagem

```JSON

{
  "id": 101,
  "nome": "Paracetamol",
  "via": "ORAL",
  "lote": "X1234Y",
  "laboratorio": {
    "id": 3,
    "nome": "Laboratório Nacional"
  },
  "validade": "2024-10-20"
}

```

## Considerações de Design

- **Eficiência**: A estrutura deste DTO está otimizada para transmissões eficientes, contendo apenas os dados necessários para operações de listagem, reduzindo o overhead de dados.
- **Facilidade de integração**: O construtor que aceita um **'Remedio'** como entrada simplifica a transformação de entidades em DTOs, tornando o processo de alimentar interfaces de usuário e relatórios mais direto e menos propenso a erros.

## Segurança

As listagens de remédios podem incluir informações sensíveis como lotes e datas de validade, portanto, é essencial garantir que o acesso a esses dados seja controlado e seguro, limitando a visibilidade conforme as permissões do usuário.