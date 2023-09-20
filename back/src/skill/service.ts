import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Skill } from './entity';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill) private readonly table: Repository<Skill>,
  ) {}

  async getAll(id: number): Promise<Skill[]> {
    return await this.table.find({ where: { category: { id } } });
  }

  async update(id: number, rate: number): Promise<number> {
    return (await this.table.save({ id, rate })).rate;
  }
}
