import "dotenv/config"
import { Repository } from "../repository"
import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { randomUUID } from "crypto"
import { InvalidCredentialError } from "./error/InvalidCredentialError"

export class LoginUseCase{

    constructor(private repository:Repository){}

    async execute(email:string, password:string){

        const user  = await this.repository.readOne(email)
        
        if(!user){
            throw new InvalidCredentialError()
        }

        const ifPasswordMatches = await compare(password, user.password)

        if(!ifPasswordMatches ){
            throw new InvalidCredentialError()
        }
        
        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email:user.email,
            phone:user.phone
        },process.env.JWT_SECRET || randomUUID(),{
            expiresIn: '24h'
        })

        return {
            message:"user logged",
            token,
        };
    }
}