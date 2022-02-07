import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositorioes/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService{
  async execute(){
    const tagsRepositories = getCustomRepository(TagsRepositories);
    
    const tags = await tagsRepositories.find();

    return classToPlain(tags);

    // tags = tags.map(tag =>(
    //   {...tag, nameCustom: `#${tag.name}`}));
    // return tags;
  }
}

export { ListTagsService };