import { Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPlayload{
  sub: string;
}

export function ensureAuthentication(request: Request, response: Response, next: NextFunction){
  //recebe token 
  const authToken = request.headers.authorization;
  
  //valida se o token ta preenchido
  if(!authToken){
    return response.status(401).end();
  }
  //verificar se o token é válido
  const [,token] = authToken.split(" ") //separa onde tem espaço, ignora a primeira parte do array e coloca o restante na segunda variável 
  try{ 
  const { sub } = verify( token, "56572d19c8bd83f13851fffd5da46dd0") as IPlayload;

  request.user_id = sub;

  return next();

  }catch(err){
    return response.status(401).end(); 
  }  
}

