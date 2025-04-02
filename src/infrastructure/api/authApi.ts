export const authApi = {
    login: async (username: string, password: string): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            if (username === 'admin' && password === '123456') {
                setTimeout(() => resolve(true), 500);
            } else {
                setTimeout(() => reject(new Error('Invalid credentials')), 500);
            }
        });
    }
};
