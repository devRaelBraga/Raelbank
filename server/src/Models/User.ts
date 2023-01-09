import { prisma } from "../prisma/client";
import { User as user } from "@prisma/client";

export class User {
    async CreateUser({acc_num, name, password, email }): Promise<Boolean> {
        try{
            await prisma.user.create({
                data: {
                    acc_num,
                    name,
                    password,
                    email
                }
            });
    
            return true;
        }
        catch(error){
            console.log(error)
            return false;
        }
    }

    async Login({email}): Promise<user>{
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        });

        return user;
    }
}