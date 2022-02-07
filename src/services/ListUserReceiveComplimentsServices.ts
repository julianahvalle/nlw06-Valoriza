import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositorioes/ComplimentsRepositories";



class ListUserReceiveComplimentsServices{
  //execute é o nome da função
  async execute(user_id:string){
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsRepositories.find({
      where:{
        user_receiver: user_id
      }, 
      relations: ["UserSender", "UserReceiver", "tag"] //objetos que eu quero q se relacionem
    });
    
    return compliments 
  }
}

export { ListUserReceiveComplimentsServices };