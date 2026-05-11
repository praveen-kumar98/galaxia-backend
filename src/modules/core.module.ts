import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import appConfig from "@/config/app.config";
import databaseConfig from "@/config/db.config";
import { validateEnv } from "@/config/env.validation";
import jwtConfig from "@/config/jwt.config";
import mailConfig from "@/config/mail.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [appConfig, databaseConfig, jwtConfig, mailConfig],
      validate: validateEnv,
    }),
  ],
})
export class CoreModule {}
