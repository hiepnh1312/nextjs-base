# 🚀 Next.js Base Project

Dự án được xây dựng với App Router của Next.js và tổ chức theo hướng **Clean Architecture**.

---

## 🧰 Công nghệ sử dụng

- **[Next.js](https://nextjs.org/)** (App Router)
- **TypeScript**
- **Redux Toolkit** – quản lý trạng thái (authentication)
- **next-intl** – hỗ trợ đa ngôn ngữ (vi/en)
- **Ant Design** – giao diện UI hiện đại
- **Tailwind CSS** – style tiện lợi, responsive
- **Axios** – gọi API, cấu hình interceptor
- **Next.js API routes** – mô phỏng API giả lập (mock API)

---

## 📁 Cấu trúc thư mục chính

```
app/
├── [locale]/                  # Định tuyến theo ngôn ngữ (vi/en)
│   ├── login/                 # Trang đăng nhập (public)
│   ├── (authenticated)/      # Nhóm trang cần đăng nhập
│   │   ├── home/
│   │   └── user-manager/
│   ├── layout.tsx            # Inject Redux + i18n Provider
│   └── page.tsx              # Redirect /vi → /vi/home
├── api/                      # API giả lập nội bộ FE
│   └── login/route.ts
├── globals.scss
├── providers.tsx

src/
├── application/
│   ├── redux/                # store, hooks, slice (auth)
│   └── hooks/                # custom hooks (useAuthGuard)
├── infrastructure/
│   └── api/                  # axios config, API service
├── domain/                   # Khai báo interface, types (AuthUser, Role…)
├── i18n/                     # i18n logic + file đa ngôn ngữ
├── presentation/
│   └── components/common/    # Header, Footer, Sidebar, Layout...

public/
└── images/
    └── bg-login.jpg          # Hình nền trang login
```

---

## ⚙️ Cách chạy dự án

```bash
# Cài đặt package
npm install

# Chạy local dev server
npm run dev
```

Truy cập: [http://localhost:3000/vi](http://localhost:3000/vi)

---

## ✅ Thông tin đăng nhập demo

| Tài khoản | Mật khẩu |
|----------|----------|
| admin     | 123456   |

Sau khi đăng nhập, token sẽ được lưu vào localStorage và được gắn tự động trong mọi request.

---