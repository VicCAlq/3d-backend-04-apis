/*
  * [ATIVIDADE 1 - Criação do banco]
  *
  * Crie um aplicativo Express em uma variável chamada app
  * que, ao ser inicializado, cria um banco de dados chamado
  * "beyblade.db". Siga o exemplo no arquivo "app.js" para
  * referência.
  *
  * Após criar o banco de dados, crie uma tabela chamada 
  * "beyblades" com as colunas abaixo:
  *
  * id, com propriedades INTEGER, PRIMARY KEY e AUTOINCREMENT
  * nome, com propriedades TEXT, NOT NULL e UNIQUE
  * lamina, com propriedade TEXT,
  * catraca, com propriedade TEXT,
  * ponta, com propriedade TEXT,
  * participante, com propriedades TEXT, NOT NULL e UNIQUE
  *
  * Após isso, você deve criar uma rota "GET" no endereço "/"
  * que envia o arquivo "indexAtv.html".
  *
  * Por fim, o servidor deve ouvir a porta 3000.
  *
  * Ao final deste arquivo, use "module.exports = app" para
  * exportar o objeto do servidor para os testes automatizados.
  */

/*
  * [ATIVIDADE 1 - Criação do banco]
  *
  * Crie um aplicativo Express em uma variável chamada app
  * que, ao ser inicializado, cria um banco de dados chamado
  * "beyblade.db". Siga o exemplo no arquivo "app.js" para
  * referência.
  *
  * Após criar o banco de dados, crie uma tabela chamada 
  * "beyblades" com as colunas abaixo:
  *
  * id, com propriedades INTEGER, PRIMARY KEY e AUTOINCREMENT
  * nome, com propriedades TEXT, NOT NULL e UNIQUE
  * lamina, com propriedade TEXT,
  * catraca, com propriedade TEXT,
  * ponta, com propriedade TEXT,
  * participante, com propriedades TEXT, NOT NULL e UNIQUE
  *
  * Após isso, você deve criar uma rota "GET" no endereço "/"
  * que envia o arquivo "indexAtv.html".
  *
  * Por fim, o servidor deve ouvir a porta 3000.
  *
  * Ao final deste arquivo, use "module.exports = app" para
  * exportar o objeto do servidor para os testes automatizados.
  */

const express = require('express');
const path = require('path');
const cors = require('cors');
const sql = require('sqlite3').verbose();
const porta = 3000;
const app = express();


app.use(express.urlencoded({ extended: true}))
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'src')))

const db - new sql.Database(
  '/beyblades.db',
  (erro) => {
    if (erro) {
      console.error('erro ao abrir o banco de dados "beyblade.db":', erro.message);
    } else {
      console.log('conectado ao banco de dados SQLite3 "beyblade.db"');
    }
  }
)

db.run(
  `id INTEGER, PRIMARY KEY e AUTOINCREMENT
   nome TEXT, NOT NULL e UNIQUE
   lamina TEXT,
   catraca TEXT,
   ponta TEXT,
   participante TEXT, NOT NULL e UNIQUE
)`,

(erro) => {
  if(erro){
    console.error('erro ao criar a tabela "beyblade', erro.message);
  } else {
    console.log('Tabela "beyblade" pronta veyr!!!!');

    db.run(
      
    )
  }
} 

  )

