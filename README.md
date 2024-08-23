# SQL Query Builder

Um **SQL Query Builder** flexível e fácil de usar, que suporta diversos bancos de dados, incluindo Postgres, MySQL, MariaDB, SQLite3 e muito mais. Este projeto visa simplificar a construção de queries SQL, fornecendo uma interface de construção amigável que permite gerar consultas complexas de forma programática.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento do lado do servidor.
- **Knex.js**: Utilizado como *query builder* SQL para diferentes bancos de dados.

## Bancos de Dados Suportados

Este *query builder* suporta os seguintes bancos de dados:
- Postgres
- MySQL
- MariaDB
- SQLite3
- Oracle
- MSSQL

## Funcionalidades

- Suporte a múltiplos bancos de dados
- Construção de consultas SQL de forma programática
- Consultas complexas com facilidade
- Compatibilidade com *transactions*, *raw queries*, e *migrations*
- Suporte a *joins*, *subqueries*, e funções de agregação

## Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/seu-usuario/sql-query-builder.git
    ```

2. Instale as dependências:

    ```bash
    cd sql-query-builder
    npm install
    ```

3. Configure o banco de dados no arquivo `knexfile.js` de acordo com as suas necessidades:

    ```js
    module.exports = {
      client: 'pg', // ou mysql, mariadb, sqlite3, etc.
      connection: {
        host: 'localhost',
        user: 'seu-usuario',
        password: 'sua-senha',
        database: 'nome-do-banco'
      }
    };
    ```

4. Execute as migrações para criar as tabelas no banco de dados:

    ```bash
    npx knex migrate:latest
    ```

## Uso

Aqui está um exemplo de como construir uma query utilizando o *query builder*:

```js
const knex = require('knex')(require('./knexfile'));

// Selecionar todos os usuários
knex('users').select('*').then((rows) => {
  console.log(rows);
}).catch((err) => {
  console.error(err);
});

// Inserir um novo usuário
knex('users').insert({ name: 'João', email: 'joao@email.com' }).then(() => {
  console.log('Usuário inserido');
}).catch((err) => {
  console.error(err);
});
