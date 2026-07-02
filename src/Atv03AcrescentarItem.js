/*
  * [ATIVIDADE 3 - Acrescentar Item]
  *
  * Copie o servidor feito na atividade 02, e acrescente uma
  * rota "GET" para o endereço "/api/beyblade/cadastrar" após a rota
  * "/api/beyblade" criada no exercício anterior.
  *
  * Esta rota é executada quando o formulário do site é preenchido,
  * e ao ser executada, esta rota deve armazenar as informações
  * preenchidas no formmulário em variáveis (estas informações
  * existem dentro do objeto req.query).
  *
  * Após armazenadas estas variáveis, deve ser executado o comando
  * SQL que permite a inserção de valores novos no banco de dados.
  * Confira como foi feito no app.js para referência.
  *
  * Ao final deste arquivo, use "module.exports = app" para
  * exportar o objeto do servidor para os testes automatizados.
  */

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'src')));

const  beybladedb = new sql.Database (
  './beyblade.db',
  (erro) => { 
    if (erro) {
      console.error('Erro ao abrir o banco de dados "beyblade.db":', erro.message);
    } else {
      console.log('Conectado ao banco de dados SQLite3 "beyblade.db"');
    }
  }
)
beybladedb.run (
  `CREATE TABLE IF NOT EXISTS beyblades
  
  id INTEGER PRIMARY KEY AUTOINCREMENT
  nome TEXT NOT NULL UNIQUE
  lamina TEXT,
  catraca TEXT,
  ponta TEXT,
  participante TEXT NOT NULL UNIQUE
   ` 
)

    db.run(
        `INSERT INTO  participante (nome, lamina, catraca, ponta, participante ) VALUES
          (Asa de Valquíria Accel', 'Valtryek
Espada', redondo ,aguda, 'Valt Aoi' ),
          ('Spriggan Spread Fusion', 'Storm Spryzen', redonda, aguda, 'Shuren Kurenai'),
          ('Drenar Fafnir 8 Nada', 'Garra Geist', agudo e pontudo, achatado, 'De La Hoya'),
        `,
        (erro) => {
          if (erro) {
            console.error('Erro ao criar inserir jogadores na tabela "selecao"', erro.message);
          } else {
            console.log('Jogadores inseridos na tabela "selecao');
          }
        }
      )

      app.get("/api/beyblade", (req, res) => {
         db.all(

    `SELECT * FROM beyblades`, 
    [],
    (erro, itensDaTabela) => {
      if (erro) {
        res.status(400).json({ error: erro.message })
        return
      }
      res.status(200).json({
        message: "Requisição feita com sucesso",
        data: itensDaTabela
      })
    }
  )
})

app.get("/api/beyblade/cadastrar", (req, res) => {

  if (!req.query) {
    res.status(400).json({ error: erro.message });
    return
  }

  const {
    nome, lamina, catraca, ponta, participante
  } = req.query

  db.all(
    `INSERT INTO beyblades (nome, lamina, catraca, ponta, participante) VALUES (?, ?, ?, ?, ?)`,
    [ nome, lamina, catraca, ponta, participante ],
    (erro, itensDaTabela) => {
      if (erro) {
        res.status(400).json({ error: erro.message });
        return;
      }
      res.json({
        message: `Jogador ${participante} inscrito com sucesso para o torneio de beyblayd ${nome} com o seu blayd preferido, que tem uma ${catraca} e uma ${lamina} com uma ${ponta}`,
        data: { id: this.lastID },
        id: this.lastID,
        total: itensDaTabela,
      });
    }
  )
})

app.get ( '/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtv.html'))
} );

app.listen(3000, () => {
    console.log('Servidor rodando! Acesse http://localhost:3000/');
});

module.exports = app
