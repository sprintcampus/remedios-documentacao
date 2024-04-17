# Remedio

## Visão Geral

A classe **'Remedio'** representa a entidade fundamental no sistema de gerenciamento de remédios. Esta classe é mapeada para a tabela **'Remedios'** no banco de dados e é utilizada para armazenar e gerenciar informações relacionadas a medicamentos.

## Atributos da Entidade

- **id ('Long')**: O identificador único do remédio, gerado automaticamente.
- **nome ('String')**: O nome do remédio.
- **via ('Via')**: A via de administração do remédio, utilizando a enumeração **'Via'**.
- **lote ('String')**: O número de lote do remédio.
- **quantidade ('int')**: A quantidade disponível do remédio.
- **validade ('LocalDate')**: A data de validade do remédio.
- **laboratorio ('Laboratorio')**: O laboratório que produziu o remédio, utilizando a enumeração **'Laboratorio'**.
- **ativo ('boolean')**: Status que indica se o remédio está ativo ou não.

## Construtores

- **NoArgsConstructor**: Construtor padrão para uso do JPA.
- **AllArgsConstructor**: Construtor que inicializa todos os campos da entidade.
- **Remedio(DadosCadastroRemedio dados)**: Construtor que cria uma instância de Remedio a partir de um **'DadosCadastroRemedio'**, configurando o remédio como ativo por padrão.

## Métodos

- **atualizarInformacao(@Valid DadosAtualizarRemedio dados)**: Atualiza informações do remédio com dados fornecidos, modificando apenas os campos que não estão nulos no DTO de atualização.
- **inativar()**: Marca o remédio como inativo.
- **reativar()**: Marca o remédio como ativo novamente.

## Mapeamento JPA

- **@Entity(name = "Remedio"**): Especifica que esta classe é uma entidade.
- **@Table(name = "Remedios")**: Define o nome da tabela associada à entidade.
- **@Id @GeneratedValue(strategy = GenerationType.IDENTITY)**: Marca **'id'** como a chave primária e configura a geração automática do valor.
- **@Enumerated(EnumType.STRING)**: Indica que os campos enumerados **'via'** e laboratorio devem ser armazenados como strings.

## Validações

- As validações de campos individuais, tais como não nulos ou formatação, são delegadas aos DTOs, como **DadosCadastroRemedio** e **DadosAtualizarRemedio**, garantindo que os dados sejam validados antes de chegar à camada de persistência.

## Segurança e Transações

- Métodos críticos que alteram o estado do remédio, como **inativar** e **reativar**, devem ser executados dentro de transações para garantir a integridade e a consistência dos dados.
- A segurança de acesso a métodos específicos deve ser gerenciada por meio de configurações de segurança na camada de serviço ou controlador, assegurando que apenas usuários autorizados possam realizar operações sensíveis.

## Considerações de Design

- A implementação de métodos para alteração parcial de entidades, como **atualizarInformacao**, requer cuidado para evitar sobreposições indesejadas e manter a consistência dos dados.
- O uso de **@Valid** no método **atualizarInformacao** assegura que os dados passados respeitam as regras de validação definidas nos DTOs, protegendo a aplicação contra estados inválidos.
