import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('MAIN');
const port = 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  logger.log(`Starting in ${port}`);
}
bootstrap();
