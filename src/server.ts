import 'reflect-metadata';
import express,{ Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from './routes';

import "./database";

const app = express();

app.use(express.json());

app.use(router); //ta falando que vai inserir as nossas rotas criadas em routes.ts

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){
    //verifica se é uma instância da classe erro
    return response.status(400).json({error:err.message})
  }
    //se não, erro não
    return response.status(500).json({
    status:"Error",
    message: "Internal Server Error"
    })
})

app.listen(3333, () => console.log("server ir running"))