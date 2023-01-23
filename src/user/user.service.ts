import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserEntity } from './models/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async createUser(data: CreateUserDto) {
    const newUser = this.userRepository.create(data);
    return await this.userRepository.save(newUser);

  }
  async getUser(userId: string) {
    return await this.getUserById(userId)

  }
  async updateUser(userId: string, data: UpdateUserDto) {
    const exist = await this.userExist(userId);
    if (exist) {
      const updatedUser = await this.userRepository.preload({
        id: userId,
        ...data,
      });
      return await this.userRepository.save(updatedUser);
    }
  }

  async loginUser( data: LoginUserDto) {
    const user: UserEntity = await this.getUserByUsername(data.username)
    if(!user){
      throw new HttpException(
        'failure while login the user',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(user, "user", data.username)
    if( data.password === user.password ){
      return user
    }else{
      throw new HttpException(
        'failure while login the user',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async userExist(id: string) {
    const user = await this.getUserById(id);
    return user ? true : null;
  }
  async getUserById(userId: string): Promise<UserEntity> {
    const user: UserEntity = await this.userRepository.findOne({ where: { id: userId } });
    return user;
  }
  async getUserByUsername(username: string): Promise<UserEntity> {
    const user: UserEntity = await this.userRepository.findOne({ where: { username: username } });
    return user;
  }


}
