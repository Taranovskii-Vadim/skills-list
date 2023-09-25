import { Controller, Post, UseGuards } from '@nestjs/common';

import { ReqUser } from 'src/types';
import { User } from 'src/utils/decorators';
import { JwtAuthService } from './jwt.service';

import { JwtResult } from './types';
import { LocalAuthGuard } from './guards/local';

@Controller('auth')
export class JwtAuthController {
  constructor(private jwtAuthService: JwtAuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/signIn')
  login(@User() data: ReqUser): JwtResult {
    return this.jwtAuthService.login(data);
  }
}
