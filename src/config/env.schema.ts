import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  PORT: z.coerce.number().default(3000),

  APP_URL: z.string().url(),

  DATABASE_URL: z.string().min(1),

  JWT_SECRET: z.string().min(32, {
    message: "JWT_SECRET must be at least 32 characters",
  }),

  JWT_EXPIRES_IN: z.string().default("1d"),

  REFRESH_TOKEN_SECRET: z.string().min(32),

  REFRESH_TOKEN_EXPIRES_IN: z.string().default("7d"),

  REDIS_HOST: z.string(),

  REDIS_PORT: z.coerce.number().default(6379),

  MAIL_HOST: z.string(),

  MAIL_PORT: z.coerce.number(),

  MAIL_USER: z.string(),

  MAIL_PASSWORD: z.string(),

  CORS_ORIGIN: z.string(),

  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace"])
    .default("info"),

  SWAGGER_ENABLED: z.coerce.boolean().default(false),
});

export type Env = z.infer<typeof envSchema>;
