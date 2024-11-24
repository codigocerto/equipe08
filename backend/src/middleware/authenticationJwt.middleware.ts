import { randomUUID } from "crypto";
import "dotenv/config"
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export interface UserInterface{
    id:string;
    name:string;
    email:string;
    phone:string;
}

export function authenticationJwt(req:Request, res:Response, next:NextFunction){

    const header = req.header('Authorization')

    if(!header){
        throw new Error('Authentication is necessary!')
    }

    const token = header.split(' ')[1]

    if(!token){
        throw new Error('Authentication is necessary!')
    }

    try{
        const secret = process.env.JWT_SECRET || randomUUID() 
        const decoded = jwt.verify(token, secret) as JwtPayload
        req.user = decoded
        next();
    }catch(err){
        return res.status(403).json({
            "message": "Invalid credentials",
            "error":err
        });
    }
}