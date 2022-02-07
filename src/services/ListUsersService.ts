import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositorioes/UserRepositories";
import { classToPlain } from "class-transformer";

class ListUsersService{
  async execute(){
    const usersRepository = getCustomRepository(UsersRepositories);
    const users = await usersRepository.find();

    return classToPlain(users);
  }
}

export { ListUsersService };