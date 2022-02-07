//subescrevendo uma biblioteca
declare namespace Express{
  export interface Request{
    user_id: string;
  }
}