# DadosCadastroRemedio

## Visão Geral:

**'DadosCadastroRemedio'** é um DTO (Data Transfer Object) projetado para encapsular todos os dados necessários para o cadastro de um novo remédio na base de dados. Este objeto é utilizado nas operações de cadastro na camada de controle do sistema de gerenciamento de remédios.

## Estrutura do Record:

Este record contém os seguintes campos:

- **nome ('String')**: Nome do remédio. É obrigatório e deve ter no máximo 20 caracteres.
- **via ('Via')**: Via de administração do remédio, como oral, intravenosa, etc. Utiliza a enumeração Via.
- **lote ('String')**: Número de lote do remédio. É um campo obrigatório.
- **quantidade ('int')**: Quantidade do remédio a ser cadastrada.
- **validade ('LocalDate')**: Data de validade do remédio. Deve ser uma data futura.
- **laboratorio ('Laboratorio')**: Laboratório que fabrica o remédio. Utiliza a entidade **'Laboratorio'**.

## Validações:

- **Nome**:
    - **'@NotBlank(message = "O nome não pode estar em branco.")'**: Garante que o nome não seja nulo ou vazio.
    - **'@Size(max = 20, message = "O nome deve ter no máximo 20 caracteres.")'**: Limita o comprimento do nome a 20 caracteres.
- Lote:
    - **'@NotBlank(message = "O lote não pode estar em branco.")'**: Assegura que o lote não seja nulo ou vazio.
- Validade:
    - **'@Future(message = "A data de validade deve ser no futuro.")'**: Garante que a data de validade seja futura.

## Uso:

Este DTO é empregado pelo método **'cadastrar'** no **'RemedioController'** para receber os dados necessários ao registro de um novo remédio.

## Exemplo de JSON para Requisição de Cadastro:

```JSON
{
  
  "nome": "Ibuprofeno",
  "via": "ORAL",
  "lote": "A1234B",
  "quantidade": 100,
  "validade": "2025-12-31",
  "laboratorio" : "LABEXEMP"
}
```

## Considerações de Design:

- **Flexibilidade**: Este DTO é flexível e claro, simplificando o processo de cadastro ao validar os campos essenciais antes de prosseguir para a camada de serviço.
- **Integração**: Deve ser bem integrado com as funcionalidades da camada de serviço, que cuidará da lógica de negócio e persistência dos dados.

## Segurança:

- As operações que utilizam este DTO devem garantir que apenas usuários autorizados possam cadastrar novos remédios, especialmente para controlar o acesso a dados sensíveis e operações críticas