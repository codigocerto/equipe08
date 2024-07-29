import { createPool, Pool, PoolOptions } from 'mysql2';
import initializeDatabase from './initializeDatabase';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configurações para criação do pool de conexão
const poolOptions: PoolOptions = {
  host: process.env.DB_HOST || 'localhost',     // Endereço do servidor MySQL
  user: process.env.DB_USER || 'root',          // Usuário do banco de dados
  password: process.env.DB_PASSWORD || 'root',      // Senha do banco de dados
  database: process.env.DB_DATABASE || 'codigo_certo_db', // Nome do banco de dados a ser utilizado
  waitForConnections: true,                     // Esperar por conexões disponíveis no pool
  connectionLimit: 10,                          // Número máximo de conexões no pool
  queueLimit: 0                                 // Número máximo de conexões na fila (0 = ilimitado)
};

// Criação do pool de conexão

async function initializePoll(){

  await initializeDatabase.ensureDatabaseExists()

  initializeDatabase.initialPool.end();

  const pool: Pool = createPool(poolOptions);

  // Teste da conexão
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err.stack);
      return;
    }
    console.log('Conexão bem-sucedida ao banco de dados, ID da conexão:', connection.threadId);
    connection.release(); // Libera a conexão
  });

  // retorna o pool de conexão para ser utilizado em outros módulos
  return pool;
}

const poolPromise = initializePoll()

//exporta uma promisse que quando resolvida vai liberar o pool de conexão
export default poolPromise;

