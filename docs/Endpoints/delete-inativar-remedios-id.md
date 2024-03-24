# Inativar - DELETE /inativar/id

Este endpoint irá inativar um remédio.

**ATENÇÃO:** **Inativar** um remédio não é o mesmo que **Deletar**, ao inativar, o remédio continuará existindo no banco de dados e poderá ser reativado.

- Metodo: DELETE

Na requisição deve ser enviado o id do remedio que se deseja inativar, este id deve ser informado na url da requisição.

Exemplo de url para inativação: `/remedios/123`
