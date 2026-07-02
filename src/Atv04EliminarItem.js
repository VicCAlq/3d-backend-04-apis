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

const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();


const app = express();
const porta = 3000;


const db = new sqlite3.Database(
  './beyblade.db',
  (erro) => {
    if (erro) {
      console.error('Erro ao abrir o banco de dados:', erro.message);
    } else {
      console.log('Banco de dados "beyblade.db" criado com sucesso!');
    }
  }
);


db.run(
  `CREATE TABLE IF NOT EXISTS beyblades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    lamina TEXT,
    catraca TEXT,
    ponta TEXT,
    participante TEXT NOT NULL UNIQUE
  )`,
  (erro) => {
    if (erro) {
      console.error('Erro ao criar a tabela:', erro.message);
    } else {
      console.log('Tabela "beyblades" criada com sucesso!');
    }
  }
);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtv.html'));
});

app.get('/api/beyblade', (req, res) => {


  db.all(
    `SELECT * FROM beyblades`,
    [],
    (erro, itensDaTabela) => {


      if (erro) {
        res.status(400).json({ error: erro.message });
        return;
      }


      res.status(200).json({
        message: "mensagem mensagem n sei mensagem",
        data: itensDaTabela
      });
     
    }
  );

 app.get('/api/beyblade/cadastrar', (req, res) => {


  const {
    nome,
    lamina,
    catraca,
    ponta,
    participante
  } = req.query;


  db.run(
    `INSERT INTO beyblades (nome, lamina, catraca, ponta, participante)
     VALUES (?, ?, ?, ?, ?)`,
    [nome, lamina, catraca, ponta, participante],
    function (erro) {
      if (erro) {
        res.status(400).json({ error: erro.message });
        return;
      }
      res.status(200).json({
        message: "Beyblade cadastrado com sucesso!",
        id: this.lastID
      });});});

});

app.delete('/api/beyblade/remover/:id', (req, res) => {


  const { id } = req.params;


  db.run(
    `DELETE FROM beyblades WHERE id = ?`,
    [id],
    function (erro) {


      if (erro) {
        res.status(400).json({ error: erro.message });
        return;
      }


      if (this.changes === 0) {
        res.status(404).json({
          error: "Beyblade não encontrada."
        });
        return;
      }


      res.status(200).json({
        message: "Beyblade removida com sucesso!"
      }););});



app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});


module.exports = app;
