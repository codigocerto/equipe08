import { Repository } from "./repository";
import { LoginUseCase } from "./use-case/login.useCase";
import initializePoll from "./config/database"

export function factoryDatabase(){
    const repository = new Repository(initializePoll)
    const loginUseCase = new LoginUseCase(repository)
    
    return loginUseCase;
}