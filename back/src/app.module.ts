import { Module } from '@nestjs/common';

import { CategoriesModule } from './category/module';

@Module({
  imports: [CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
