import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("tags")
class Tag{

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  //atribuição de criação de id 
  constructor(){
    if(!this.id){ //verifica se o campo id está preenchido
      this.id = uuidV4();
    }
  }

}

export { Tag };