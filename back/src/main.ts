import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// TODO in future we can add github SSO auth to parse user git projects
// to show how many projects use certain skill

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
