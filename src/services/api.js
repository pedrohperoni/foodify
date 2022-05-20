import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function getFoodData(data) {
  return await axios.post(`${BASE_URL}/clarifai/food`, data);
}

async function login(data) {
  return await axios.post(`${BASE_URL}/auth/login`, data);
}

async function signUp(data) {
  return await axios.post(`${BASE_URL}/users/create`, data);
}

async function validateJWT(token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/auth/token`, {}, config);
}

const api = {
  getFoodData,
  login,
  signUp,
  validateJWT,
};

export default api;
