import { User } from '../models/userModel';
import { hashPassword } from './userService';
import poolPromise from '../config/database';
import { randomUUID } from 'crypto';

const createUser = async(user: User) => {

    const hashedPassword= await hashPassword(user.password);
    const pool = await poolPromise
    const connection = await pool.promise().getConnection();

    try {
      const randomIdUser = randomUUID()

        const [result] = await connection.query(
            'INSERT INTO users (id, name, email, phone, password) VALUES (?, ?, ?, ?, ?)',
            [randomIdUser, user.name, user.email, user.phone, hashedPassword]
        );

            //const insertId = (result as any).insertId;
            const newUser = { 
                id: randomIdUser, //insertId
                name: user.name, 
                email: user.email, 
                phone: user.phone,
                password:hashedPassword 
            };
            return newUser;
          
    } catch (error) {
        throw new Error('error'); 
    } finally {
    connection.release();
  };
};

const checkIfEmailExists = async (email: string): Promise<boolean> => {
    const pool = await poolPromise

    try {
      const [rows] = await pool.promise().query(
        'SELECT * FROM users WHERE email = ?',
        [email]
      );
      
      return (rows as any[]).length > 0;

    } catch (error) {

      console.error('Error checking email:', error);
      throw new Error('Error checking email');
    };
  };

export{
  createUser,
  checkIfEmailExists   
};
