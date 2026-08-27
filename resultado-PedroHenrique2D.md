Data de atualização: Dia 27/8/2026 às 11:50 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| Atividade 01 - Criação do banco | GET / deve responder com a página indexAtv.html | ✅ | ✅ | Sem erros |
| Atividade 01 - Criação do banco | deve criar o arquivo beyblade.db com a tabela "beyblades" | ✅ | ✅ | Sem erros |
| Atividade 01 - Criação do banco | a tabela "beyblades" deve ter as colunas corretas | ✅ | ✅ | Sem erros |
| Atividade 02 - Selecionar todos | GET / deve responder com a página indexAtv.html | ✅ | ✅ | Sem erros |
| Atividade 02 - Selecionar todos | GET /api/beyblade deve retornar todos os itens da tabela em JSON | ✅ | ✅ | Sem erros |
| Atividade 03 - Acrescentar item | GET /api/beyblade/cadastrar deve inserir os dados enviados pelo formulário | ✅ | ❌ | AssertionError: expected 201 to be 200 // Object.is equality |
| Atividade 03 - Acrescentar item | cadastrar uma segunda beyblade deve acumular na lista | ✅ | ✅ | Sem erros |
| Atividade 04 - Eliminar item | DELETE /api/beyblade/remover/:id deve remover a beyblade pelo id | ✅ | ✅ | Sem erros |
| Atividade 04 - Eliminar item | remover um id inexistente deve retornar um erro | ✅ | ❌ | AssertionError: expected [ 400, 404, 500 ] to include 200 |
