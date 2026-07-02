/*
  * [ATIVIDADE 2 - Selecionar Todos]
  *
  * Copie o servidor feito na atividade 01, e acrescente uma
  * rota "GET" para o endereço "/api/beyblade" após a rota
  * "/" criada no exercício anterior.
  *
  * Esta rota deve executar o código SQL que retorna
  * todos os itens da tabela "beyblades" criada no exercício
  * anterior, e envia o resultado para o site em uma mensagem
  * no formato JSON. Siga os exemplos no arquivo "app.js"
  * para entender melhor.
  *
  * Ao final deste arquivo, use "module.exports = app" para
  * exportar o objeto do servidor para os testes automatizados.
  */

const express = require('express')
const path = require('path')
const cors = require('cors');
// Importando a ferramenta pra utilizar bancos de dados
const sql = require('sqlite3').verbose()

// Definindo a porta usada para abrir o servidor (no final deste código)
const porta = 3000

const app = express()
// Necessário para leitura do corpo de uma requisição
app.use(express.urlencoded({ extended: true }))
// Necessário para interpretação do formato JSON
app.use(express.json())
// Para evitar erros de CORS
app.use(cors());
// Para configurar o servidor para olhar dentro da pasta src por padrão
app.use(express.static(path.join(__dirname, 'src')));

// Criação do banco de dados
const db = new sql.Database(
  './beyblade.db', // Nome do arquivo do banco de dados
  (erro) => { // Função que executa que o banco é criado
    if (erro) {
      console.error('Erro ao abrir o banco de dados "beyblade.db":', erro.message);
    } else {
      console.log('Conectado ao banco de dados SQLite3 "beyblade.db"');
    }
  }
)

// A função "run" executa código SQL, e recebe 2 argumentos
db.run(
  // 1º argumento = comando SQL
  `CREATE TABLE IF NOT EXISTS beyblades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    lamina TEXT,
    catraca TEXT,
    ponta TEXT,
    participante TEXT NOT NULL UNIQUE
  )`,
  // 2º argumento = função executada após termos o resultado do comando SQL
  (erro) => {
    if (erro) {
      console.error('Erro ao criar a tabela "beyblades"', erro.message);
    } else {
      console.log('Tabela "beyblades" pronta!');

      db.run(
        `INSERT INTO beyblades (nome, lamina, catraca, ponta, participante) VALUES
          ('Valtryek', 'Valtryek (V1)', 'Wing', 'Accel', 'Valt Aoi')
        `,
        (erro) => {
          if (erro) {
            console.error('Erro ao criar inserir jogadores na tabela "beyblades"', erro.message);
          } else {
            console.log('Jogadores inseridos na tabela "beyblades');
          }
        }
      )
    }
  }
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtv.html'))
})

// Nossa primeira rota de API vai enviar todas as informações do banco de dados
app.get('/api/beyblade', (req, res) => {

  // "all" envia todas as informações que combinarem com os parâmetros
  db.all(
    // 1º argumento: comando SQL
    `SELECT * FROM beyblades`, 
    // 2º argumento: parâmetros (exemplo: posição = "zagueiro")
    [],
    // 3º argumento: Função executada após termos o resultado do comando SQL
    (erro, itensDaTabela) => {
      // Se der ruim, enviamos a mensagem  de erro
      if (erro) {
        res.status(400).json({ error: erro.message })
        return
      }
      // Se der bom, enviamos o resultado
      res.status(200).json({
        message: "Requisição feita com sucesso",
        data: itensDaTabela
      })
    }
  )
})

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`)
})

module.exports = app