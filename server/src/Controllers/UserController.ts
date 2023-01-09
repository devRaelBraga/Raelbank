import { Request, Response } from "express";
import { User } from "../Models/User";
import { randomUUID } from "crypto";

export class UserController {
    async createUser(req: Request, res: Response) {
        function acc_numGenerator(){
            var acc_num = "";
    
            for (let index = 0; index < 8; index++) {
                acc_num += Math.floor(Math.random() * 10);
            }
    
            return parseInt(acc_num)
        }
        const {name, password, email } = req.body;

        const user = new User();
        const acc_num = acc_numGenerator();
        
        const result = await user.CreateUser({ acc_num, name, password, email });

        if(result == true){
            return res.status(201).json({mensagem: "Usuário criado com sucesso"});
        }
        return res.status(401).json({mensagem: "Erro na criação do usuário"});
    }

    async login(req: Request, res: Response) {
        const {email, password} = req.body;

        const user = new User();

        const result = await user.Login({ email });
        try {
            return res.status(200).json(result);
            
        } catch (error) {
            console.log(error)
            return res.status(401).json({mensagem: "Erro na autenticação"});
        }

    }
}