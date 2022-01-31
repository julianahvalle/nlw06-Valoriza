import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositorioes/UserRepositories";

import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest{
  email: string;
  password: string;
}

class AuthenticateUserService{
  async execute({email, password}: IAuthenticateRequest){
    const usersRepository = getCustomRepository(UsersRepositories);
    //verificar se e-mail existe
    const user = await usersRepository.findOne({
      email
    });

    if(!user){
      throw new Error("Email/Password incorrect")
    }
    //se sim, verificar se senha correta
    const passwordMatch = await compare(password, user.password)
    //retorna true or false
    if(!passwordMatch){
      throw new Error("Email/Password incorrect")
    }
    // se correta, gerar token
    const token = sign({
      email: user.email
  },
  "56572d19c8bd83f13851fffd5da46dd0", 
  { 
    subject: user.id,
    expiresIn: "1d"
  }) 
  
    return token;
  }
}

export { AuthenticateUserService }