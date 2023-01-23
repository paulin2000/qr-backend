import { Controller, Param, Patch, Post, Get, HttpStatus, HttpException } from '@nestjs/common';
import { Res, Body } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('login')
  async login(@Res() res, @Body(ValidationPipe) data: LoginUserDto) {
    const user = await this.userService.loginUser(data)
    if (user) {
      return res.status(HttpStatus.OK).json({ data:user });
    }
    return new HttpException(
      'failure while login the user',
      HttpStatus.BAD_REQUEST,
    );
  }

  @Post('create-user')
  async createUser(@Res() res, @Body(ValidationPipe) data: CreateUserDto) {
    console.log('test');
    const user = await this.userService.createUser(data)
    console.log(user)
    if (user) {
      const { id } = user;
      return res.status(HttpStatus.OK).json({ id });
    }
    return new HttpException(
      'failure while creating the user',
      HttpStatus.BAD_REQUEST,
    );
  }


  @Get('user/:id')
  async getUser(@Res() res, @Param('id') userId: string) {
    const user = await this.userService.getUser(userId)
    return res.status(HttpStatus.OK).json({ data: user });
  }


  @Patch('user/:id')
  async updateUser(@Res() res, @Param('id') userId: string,
    @Body(new ValidationPipe({ whitelist: true })) data: UpdateUserDto) {
    const user = await this.userService.updateUser(userId, data)
    if (user) {
      
      return res.status(HttpStatus.OK).json({ data:user });
    }
    return new HttpException(
      'failure while update the user',
      HttpStatus.BAD_REQUEST,
    );

  }

}
