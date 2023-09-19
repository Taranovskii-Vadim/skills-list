import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Skill } from './entity';
import { SkillsService } from './service';
import { SkillsController } from './controller';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  controllers: [SkillsController],
  providers: [SkillsService],
  exports: [],
})
export class SkillsModule {}
