# RemediosRepository

## Visão Geral

**'RemediosRepository'** é uma interface do Spring Data JPA que fornece métodos de repositório para operações básicas e personalizadas em objetos do tipo **'Remedio'**. Esta interface estende **'JpaRepository'**, que fornece acesso a funcionalidades comuns de CRUD (Create, Read, Update, Delete) e manipulação de paginas e ordenação de dados.

## Métodos

A interface inclui os seguintes métodos específicos, além dos padrões fornecidos pelo **'JpaRepository'**:

### findAllByAtivoTrue

- **Assinatura: 'List\<Remedio\> findAllByAtivoTrue();'**
- **Descrição:** Retorna uma lista de todos os remédios que estão atualmente ativos no sistema.
- **Retorno**: **'List\<Remedio\>'** - Uma lista contendo instâncias de **'Remedio'** onde o campo ativo é verdadeiro.

## Uso

Esta interface é usada para interagir com a base de dados de remédios, permitindo operações como:

- Buscar todos os remédios.
- Buscar, atualizar ou deletar um remédio por seu ID.
- Listar todos os remédios que estão ativos.

## Exemplo de Uso

```Java
@Autowired
private RemediosRepository remediosRepository;

public List<Remedio> listarRemediosAtivos() {
    return remediosRepository.findAllByAtivoTrue();
}
```

## Configuração e Integração

- **JpaRepository**: Por ser uma extensão do **'JpaRepository'**, **'RemediosRepository'** automaticamente herda métodos como **'save()'**,**'findById()'**, **'findAll()'**, **'deleteById()'**, entre outros.
- **Spring Data JPA**: A integração com Spring Data JPA facilita a implementação dos métodos de repositório sem a necessidade de escrever qualquer SQL ou código de implementação, utilizando apenas declarações de método abstrato.

## Considerações de Design

- A interface deve ser utilizada apenas nos serviços que manipulam dados de **'Remedio'**, seguindo os princípios de responsabilidade única.
- A segurança dos métodos que alteram dados deve ser considerada, garantindo que apenas usuários autorizados possam executar operações de atualização ou exclusão.

## Segurança

- A segurança no acesso aos dados pode ser controlada através de configurações no Spring Security, assegurando que operações sensíveis sejam protegidas por autenticação e autorização adequadas.
