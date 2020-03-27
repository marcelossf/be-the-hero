// importando o módulo express (require (express)) para dentro da variável express 
const express = require ('express');
const cors = require('cors');
const routes = require('./routes'); // importando o modulo routes (usando "./" para indicar um caminho)

// instanciação variável para iniciar a aplicação
const app = express();

app.use(cors()); 
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso (Recurso =~ método a ser chamado)
 */

/** 
 * MÉTODOS HTTP
 * 
 * GET: buscar/listar informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-endnode  
*/

/**
 * Tipos de PARÂMETROS
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, recursos, paginaçã0)
 * Route params: Parâmetros enviados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * BANCOS DE DADOS (Relacionais = SQL e Não-Relacionais = NoSQL)
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB...
 */

/**
 * Driver: SELECT * FROM users -> Abordagem  --> Requisição direto do banco de dados
 * Query builders: table('users').select('*').where() --> Reuisição da table usando abordagem JS
 */

// fazer com que a aplicação ouça uma porta (endereço usado para acessar o app)
app.listen(3333);