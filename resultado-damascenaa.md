Data de atualização: Dia 27/8/2026 às 11:48 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| Atividade 01 - Criação do banco | GET / deve responder com a página indexAtv.html | ✅ | ✅ | Sem erros |
| Atividade 01 - Criação do banco | deve criar o arquivo beyblade.db com a tabela "beyblades" | ✅ | ✅ | Sem erros |
| Atividade 01 - Criação do banco | a tabela "beyblades" deve ter as colunas corretas | ✅ | ❌ | AssertionError: expected '' to be 'TEXT' // Object.is equality |
| Atividade 02 - Selecionar todos | GET / deve responder com a página indexAtv.html | ✅ | ✅ | Sem erros |
| Atividade 02 - Selecionar todos | GET /api/beyblade deve retornar todos os itens da tabela em JSON | ✅ | ✅ | Sem erros |
| Atividade 03 - Acrescentar item | GET /api/beyblade/cadastrar deve inserir os dados enviados pelo formulário | ✅ | ❌ | TypeError: app.address is not a function |
| Atividade 03 - Acrescentar item | cadastrar uma segunda beyblade deve acumular na lista | ✅ | ❌ | TypeError: app.address is not a function |
| Atividade 04 - Eliminar item | DELETE /api/beyblade/remover/:id deve remover a beyblade pelo id | ✅ | ❌ | TypeError: app.address is not a function |
| Atividade 04 - Eliminar item | remover um id inexistente deve retornar um erro | ✅ | ❌ | TypeError: app.address is not a function |
