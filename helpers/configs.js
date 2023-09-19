require("dotenv").config();

export const config = {
  USER_SERVICE_URL: process.env.USER_SERVICE_URL,
  USER_SERVICE_API_KEY: process.env.USER_SERVICE_API_KEY,
};
