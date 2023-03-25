import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";

import { HttpExceptionFilter } from './core/filter/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform.interceptor';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from './core/pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 校验
  app.useGlobalPipes(new ValidationPipe());

  // 注册全局错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  
  // 全局注册拦截器
 app.useGlobalInterceptors(new TransformInterceptor())
  // swagger
 const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();
