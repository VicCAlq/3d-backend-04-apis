Data de atualização: Dia 27/8/2026 às 11:44 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| Atividade 01 - Criação do banco | GET / deve responder com a página indexAtv.html | ✅ | ✅ | Sem erros |
| Atividade 01 - Criação do banco | deve criar o arquivo beyblade.db com a tabela "beyblades" | ✅ | ✅ | Sem erros |
| Atividade 01 - Criação do banco | a tabela "beyblades" deve ter as colunas corretas | ✅ | ❌ | AssertionError: expected '' to be 'TEXT' // Object.is equality |
| /Atv02.test.js | ❌ | ❌ | ❌ | Atividade não feita ou não exportada corretamente |
| Atividade 03 - Acrescentar item | GET /api/beyblade/cadastrar deve inserir os dados enviados pelo formulário | ✅ | ❌ | AssertionError: expected 400 to be 200 // Object.is equality |
| Atividade 03 - Acrescentar item | cadastrar uma segunda beyblade deve acumular na lista | ✅ | ❌ | AssertionError: expected [ { id: 1, nome: 'Valtryek', …(4) } ] to have a length of 2 but got 1 |
| Atividade 04 - Eliminar item | DELETE /api/beyblade/remover/:id deve remover a beyblade pelo id | ✅ | ❌ | Mensagem de Erro |
| Atividade 04 - Eliminar item | remover um id inexistente deve retornar um erro | ✅ | ❌ | Mensagem de Erro |
