module.exports = ({ env }) => ({
  // defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "alphavalley"),
      username: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "Pass1234"),
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      // },
    },
    options: {},
  },
});
