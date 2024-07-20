import { User } from '../models/userModel';
import { Request, Response } from 'express';
import { createUser } from '../services/userRegisterService';

const registerUser = async(req:Request, res:Response) => {
    const { name, email, phone, password } = req.body;

    const user: User = { name, email, phone, password };
        if (!name || !email || !phone || !password) {
        return res.status(400).json({ error: 'All fields are mandatory' });
        
    try {
        const newUser = await createUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        
    };
  };
};
export { registerUser };