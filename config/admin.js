module.exports = ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "d9b0df66ff97a66602kk7e665707b4e3e7"),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "8ca7097228d45292878d2215c72e20bf"),
  },
});
