import { createPool, Pool, PoolOptions } from 'mysql2';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configurações para criação do pool de conexão
const poolOptions: PoolOptions = {
  host: process.env.DB_HOST || 'localhost',     // Endereço do servidor MySQL
  user: process.env.DB_USER || 'root',          // Usuário do banco de dados
  password: process.env.DB_PASSWORD || '',      // Senha do banco de dados
  database: process.env.DB_DATABASE || 'meu_banco_de_dados', // Nome do banco de dados a ser utilizado
  waitForConnections: true,                     // Esperar por conexões disponíveis no pool
  connectionLimit: 10,                          // Número máximo de conexões no pool
  queueLimit: 0                                 // Número máximo de conexões na fila (0 = ilimitado)
};

// Criação do pool de conexão
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

// Exporta o pool de conexão para ser utilizado em outros módulos
export default pool;
