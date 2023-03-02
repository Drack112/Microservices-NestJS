import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { OrdersModule } from './orders.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);

  /*
    Swagger Documentation
  */

  const config = new DocumentBuilder()
    .setTitle('Orders Microservice')
    .setDescription('The Logic of orders services in the entire APP.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/orders/swagger', app, document);

  // App

  await app.listen(configService.get('PORT'));
}
bootstrap();
