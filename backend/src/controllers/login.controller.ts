import { Request, Response } from "express";
import z, { ZodError } from "zod"
import { factoryDatabase } from "../factoryDatabase";
import { InvalidCredentialError } from "../use-case/error/InvalidCredentialError";


const loginBodySchema = z.object({
    email: z.string().email(),
    password: z.coerce.string().min(3)
})

export type loginBodyType =  z.infer<typeof loginBodySchema>

export class LoginController{

    async login(req:Request, res:Response){
        try{
            const { email, password } = loginBodySchema.parse(req.body);

            const loginUseCase = factoryDatabase()
            //mensagem de login e token passado para o login 
            const login = await loginUseCase.execute(email, password);

            return res.status(200).json({
                "message": login.message,
                "token": login.token
            })

        }catch(err){

            if(err instanceof InvalidCredentialError){
                return res.status(403).json({
                    "error":err.message
                })
            }

            if (err instanceof ZodError){
                return res.status(400).json({
                    "error": {
                        "message": err.errors.map(e => e.message),
                        "field": err.errors.map(e => e.path)
                    }
                })
            }
            return res.status(500).json({
                "error": "internal server error"
            })
            
        }
        
    }
}