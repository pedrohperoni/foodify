import axios from "axios"

const BASE_URL = 'http://localhost:5000'

async function getFoodData(data){
   console.log(`${BASE_URL}/clarifai/food`, data)
   return await axios.post(`${BASE_URL}/clarifai/food`, data)
}

const api = {
   getFoodData
}

export default api