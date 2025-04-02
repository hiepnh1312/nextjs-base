import axios from 'axios';
import {useLocale} from "next-intl";

const axiosInstance = axios.create({
    baseURL: '/', // dùng API fake trên FE
    timeout: 5000
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    res => res,
    (error) => {
        const language = useLocale()
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = `/${language}/login`;
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
