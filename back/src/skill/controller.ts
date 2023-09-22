import {
  Get,
  Patch,
  Post,
  Controller,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';

import { Skill } from './entity';
import { SkillsService } from './service';
import { PatchSkillDTO, PostSkillDTO } from './dto';

// TODO better create the third entity called user skills, because we will have buplicates in skills table
// if user 1 knows react and rates it to 3
// if user 2 also knows react and rates it to 5
// it will be two records in skills table
@Controller('/skills')
export class SkillsController {
  constructor(private readonly service: SkillsService) {}

  @Get(':id')
  async getSkills(@Param('id', ParseIntPipe) id: number): Promise<Skill[]> {
    return this.service.getAll(id);
  }

  @Post()
  async postSkill(@Body() body: PostSkillDTO): Promise<Skill> {
    return this.service.create(body);
  }

  @Patch(':id')
  async patchRate(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PatchSkillDTO,
  ): Promise<number> {
    return this.service.update(id, body.rate);
  }
}
