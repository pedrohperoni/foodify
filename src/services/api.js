import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function getFoodData(body) {
  return await axios.post(`${BASE_URL}/clarifai/food`, body);
}

async function login(body) {
  return await axios.post(`${BASE_URL}/auth/login`, body);
}

async function signUp(body) {
  return await axios.post(`${BASE_URL}/users/create`, body);
}

async function validateJWT(token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/auth/token`, {}, config);
}

async function createPost(body) {
  return await axios.post(`${BASE_URL}/posts/create`, body);
}

async function getPosts() {
  return await axios.get(`${BASE_URL}/posts`);
}

async function getTopTags(number) {
  return await axios.get(`${BASE_URL}/tags/top${number}`);
}

async function getRandomUnsplashImage(image) {
 return await axios.post(`${BASE_URL}/unsplash/${image}`);
}

const api = {
  getFoodData,
  login,
  signUp,
  validateJWT,
  createPost,
  getPosts,
  getTopTags,
  getRandomUnsplashImage,
};

export default api;
