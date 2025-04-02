export interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthUser {
    id: string;
    name: string;
    role: 'admin' | 'user';
    token: string;
}
