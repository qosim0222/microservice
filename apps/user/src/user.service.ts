import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll(){
    return [
      {name:"banan", price:23, color:"yellow"},
      {name:"chery", price:56, color:"red"},
      {name:"kivi", price:89, color:"gren"},
      {name:"apple", price:12, color:"red"},
    ]
  }
}
  