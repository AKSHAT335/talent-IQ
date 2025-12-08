import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials: true //by adding this broweser will send cookies along with requests to the backend
});

export default axiosInstance;