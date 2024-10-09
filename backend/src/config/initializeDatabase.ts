import { createPool, Pool, PoolOptions } from 'mysql2';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Nome do banco de dados
const databaseName = process.env.DB_DATABASE || 'codigo_certo_db';

// Configurações para criação do pool de conexão sem banco de dados específico
const initialPoolOptions: PoolOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Criação do pool de conexão inicial
const initialPool: Pool = createPool(initialPoolOptions);

// Função para garantir que o banco de dados exista
const ensureDatabaseExists = async (): Promise<void> => {

  //inicia uma promisse que é necessária para a query
  try{
    await initialPool.promise().query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\``)

    // if (err) {
    //   return reject(err);
    // }
    console.log(`Banco de dados '${databaseName}' garantido.`);

    // Cria um novo pool com o banco de dados especificado
    const databasePool: Pool = createPool({
      ...initialPoolOptions,
      database: databaseName
    });

    // Cria a tabela se não existir
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
      id CHAR(36) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      phone CHAR(36)
      )
    `;

    await databasePool.promise().query(createTableQuery)
    // if (err) {
    console.log(`Tabela 'users' garantida.`);
    await databasePool.promise().end();
        // return reject(err);
    // }

    // databasePool.end();
  }catch(err){
    console.error('Erro ao garantir o banco de dados ou criar a tabela:', err);
    throw err;
  }  
    // resolve();
    // });
};

export default {
    initialPool,
    ensureDatabaseExists 
}