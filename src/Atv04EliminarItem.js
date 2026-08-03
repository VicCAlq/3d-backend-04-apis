/*
  * [ATIVIDADE 4 - Eliminar Item]
  *
  * Copie o servidor feito na atividade 03, e acrescente uma
  * rota "DLETE" para o endereço "/api/beyblade/remover" após a rota
  * "/api/beyblade/cadastrar" criada no exercício anterior.
  *
  * Esta rota é executada quando, na tabela de beyblades cadastradas,
  * o botão "Remaover" é clicado. Esta rota deve armazenar as o id
  * da beyblade a ser removida (desta vez, por não ser uma rota do
  * tipo GET, essa informação não existe dentro de req.query, mas sim
  * dentro de req.params), e repassar esse id para o comando
  * SQL que realiza a remoção de itens da tabela. Confira como foi 
  * feito no app.js para referência.
  *
  * Ao final deste arquivo, use "module.exports = app" para
  * exportar o objeto do servidor para os testes automatizados.
  */

const express = require('express')
const path = require('path')
const cors = require('cors');
const sql = require('sqlite3').verbose();
const app = express();
const porta = 3000;

const db = new sql.Database(
  './beyblade.db',
  (erro) => {
    if (erro) {
      console.error('Erro ao abrir o banco de dados "beyblade.db":', erro.message);
    } else {
      console.log('Conectado ao banco de dados SQLite3 "beyblade.db"');
    }
  }
)

db.run(
  `CREATE TABLE IF NOT EXISTS beyblades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    lamina TEXT,
    catraca TEXT,
    ponta TEXT,
    participante TEXT NOT NULL UNIQUE
  )`,

  db.run(
    `INSERT INTO beyblades (nome, lamina, catraca, ponta, participante) VALUES`,
      (erro) => {
        if (erro) {
          console.error('Erro ao criar a tabela "beyblades"', erro.message);
        } else {
          console.log('beyblades inseridos na tabela "beyblades');
        }
      }
  )
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtv.html'))
})

app.get('/api/beyblade', (req, res) => {
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

app.get('/api/beyblade/cadastrar', (req, res) => {
  if (!req.query) {
    res.status(400).json({ error: erro.message });
    return
  }
  const {
    nome, lamina, catraca, ponta, participante
  } = req.query

  db.all(
    `INSERT INTO beyblade (nome, lamina, catraca, ponta, partipante) VALUES (?, ?, ?, ?, ?)`,
    [ nome, lamina, catraca, ponta, participante],
    (erro, itensDaTabela) => {
      if (erro) {
        res.status(400).json({ error: erro.message });
        return;
      }
      res.json({
        message: `O participante ${nome} com o seu bey beyblade que possui a lamina ${lamina} com a catraca ${catraca} e a ponta ${ponta} ira para o torneio regional!`,
        data: { id: this.lastID },
        id: this.lastID,
        total: itensDaTabela,
      });
    }
  )
})


app.delete('/api/beyblade/remover/:id', (req, res) => {
  if (!req.params) {
    res.status(400).json({ error: erro.message });
    return
  }

  const { id } = req.params

  db.all(
    `DELETE FROM beyblades WHERE id = ?`,
    [ id ],
    (erro, itensDaTabela) => {
      if (erro) {
        res.status(400).json({ error: erro.message });
        return;
      }
      if (this.changes === 0) {
        res.status(404).json({ error: 'Participante não encontrado' });
        return;
      }
      res.json({
        message: `Participante removido do torneio.`,
        data: { id: this.lastID },
        id: this.lastID,
        total: itensDaTabela,
      });
    }
  )
})

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`)
})

module.exports = app