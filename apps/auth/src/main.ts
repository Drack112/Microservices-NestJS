import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RmqOptions } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions('AUTH', true));
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  await app.startAllMicroservices();

  /*
    Swagger Documentation
  */

  const config = new DocumentBuilder()
    .setTitle('Users Microservice')
    .setDescription('The Logic of users in the microservice.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/auth/swagger', app, document);

  // App

  await app.listen(configService.get('PORT'));
}
bootstrap();
