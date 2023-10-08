const configs = require("../helpers/configs");
const apiConfig = configs.config;
var axios = require("axios");

console.log(apiConfig);
exports.verifyToken = async (token) => {
  var config = {
    method: "get",
    url: apiConfig.USER_SERVICE_URL + "/token",
    headers: {
      appKey: apiConfig.USER_SERVICE_API_KEY,
      Authorization: `Bearer ${token}`,
    },
  };
  if(!apiConfig.USE_AUTH_SERVICE){
    return {
      success: true,
      ...JSON.parse(apiConfig.USER_OBJECT),
    };
  }
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Unauthorized User ",
    };
  }
};
exports.getUser = async (userID) => {
  var config = {
    method: "get",
    url: apiConfig.USER_SERVICE_URL + "/auth/user/" + userID,
    headers: {
      appKey: apiConfig.USER_SERVICE_API_KEY,
    },
  };
  if(!apiConfig.USE_AUTH_SERVICE){
    return {
      success: true,
      ...apiConfig.USER_OBJECT,
    };
  }
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err?.response?.data?.message || "Unauthorized User ",
    };
  }
};
