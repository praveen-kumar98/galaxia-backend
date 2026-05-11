export default () => ({
  app: {
    nodeEnv: process.env.NODE_ENV,
    port: Number(process.env.PORT),
    url: process.env.APP_URL,
    corsOrigin: process.env.CORS_ORIGIN,
    logLevels: process.env.LOG_LEVEL,
    swaggerEnabled: process.env.SWAGGER_ENABLED,
  },
});
