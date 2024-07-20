import { createUser,checkIfEmailExists} from '../services/userRegisterService';
import { User } from '../models/userModel';
import { Request, Response } from 'express';

const registerUser = async(req:Request, res:Response) => {
    
  const { name, email, phone, password } = req.body;
  
  const user: User = { name, email, phone, password };
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: 'All fields are mandatory.' });
  }
  try {
    const emailExists = await checkIfEmailExists(email);
    
    if (emailExists) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const newUser = await createUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  };
};
export { registerUser };