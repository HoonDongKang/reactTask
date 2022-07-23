import axios from 'axios'
const PORT = 3714

export const apiInstance = axios.create({
    baseURL: `https://api.userpost.click/`,
})
