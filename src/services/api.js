import axios from "axios"

const BASE_URL = 'http://localhost:5000'

async function getFoodData(data){
   return await axios.post(`${BASE_URL}/clarifai/food`, data)
}

async function login(data){
   return await axios.post(`${BASE_URL}/auth/login`, data)
}

async function signUp(data){
   return await axios.post(`${BASE_URL}/users/create`, data)
}

const api = {
   getFoodData,
   login,
   signUp,
}

export default api