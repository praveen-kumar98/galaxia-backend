import { NestFactory } from "@nestjs/core";

import { CoreModule } from "./modules/core.module";
import { VersioningType } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  await app.listen(process.env.PORT ?? 3000);
  
  app.setGlobalPrefix("api/v1")

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'v'
  })

  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true,
  })

  const port = process.env.PORT ?? 4000;
  await app.listen(port);
}
bootstrap();
