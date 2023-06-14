const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
app.use(express.json());

let db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

db.run('CREATE TABLE IF NOT EXISTS users(nome, cpf, telefone, email, senha, placa, chassi, ano, crlv, van, turno, bairros)', (err) => {
  if (err) {
    return console.log(err.message);
  }
});

app.post('/add-user', (req, res) => {
  const { nome, cpf, telefone, email, senha, placa, chassi, ano, crlv, van, turno, bairros  } = req.body;
  db.run(`INSERT INTO users(nome, cpf, telefone, email, senha, placa, chassi, ano, crlv, van, turno, bairros) VALUES(?, ?)`, [nome, cpf, telefone, email, senha, placa, chassi, ano, crlv, van, turno, bairros], function(err) {
    if (err) {
      return console.log(err.message);
    }
    res.send(`User added with ID: ${this.lastID}`);
  });
});

app.delete('/delete-user', (req, res) => {
  const { email } = req.body;
  db.run(`DELETE FROM users WHERE email = ?`, email, function(err) {
    if (err) {
      return console.log(err.message);
    }
    res.send(`User with email: ${email} deleted`);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
