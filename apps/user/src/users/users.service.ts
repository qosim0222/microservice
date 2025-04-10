import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users: CreateUserDto[] = [];

  create(createUserDto: Omit<CreateUserDto, 'id'>): CreateUserDto {
    const newUser: CreateUserDto = {
      ...createUserDto,
      id: this.users.length > 0 ? this.users.at(-1)!.id + 1 : 1,
    };
    this.users.push(newUser);
    return newUser;
  }



  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) return { message: "Not found!" };

    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return {
      message: "User updated successfully",
      user: this.users[userIndex],
    };
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) return { message: "User not found!" };

    const removedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);

    return {
      message: "User removed successfully",
      user: removedUser,
    };
  }
}