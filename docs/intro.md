---
sidebar_position: 1
---

# Documentação do Projeto CRUD de Gerenciamento de Remédios

## Visão Geral do Projeto

O projeto de Gerenciamento de Remédios é um sistema baseado em Spring Boot que fornece uma solução para gerenciar informações sobre remédios. O sistema permite operações CRUD (Criar, Ler, Atualizar e Deletar) sobre remédios, incluindo funcionalidades para listar remédios ativos, inativar e reativar registros, e detalhar informações de um remédio específico.

## Componentes do Projeto

### Tecnologias Utilizadas

- **Spring Boot**: Framework utilizado para o desenvolvimento das funcionalidades do back-end, incluindo a configuração inicial do projeto, dependências e a execução de aplicativos standalone.
- **Spring Data JPA**: Framework utilizado para facilitar a integração entre a aplicação Java e os bancos de dados relacionais através do mapeamento objeto-relacional.
- **Hibernate**: Implementação de JPA utilizada para o mapeamento das entidades e a gestão da persistência.
- **Jakarta Persistence API**: Usada para a definição das classes de entidades e a camada de persistência.
- **Jakarta Bean Validation**: Usada para a validação de dados nas camadas de serviço e controle.
- **Spring Web MVC**: Utilizado para o desenvolvimento das APIs REST, definindo controllers e mapeando as operações HTTP.
- **Database**: PostgreSQL

### Estrutura de Pacotes

- **com.example.ApiRemedios.Remedio.DTO**: Contém os Data Transfer Objects (DTOs) utilizados para transferir dados específicos necessários para as operações.
- **com.example.ApiRemedios.Remedio.Entities**: Define as entidades do sistema, representando a estrutura da base de dados.
- **com.example.ApiRemedios.Remedio.Repository**: Interfaces do repositório que estendem JpaRepository, facilitando operações CRUD e queries personalizadas.
- **com.example.ApiRemedios.Remedio.Services**: Camada de serviço que contém a lógica de negócios, chamando os métodos definidos nos repositórios.
- **com.example.ApiRemedios.Remedio.Controllers**: Controllers que gerenciam as requisições e respostas HTTP, fazendo a ponte entre a camada de front-end e os serviços.

### Entidades

- **Remedio**: Representa a entidade principal com informações sobre os remédios, incluindo nome, via de administração, lote, quantidade, validade, laboratório e status de atividade.

### Enumerações

- **Via**: Define as possíveis vias de administração de um remédio (oral, nasal, venoso, intramuscular, retal).
- **Laboratorio**: Enumeração de laboratórios disponíveis que podem produzir os remédios.

### DTOs

- **DadosCadastroRemedio**
- **DadosAtualizarRemedio**
- **DadosDetalhamentoRemedio**
- **DadosListagemRemedios**

### Repositórios

- **RemediosRepository**: Provê métodos para buscar todos os remédios ou apenas os ativos, além de operações padrão de CRUD.

### Serviços

- **ServicesRemedio**: Contém métodos para cadastrar, listar, atualizar, reativar, excluir e inativar remédios, tratando as transações e validações necessárias.

### Controllers

- **RemedioController**: Gerencia as rotas API para as operações CRUD sobre remédios, utilizando os métodos dos serviços.

### Segurança

O projeto deve implementar segurança nas operações sensíveis, como a modificação e exclusão de dados. Embora não detalhado nos trechos de código fornecidos, o Spring Security é recomendado para autenticação e autorização.

### Considerações de Implementação

- **Transações**: As operações que alteram dados são transacionais, garantindo a consistência e integridade dos dados.
- **Validação**: Utiliza Jakarta Bean Validation para assegurar que os dados atendam aos requisitos antes de serem processados ou persistidos.
- **Flexibilidade na Resposta**: Uso de **'ResponseEntity'** para permitir respostas flexíveis nas APIs.

