import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const user = new User();

    user.email = createUserDto.email;
    user.orgId = createUserDto.orgId;

    const result = await this.usersRepository.save(user);

    return { email: result.email, orgId: result.orgId };
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
