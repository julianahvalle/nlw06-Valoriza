import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Exclude } from "class-transformer";
@Entity("users") //entity recebe o nome da tabela
class User {

  @PrimaryColumn()
  readonly id: string; //somente para leitura
  
  @Column()
  name: string;
  
  @Column()
  email: string;
  
  @Column()
  admin: boolean;

  @Exclude()
  @Column()
  password: string;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }

}

export { User };
