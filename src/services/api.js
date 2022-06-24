import axios from "axios";

// const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://git.heroku.com/yfidoof.git"
const BASE_URL = "https://yfidoof.herokuapp.com"

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function getFoodData(body, token) {
  const config = createConfig(token);
  return await axios.post(`${BASE_URL}/clarifai/food`, body, config);
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

async function createPost(body, token) {
  const config = createConfig(token);
  return await axios.post(`${BASE_URL}/posts/create`, body, config);
}

async function getPosts() {
  return await axios.get(`${BASE_URL}/posts`);
}

async function getTopTags(number) {
  return await axios.get(`${BASE_URL}/tags/top${number}`);
}

async function getRandomUnsplashImage(image, token) {
  const config = createConfig(token);
  return await axios.post(`${BASE_URL}/unsplash/${image}`, image, config);
}

async function editUserProfile(userId, userData, token) {
  const config = createConfig(token);
  return await axios.put(`${BASE_URL}/users/update/${userId}`, userData, config);
}

async function getUserData(userId, token) {
  const config = createConfig(token);
  return await axios.put(`${BASE_URL}/users/${userId}`, {}, config);
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
  editUserProfile,
  getUserData
};

export default api;
