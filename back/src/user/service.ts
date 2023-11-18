import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly table: Repository<User>,
  ) {}

  async findByLogin<T>(value: T): Promise<User | null> {
    const result = await this.table
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.login = :login', { login: value })
      .getOne();

    return result;
  }
}
