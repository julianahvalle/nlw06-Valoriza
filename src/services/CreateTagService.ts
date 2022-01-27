import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositorioes/TagsRepositories"


class CreateTagService {
  async execute(name:string){
    const tagsRepositories = getCustomRepository(TagsRepositories);

    //verifica se não tem tome preenchido
    if(!name){
      throw new Error("Incorrect name!");
    }
    //verifica se a tag existente
    //o que findOne faz: SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await tagsRepositories.findOne({ 
    name,
    })
    if(tagAlreadyExists){
      throw new Error("User already exists!");
    }
    const tag = tagsRepositories.create({
      name
    });

    await tagsRepositories.save(tag);

    return tag; 
  }
}

export { CreateTagService }