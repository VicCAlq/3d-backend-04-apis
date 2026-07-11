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
const sql = require('sqlite3').verbose()

const porta = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

const db = new sql.Database(
‘./beyblade.db’,
(erro) => {
    if (erro) {
      console.error('Erro ao abrir o banco de dados "figurinhas.db":', erro.message);
    } else {
      console.log('Conectado ao banco de dados SQLite3 "figurinhas.db"');
    }
  }
)

db.run(
  ‘CREATE TABLE IF NOT EXIST beyblades (
   id INTEGER  PRIMARY KEY  AUTOINCREMENT,
   nome TEXT NOT NULL UNIQUE,
   lamina TEXT,
   catraca TEXT,
   ponta TEXT,
   participante TEXT NOT NULL UNIQUE
)’,

(erro) => {
    if (erro) {
      console.error('Erro ao criar a tabela "beyblade"', erro.message);
    } else {
      console.log('Tabela "beyblade" pronta!');

db.run(
 ‘INSERT INTO beyblade (nome, caracteristicas, jogador) VALUES
    )
  }
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtv.html'))
})

app.get(‘/api/beyblade’, (req, res) => {
 db.all(
    `SELECT * FROM beyblade’, 
    [],
      (erro, itensDaTabela) => {
        if (erro) {
        res.status(400).json({ error: erro.message })
        return
}
res.status(200).json({
        message: "Tudo feito :)",
        data: itensDaTabela
      })
    }
  )
})

app.get(‘/api/beyblade/cadastrar’, (req, res) => {

}

module.exports = app





