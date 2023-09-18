import { Module } from '@nestjs/common';

import { CategoriesService } from './service';
import { CategoriesController } from './controller';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [],
})
export class CategoriesModule {}
