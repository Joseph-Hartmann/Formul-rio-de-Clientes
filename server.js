const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'formulario_db'
});

// Testa a conexão
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err.message);
    } else {
        console.log('Conectado ao banco de dados MySQL.');
    }
});

// 🔹 CREATE – Inserir novo cliente
app.post('/clientes', (req, res) => {
    const { nome, email, telefone, genero, data_nascimento, cidade, estado, endereco } = req.body;

    const query = `
        INSERT INTO clientes (nome, email, telefone, genero, data_nascimento, cidade, estado, endereco)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [nome, email, telefone, genero, data_nascimento, cidade, estado, endereco];

    connection.query(query, values, (err, result) => {
        if (err) return res.status(500).json({ message: 'Erro ao adicionar cliente', error: err });
        return res.status(201).json({ message: 'Cliente adicionado com sucesso', id: result.insertId });
    });
});

// 🔹 READ – Listar todos os clientes
app.get('/clientes', (req, res) => {
    connection.query('SELECT * FROM clientes', (err, results) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar clientes', error: err });
        return res.status(200).json(results);
    });
});

// 🔹 READ – Buscar cliente por ID
app.get('/clientes/:id', (req, res) => {
    const { id } = req.params;

    connection.query('SELECT * FROM clientes WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar cliente', error: err });
        if (result.length === 0) return res.status(404).json({ message: 'Cliente não encontrado' });
        return res.status(200).json(result[0]);
    });
});

// 🔹 UPDATE – Atualizar cliente por ID
app.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone, genero, data_nascimento, cidade, estado, endereco } = req.body;

    const query = `
        UPDATE clientes SET nome = ?, email = ?, telefone = ?, genero = ?, data_nascimento = ?, cidade = ?, estado = ?, endereco = ?
        WHERE id = ?
    `;
    const values = [nome, email, telefone, genero, data_nascimento, cidade, estado, endereco, id];

    connection.query(query, values, (err, result) => {
        if (err) return res.status(500).json({ message: 'Erro ao atualizar cliente', error: err });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Cliente não encontrado' });
        return res.status(200).json({ message: 'Cliente atualizado com sucesso' });
    });
});

// 🔹 DELETE – Remover cliente por ID
app.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;

    connection.query('DELETE FROM clientes WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Erro ao deletar cliente', error: err });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Cliente não encontrado' });
        return res.status(200).json({ message: 'Cliente deletado com sucesso' });
    });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
