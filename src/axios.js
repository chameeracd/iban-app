import Axios from 'axios';

const axios = Axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL+'api',
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export default axios;