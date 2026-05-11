import appConfig from "./app.config";
import databaseConfig from "./db.config";
import jwtConfig from "./jwt.config";
import mailConfig from "./mail.config";

export type AppConfig = ReturnType<typeof appConfig>["app"];
export type JwtConfig = ReturnType<typeof jwtConfig>["jwt"];
export type DBConfig = ReturnType<typeof databaseConfig>["database"];
export type RedisConfig = ReturnType<typeof databaseConfig>["redis"];
export type MailConfig = ReturnType<typeof mailConfig>["mail"];

export interface ConfigType {
  app: AppConfig;
  database: DBConfig;
  jwt: JwtConfig;
  mail: MailConfig;
  redis: RedisConfig;
}
