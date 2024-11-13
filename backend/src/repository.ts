import { Pool, QueryError, RowDataPacket } from "mysql2"

export interface databaseType{
    id:string,
    name:string,
    email:string,
    password:string,
    phone:string
}


export class Repository{

    constructor(private poolPromise: Promise<Pool>){}
    
    create(){

    }
    async readAll(){
        const pool = await this.poolPromise

        const user = await new Promise<databaseType[]| []>((resolve,reject)=>{
            pool.query('SELECT * FROM users', (error: QueryError| null, result: RowDataPacket[])=>{
                if(error){
                    return reject(error);
                }
                resolve(result as databaseType[])
            })
        })

        return user
    }

    async readOne(email:string){

        const pool = await this.poolPromise

        const user = await new Promise<databaseType | null>((resolve,reject)=>{
            pool.query('SELECT * FROM users WHERE email = ? LIMIT 1',[email], (error: QueryError| null, result: RowDataPacket[])=>{
                if(error){
                    return reject(error);
                }

                if(result.length > 0){
                    resolve(result[0] as databaseType);
                }
                resolve(null)
            })
        })

        return user

    }

    update(){

    }

    delete(){

    }
}