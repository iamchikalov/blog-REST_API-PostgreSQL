import { NestFactory } from "@nestjs/core";
import { BlogModule } from "./modules/blog.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(BlogModule)

  const config = new DocumentBuilder()
    .setTitle('Chikalov Bogdan')
    .setDescription('Docs to REST API')
    .setVersion('1.0.0')
    .addTag('Blog Swagger')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)
  await app.listen(PORT, () => console.log(`Server started on port: ${ PORT } `))
}
bootstrap()