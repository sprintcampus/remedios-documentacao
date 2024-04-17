# Via

## Visão Geral

A enumeração **'Via'** define as diferentes vias de administração para remédios no sistema de gerenciamento de remédios. Ela é utilizada para categorizar como os medicamentos devem ser administrados ao paciente, garantindo a correta especificação e registro nos sistemas de informações de saúde.

## Enumeradores

**'Via'** inclui os seguintes valores:

- **ORAL**: Administração do remédio pela boca.
- **NASAL**: Administração do remédio através das narinas.
- **VENOSO**: Administração do remédio diretamente nas veias.
- **INTRAMUSCULAR**: Administração do remédio no músculo.
- **RETAL**: Administração do remédio através do reto.

## Uso

Esta enumeração é amplamente utilizada em entidades que armazenam dados de remédios, como **'Remedio'**, onde é essencial especificar a via de administração para adequar o tratamento ao tipo de remédio e à condição tratada.

## Exemplo de Uso em uma Entidade

Em uma entidade **'Remedio'**, **'Via'** pode ser utilizada para definir como o remédio deve ser administrado:

``` Java

    public class Remedio {
    private Via via;

    // Construtores, getters e setters
}

```

## Benefícios

- **Padronização**: Utilizar uma enumeração para as vias de administração assegura que os dados sejam consistentes e padronizados em todo o sistema.
- **Facilidade de Manutenção**: A adição de novas vias ou a modificação das existentes é centralizada, facilitando atualizações e manutenções.
- **Segurança do Tipo**: As enumerações em Java fornecem segurança de tipo, o que reduz erros comuns como digitação incorreta ou uso de valores inválidos.

## Considerações

- Mudanças nos valores da enumeração podem afetar funcionalidades existentes e devem ser tratadas com cuidado, especialmente se a enumeração estiver integrada em várias partes do sistema.
- Em cenários onde as vias de administração possam ser extremamente variáveis ou expandidas frequentemente, pode ser mais apropriado considerar uma abordagem mais dinâmica, como utilizar uma entidade ou uma tabela configurável.