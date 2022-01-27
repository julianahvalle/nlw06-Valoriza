import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User) //definição de repositório
//estende a classe repository que é do tipo usuário
class UsersRepositories extends Repository<User>{}

export { UsersRepositories }