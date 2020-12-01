import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('suggest')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    const user = await this.userService.findOne(id);
    if (!user) throw new NotFoundException('Id does not exist!');
    return user;
  }
}
