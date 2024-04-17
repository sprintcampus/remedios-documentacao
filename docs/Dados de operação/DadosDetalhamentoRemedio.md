# DadosDetalhamentoRemedio 

## Visão Geral:

**'DadosDetalhamentoRemedio'** é um DTO (Data Transfer Object) utilizado para fornecer uma visão detalhada das informações de um remédio. Este record é essencial para operações que requerem um completo detalhamento do estado de um remédio, como visualizações ou atualizações detalhadas.

## Estrutura do Record:

Este record encapsula os seguintes dados de um remédio:

- **id ('Long')**: Identificador único do remédio.
- **nome ('String')**: Nome do remédio.
- **via ('Via')**: Via de administração do remédio (nasal, oral, vemosa, intramuscular, retal).
- **lote ('String')**: Número de lote do remédio.
- **quantidade ('int')**: Quantidade disponível do remédio.
- **validade ('LocalDate')**: Data de validade do remédio.
- **laboratorio ('Laboratorio')**: Laboratório que fabrica o remédio.
- **ativo ('boolean')**: Estado do remédio, indicando se está ativo ou inativo.

## Construtor:

O construtor de **'DadosDetalhamentoRemedio'** recebe um objeto **'Remedio'** e mapeia seus atributos para o record. Isso facilita a criação do DTO a partir de uma entidade **'Remedio'**, simplificando a transferência de dados entre as camadas de persistência e a camada de apresentação.

## Uso:

Este DTO é amplamente utilizado nas seguintes situações:

- Ao retornar os detalhes de um remédio específico em uma solicitação de API.
- Em processos de logística que necessitam informações detalhadas para operações como auditoria, controle de estoque, e verificação de validade.

## Exemplo de JSON para Resposta de Detalhamento:

```JSON

{
  "id": 1,
  "nome": "Ibuprofeno",
  "via": "ORAL",
  "lote": "B1234C",
  "quantidade": 150,
  "validade": "2025-09-15",
  "laboratorio": {
    "id": 2,
    "nome": "Laboratório Exemplo"
  },
  "ativo": true
}

```

## Considerações de Design:

- **Integridade**: As informações do remédio são diretamente mapeadas do objeto **'Remedio'**, garantindo que os dados sejam representados com precisão e consistência.
- **Versatilidade**: A presença do construtor facilita a integração com a camada de serviço, permitindo transformar facilmente as entidades do banco de dados em objetos de transferência de dados.

## Segurança:

- É recomendável garantir que os detalhes dos remédios sejam acessados apenas por usuários autorizados, especialmente em ambientes onde informações sensíveis como lotes e quantidades são manipuladas.