import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { Skill } from './skill/entity';
import { Category } from './category/entity';
import { SkillsModule } from './skill/module';
import { CategoriesModule } from './category/module';

@Module({
  imports: [
    SkillsModule,
    CategoriesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Category, Skill],
        synchronize: true,
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
