# ServicesRemedio

## Visão Geral

**'ServicesRemedio'** é uma classe de serviço dentro da arquitetura Spring que gerencia operações de alto nível relacionadas a remédios. Esta classe encapsula a lógica de negócios e interage com o repositório para executar operações CRUD, garantindo a separação entre a camada de apresentação e a camada de persistência.

## Componentes

- **repository ('RemediosRepository')**: Um componente autowired que facilita a interação com a base de dados para operações sobre a entidade **'Remedio'**.

## Métodos

A classe **'ServicesRemedio'** oferece os seguintes métodos para manipulação de remédios:

### cadastrar

- **Descrição**: Cadastra um novo remédio no sistema.
- **Parâmetros**: **'DadosCadastroRemedio dados'** - DTO que contém os dados necessários para cadastro.
- **etorno**: **'ResponseEntity'** contendo os dados do remédio cadastrado.
- **Anotações Específicas**: **'@Transactional'** - Garante que a operação seja realizada dentro de uma transação.

### listar

- **Descrição**: Lista todos os remédios ativos no sistema.
- **Retorno**: **'ResponseEntity<List<DadosListagemRemedios>>'** com uma lista dos remédios ativos.
- **Transformação**: Converte entidades **'Remedio'** em **'DadosListagemRemedios'** usando a função **'map'**.

### atualizar

- **Descrição**: Atualiza as informações de um remédio existente.
- **Parâmetros**: **'DadosAtualizarRemedio dados'** - DTO com os dados para atualização.
- **Retorno**: **'ResponseEntity<DadosDetalhamentoRemedio>'** com os detalhes atualizados do remédio.

### reativar

- **Descrição**: Reativa um remédio que foi previamente inativado.
- **Parâmetros: 'Long id** - ID do remédio a ser reativado.
- **Retorno: 'ResponseEntity<Void>'** indicando o resultado da operação.

### excluir

- **Descrição**: Remove um remédio do sistema.
- **Parâmetros: 'Long id'** - ID do remédio a ser excluído.
- **Retorno: 'ResponseEntity<Void>'** indicando o resultado da operação.

### inativar

- **Descrição**: Inativa um remédio sem removê-lo do sistema.
- **Parâmetros**: **'Long id'** - ID do remédio a ser inativado.
- **Retorno: 'ResponseEntity<Void>'** indicando o resultado da operação.

## Segurança e Transações

- Métodos como **'cadastrar'**, **'atualizar'**, **'excluir'** e **'inativar'** são marcados com **'@Transactional** para garantir que as operações sejam completadas integralmente ou revertidas em caso de falha.
- Deve-se garantir que o acesso aos métodos seja controlado por meio de autenticação e autorizações apropriadas, provavelmente configuradas através do Spring Security.

## Práticas de Código

- Utilização de **'@Autowired'** para injeção de dependências, simplificando a configuração e garantindo a integridade do componente.
- Uso de **'ResponseEntity'** para oferecer flexibilidade na resposta HTTP, permitindo a fácil manipulação dos códigos de status e das mensagens de resposta.