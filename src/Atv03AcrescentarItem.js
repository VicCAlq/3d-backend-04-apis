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

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});


module.exports = app;
