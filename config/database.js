module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5433),
        database: env("DATABASE_NAME", "creatorsiso-cms"),
        username: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "0000"),
        schema: env("DATABASE_SCHEMA", "public"),
      },
      options: {},
    },
  },
});