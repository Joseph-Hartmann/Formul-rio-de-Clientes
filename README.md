
# Cadastro de Clientes

<<<<<<< HEAD
Este projeto é uma aplicação web simples para cadastro, visualização, edição e exclusão de clientes. Desenvolvido com Node.js, Express, MySQL e uma interface web em HTML, CSS e JavaScript puro, tem como objetivo demonstrar habilidades básicas de desenvolvimento full stack.

---

## ✨ Funcionalidades

- Cadastro de novos clientes com validação de campos.
- Listagem de todos os clientes cadastrados.
- Edição e atualização de dados existentes.
- Exclusão de registros com confirmação.
- Feedback visual de sucesso ou erro para cada operação.

---

## ⚙️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js com Express.js
- **Banco de Dados**: MySQL
- **Ferramentas**: XAMPP, MySQL Workbench, Visual Studio Code

---

## 💾 Banco de Dados

O projeto utiliza um banco de dados MySQL chamado `formulario_db`, contendo uma tabela `clientes` com os seguintes campos:

- `id` (chave primária, auto incremento)
- `nome`
- `email`
- `telefone`
- `genero`
- `data_nascimento`
- `cidade`
- `estado`
- `endereco`

Para criar a estrutura, basta importar o script [database.sql](./database.sql) disponível neste repositório.  

---

## ▶️ Como executar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/Joseph-Hartmann/Cadastro-de-Clientes.git
cd Cadastro-de-Clientes
```

2. **Configure o banco de dados:**

- Crie o banco `formulario_db` no MySQL.
- Execute o script `database.sql` para criar a tabela.

3. **Instale as dependências do backend:**

```bash
npm install
```

4. **Inicie o servidor:**

```bash
node index.js
```

5. **Abra o arquivo `index.html` em seu navegador.**

---

## 📁 Estrutura do Projeto

```
Cadastro-de-Clientes/
│
├── index.js              # Servidor Node.js com rotas da API
├── database.sql          # Script para criação do banco de dados
├── formulario.html       # Interface de cadastro
├── formulario_style.css  # Estilo da interface
├── README.md             # Este arquivo
```

---

## 📌 Requisitos

- Node.js
- MySQL (local ou servidor)
- Navegador moderno

---

## 📫 Contato

Projeto desenvolvido por **Joseph Hartmann**  
GitHub: [@Joseph-Hartmann](https://github.com/Joseph-Hartmann)

---

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar.
=======
Este projeto é um CRUD completo (Create, Read, Update, Delete) desenvolvido com **Node.js**, **Express**, **MySQL** e **HTML/CSS/JavaScript puros**. Ele permite o cadastro, listagem, edição e exclusão de clientes com uma interface simples e intuitiva.

## 🔧 Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- HTML5
- CSS3
- JavaScript Puro

## 💡 Funcionalidades

- Cadastro de clientes com validação de campos
- Listagem dos clientes em tabela dinâmica
- Edição de dados diretamente na interface
- Exclusão com confirmação
- Feedback visual com mensagens de sucesso ou erro

## 📦 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Joseph-Hartmann/Cadastro-de-Clientes.git
   cd Cadastro-de-Clientes
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure seu banco de dados MySQL:
   - Crie um banco de dados chamado `cadastro_clientes`
   - Execute o script `database.sql` (ver abaixo)

4. Inicie o servidor:
   ```bash
   node index.js
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 🗃️ Estrutura do Banco de Dados

```sql
CREATE DATABASE IF NOT EXISTS cadastro_clientes;

USE cadastro_clientes;

CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  genero VARCHAR(20),
  data_nascimento DATE,
  cidade VARCHAR(100),
  estado VARCHAR(100),
  endereco VARCHAR(255)
);
```

## 📁 Organização do Projeto

```
Cadastro-de-Clientes/
├── public/
│   ├── css/
│   ├── js/
│   └── index.html
├── database.sql
├── index.js
├── package.json
└── README.md
```

## 🙋‍♂️ Autor

- **Joseph Hartmann**  
  [GitHub](https://github.com/Joseph-Hartmann)
>>>>>>> 2f19af5 (Adiciona formulário de cadastro de clientes com integração à API)
