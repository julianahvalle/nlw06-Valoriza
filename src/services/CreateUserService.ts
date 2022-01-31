import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositorioes/UserRepositories";
import { hash } from "bcryptjs"

//cria uma interface I de interface para usar como "molde" da classe
interface IUserRequest{
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService{
    //quando eu quero passar um valor default no typescript faço q nem no admin
    async execute({name, email, admin = false, password}: IUserRequest){
      //desestruturação do tipo IUserRequest
      
      const usersRepository = getCustomRepository(UsersRepositories);
      //se não tiver nenhum e-mail vindo
      if(!email){
        throw new Error("Email incorrect");
      }
      //verifica se o usuário já existe pelo findOne, testando o e-mail
      const userAlreadyExists = await usersRepository.findOne({
        email,
      })
      //se o usuário já existe, lança uma exceção com um erro 
      if(userAlreadyExists){
        throw new Error("User already exists");
      }

        const passwordHash = await hash(password, 8);

      //se passar nas condições, criar um usuário:
      //criando a instância do objeto, passando as iformações que se quer
      const user = usersRepository.create({
        name,
        email,
        admin, 
        password: passwordHash //quando o valor é diferente do nome
      });
      //dps do objeto criado, passa o usuário para o userRepository
      await usersRepository.save(user);
      
      return user;
    }
}

export { CreateUserService }