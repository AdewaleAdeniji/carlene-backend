require("dotenv").config();

exports.config = {
  USER_SERVICE_URL: process.env.USER_SERVICE_URL,
  USER_SERVICE_API_KEY: process.env.USER_SERVICE_API_KEY,
  USE_AUTH_SERVICE: process.env.USE_USER_SERVICE === 'true',
  USER_OBJECT: process.env.USER_OBJECT
};