import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Habilita validação com as bibliotecas instaladas.
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
