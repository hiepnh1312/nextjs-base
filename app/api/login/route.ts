import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();
    const { username, password } = body;

    if (username === 'admin' && password === '123456') {
        return NextResponse.json({
            token: 'mock-token-abc-123456',
            user: {
                name: 'Admin',
                role: 'superuser',
            },
        });
    }

    return NextResponse.json(
        { message: 'Sai tài khoản hoặc mật khẩu' },
        { status: 401 }
    );
}
