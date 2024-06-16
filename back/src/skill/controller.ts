import { join } from 'path';
import {
  Get,
  Patch,
  Post,
  Controller,
  Param,
  ParseIntPipe,
  Body,
  UseInterceptors,
  UploadedFile,
  Res,
  UseGuards,
} from '@nestjs/common';

import { User } from 'src/utils/decorators';
import { UploadImageInterceptor } from 'src/utils/interceptors';

import { JwtAuthGuard } from 'src/auth/guards/jwt';

import { Skill } from './entity';
import { SkillsService } from './service';
import { PatchSkillDTO, PostSkillDTO } from './dto';

@Controller('/skills')
@UseGuards(JwtAuthGuard)
export class SkillsController {
  constructor(private readonly service: SkillsService) {}

  @Get()
  async getSkills(@User('id') userId: number): Promise<Skill[]> {
    return this.service.getAll(userId);
  }

  @Get('/logo/:name')
  async getSkillLogo(@Param('name') name: string, @Res() res): Promise<void> {
    const path = join(process.cwd(), 'src', 'skill', 'logos', name);

    return res.download(path, name, (e) => {
      if (e) {
        res.status(500).send({ message: 'Could not download the file' + e });
      }
    });
  }

  @Post()
  async postSkill(
    @Body() body: PostSkillDTO,
    @User('id') userId: number,
  ): Promise<Skill> {
    return this.service.create(body, userId);
  }

  @Post('/upload')
  @UseInterceptors(UploadImageInterceptor)
  async postSkillLogo(@UploadedFile() file): Promise<string> {
    return file.filename;
  }

  @Patch(':id')
  async patchRate(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PatchSkillDTO,
  ): Promise<number> {
    return this.service.update(id, body.rate);
  }
}
