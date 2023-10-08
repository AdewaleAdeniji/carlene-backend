// authController.js

const axios = require("axios");
const { config } = require("../helpers/configs");
const { WrapHandler, validateRequest } = require("../helpers/utils");

const loginUser = WrapHandler(async (req, res) => {
  const val = validateRequest(req.body, ["email", "password"]);
  if (val) return res.status(400).send(val);
  const { email, password } = req.body;
  try {
    var payload = {
      method: "post",
      url: `${config.USER_SERVICE_URL}/auth/login`,
      headers: {
        appKey: config.USER_SERVICE_API_KEY,
      },
      data: {
        email,
        password,
      },
    };
    const response = await axios(payload);

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ success: false, ...error.response.data });
  }
});

const registerUser = WrapHandler(async (req, res) => {
  const val = validateRequest(req.body, ["email", "password", "username"]);
  if (val) return res.status(400).send(val);
  const { email, password, username } = req.body;

  try {
    var payload = {
      method: "post",
      url: `${config.USER_SERVICE_URL}/auth/register`,
      headers: {
        appKey: config.USER_SERVICE_API_KEY,
      },
      data: {
        email,
        password,
        firstName: username,
        lastName: username,
      },
    };
    const response = await axios(payload);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ success: false, ...error.response.data });
  }
});
const UserProfile = WrapHandler(async (req, res) => {
  const user = req.user;
  return res.send({ data: user });
});
module.exports = {
  loginUser,
  registerUser,
  UserProfile
};
