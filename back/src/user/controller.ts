import { Controller, UseGuards, Get } from '@nestjs/common';

import { ReqUser } from 'src/types';
import { User } from 'src/utils/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  @Get('profile')
  getProfile(@User() data: ReqUser): ReqUser {
    return data;
  }
}
