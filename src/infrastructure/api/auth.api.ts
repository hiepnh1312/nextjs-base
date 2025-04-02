import axios from './axiosInstance';

export const authApi = {
    login: async (username: string, password: string): Promise<string> => {
        const response = await axios.post('/api/login', { username, password });
        return response.data.token;
    },
};
