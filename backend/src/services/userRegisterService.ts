import { User } from '../models/userModel';
import { hashPassword } from './userService';
import pool from '../config/database';

const createUser = async(user: User) => {
    const hashedPassword= await hashPassword(user.password);
    const connection = await pool.promise().getConnection();
    try {
        const [result] = await connection.query(
            'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
            [user.name, user.email, user.phone, hashedPassword]
        );
            const insertId = (result as any).insertId;

            const newUser = { 
                id: insertId, 
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
export { createUser};

