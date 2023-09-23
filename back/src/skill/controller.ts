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
} from '@nestjs/common';
import { join } from 'path';

import { UploadImageInterceptor } from 'src/utils/interceptors';

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
  async postSkill(@Body() body: PostSkillDTO): Promise<Skill> {
    return this.service.create(body);
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
