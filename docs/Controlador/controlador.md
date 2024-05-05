# RemedioController

# Visão Geral: 

**'RemedioController'** gerencia as operações de interface relacionadas aos objetos **'Remedio'**. Esse controller é essencial para o módulo de gerenciamento de remédios, permitindo operações como cadastro, listagem, atualização, reativação, exclusão e inativação de remédios.

### Dependências:

- **'ServicesRemedio'**: Serviço de negócios que contém a lógica para manipulação dos dados de remédios. É injetado automaticamente pelo Spring.

- DTOs (**'DadosCadastroRemedio'**, **'DadosAtualizarRemedio'**, **'DadosDetalhamentoRemedio'**, **'DadosListagemRemedios'**): Classes que definem os dados necessários para as diversas operações realizadas pelo controller.

### Funcionalidades & Endpoints

#### 1. Cadastrar Remédio

- **Endpoint**: **'POST /remedios'**
- **Descrição**: Recebe dados de um novo remédio e solicita seu cadastro.
- **Parâmetros de Entrada**: **'DadosCadastroRemedio'**.
- **Resposta**: Um objeto ResponseEntity indicando o sucesso ou falha na operação.

#### 2. Listar Remédios

- **Endpoint**: **'GET /remedios'**
- **Descrição**: Lista todos os remédios cadastrados, com opção de filtragem e paginação implementadas no serviço.
- **Resposta**: Uma lista de **'DadosListagemRemedios'**.

#### 3. Atualizar Remédio

- **Endpoint**: **'PUT /remedios'**
- **Descrição**: Atualiza dados de um remédio existente no sistema.
- **Parâmetros de Entrada**: **'DadosAtualizarRemedio'**.
- **Resposta**: **'DadosDetalhamentoRemedio'** com os dados atualizados.

#### 4. Reativar Remédio

- **Endpoint**: **'PUT /remedios/\{id\}'**
- **Descrição**: Reativa um remédio que estava previamente inativo.
- **Parâmetros de URL**: **'id'** - Identificador do remédio.
- **Resposta**: ResponseEntity sem conteúdo, apenas status HTTP.

#### 5. Excluir Remédio

- **Endpoint**: **'DELETE /remedios/\{id\}'**
- **Descrição**: Exclui permanentemente um remédio do sistema.
    - **Parâmetros de URL**: **'id'** - Identificador do remédio.
- **Resposta**: ResponseEntity sem conteúdo, indicando a conclusão.

#### 6. Inativar Remédio

- **Endpoint**: **'DELETE /remedios/inativar/\{id\}'**
- **Descrição**: Inativa um remédio sem removê-lo da base de dados, marcando-o como inativo.
- **Parâmetros de URL**: **'id'** - Identificador do remédio.
- **Resposta**: ResponseEntity sem conteúdo.

### Segurança e Transações:

- Todos os endpoints que alteram dados são protegidos com a anotação **'@Transactional'**, assegurando que qualquer modificação no banco de dados seja consistente e revertida em caso de erro durante a transação.
- A segurança dos endpoints deve ser garantida pelo Spring Security (não explicitamente mencionado no código fornecido) para verificar autenticações e autorizações.

### Validação

- As entradas dos métodos **'cadastrar'** e **'atualizar'** são validadas utilizando as anotações de Jakarta Bean Validation **('@Valid')**, assegurando que os dados recebidos estejam conforme as regras de negócio estabelecidas nos DTOs.

### Testes

- É recomendável implementar testes unitários e de integração para cada um dos endpoints, assegurando que a lógica de negócios e as interações com o banco de dados funcionem como esperado sob diversas condições.

### Exceções

- Manipulação adequada de exceções deve ser implementada para lidar com casos de erro, como entradas inválidas ou falhas na execução das operações de banco de dados