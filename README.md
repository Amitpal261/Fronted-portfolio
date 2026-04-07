<div align="center">

# 🚀 Amit Kumar — Developer Portfolio

### A modern, fully responsive full-stack developer portfolio built with the MERN stack, GSAP animations, and a custom Admin Dashboard.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ammiit.netlify.app-brightgreen?style=for-the-badge&logo=netlify)](https://ammiit.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Amitpal261-181717?style=for-the-badge&logo=github)](https://github.com/Amitpal261)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-amit--pal-0A66C2?style=for-the-badge&logo=linkedin)](www.linkedin.com/in/
amit-pal-05639a33a)

</div>

---

## 📌 Overview

This is a **production-ready, full-stack portfolio web application** designed to showcase my skills, projects, and professional experience. Built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js), the application features a dynamic project management system through a secure Admin Dashboard, smooth GSAP-powered animations, and a fully responsive UI across all devices.

The portfolio is not just a static site — it is a **live, data-driven application** where projects and content are managed dynamically via a backend API, and all contact form submissions are stored and handled on the server side.

---

## ✨ Key Features

- 🎨 **4 Dynamic Themes** — Switchable color themes for a personalized experience
- 🗂️ **Admin Dashboard** — Secure admin panel to add, edit, and delete projects without touching the codebase
- 📬 **Contact Form with Backend** — All contact submissions are connected to and stored in MongoDB
- 🔐 **JWT Authentication** — Secure token-based authentication protecting admin routes
- 🎞️ **GSAP Animations** — Smooth, professional-grade scroll and page transition animations
- 📱 **Fully Responsive** — Pixel-perfect layout on mobile, tablet, and desktop
- ☁️ **Cloudinary Integration** — Cloud-based image storage for project screenshots and thumbnails
- 🔗 **Live Demo & Source Links** — Every project card includes live demo and GitHub repository links
- ⚡ **Performance Optimized** — Clean component architecture and efficient API calls

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React.js** | Component-based UI architecture |
| **Tailwind CSS** | Utility-first responsive styling |
| **GSAP (GreenSock)** | Advanced scroll animations & page transitions |
| **React Router** | Client-side routing & protected routes |
| **Axios** | HTTP client for API communication |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Server-side JavaScript runtime |
| **Express.js** | RESTful API framework |
| **MongoDB** | NoSQL database for dynamic content |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Secure authentication & protected routes |
| **bcrypt** | Password hashing & security |
| **Cloudinary** | Cloud image storage & management |

### Tools & Deployment
| Tool | Purpose |
|---|---|
| **Git & GitHub** | Version control |
| **Netlify** | Frontend deployment & CDN |
| **Render / Railway** | Backend deployment |
| **Postman** | API testing |
| **VS Code** | Development environment |

---

## 📸 Screenshots

> Replace the placeholder links below with your actual screenshot links

### 🏠 Home / Hero Section
![Home Section](/public/assets/ALL THEME.png)

### 🧑‍💻 About Section
![About Section](assets/ammiit.netlify.app_about(Nest Hub Max) (2).png)

### 🗂️ Projects Section
![Projects Section](assets/ammiit.netlify.app_projects(Nest Hub Max).png)

### 📬 Contact Section
![Contact Section](./assets/ammiit.netlify.app_contact(Nest Hub Max).png)

### 🔐 Admin Dashboard
![Admin Dashboard](public/assets/ammiit.netlify.app_upload(Nest Hub Max).png)

---

## 📁 Project Structure

```
portfolio/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Route-level page components
│   │   ├── animations/         # GSAP animation configs
│   │   ├── context/            # React Context / state management
│   │   ├── utils/              # Helper functions & API calls
│   │   └── App.jsx
│   └── package.json
│
├── server/                     # Node.js + Express backend
│   ├── config/                 # DB connection & environment config
│   ├── controllers/            # Route handler logic
│   ├── middleware/             # JWT auth middleware
│   ├── models/                 # Mongoose schemas (Project, Contact, User)
│   ├── routes/                 # API route definitions
│   └── server.js
│
└── README.md
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/login` | Admin login — returns JWT token |

### Projects
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/projects` | Fetch all projects (public) |
| `POST` | `/api/projects` | Add new project (admin only) |
| `PUT` | `/api/projects/:id` | Update project (admin only) |
| `DELETE` | `/api/projects/:id` | Delete project (admin only) |

### Contact
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/contact` | View all messages (admin only) |

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Amitpal261/your-repo-name.git
cd your-repo-name
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../client
npm install
```

Create a `.env` file in the `client/` directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

### 4. Open in Browser

```
Frontend: http://localhost:5173
Backend:  http://localhost:5000
```

---

## 🔐 Admin Dashboard Access

The Admin Dashboard is protected by JWT authentication. Only an authenticated admin can:

- ➕ Add new projects with images, links, and descriptions
- ✏️ Edit existing project details
- 🗑️ Delete projects from the portfolio
- 📥 View all contact form submissions

To access the admin panel, navigate to `/admin` and log in with your admin credentials.

---

## 🌐 Deployment

### Frontend — Netlify
1. Push your `client/` folder to GitHub
2. Connect the repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables in Netlify dashboard

### Backend — Render / Railway
1. Push your `server/` folder to GitHub
2. Connect to [Render](https://render.com) or [Railway](https://railway.app)
3. Set start command: `node server.js`
4. Add all `.env` variables in the platform dashboard

---

## 📊 Performance Highlights

- ⚡ Optimized React component structure with lazy loading
- 🗜️ Tailwind CSS purge for minimal CSS bundle size
- 🖼️ Cloudinary for optimized, CDN-served images
- 🔄 Efficient MongoDB queries with Mongoose indexing
- 📦 Vite for fast development builds and HMR

---

## 🤝 Connect With Me

<div align="center">

| Platform | Link |
|---|---|
| 🌐 Portfolio | [ammiit.netlify.app](https://ammiit.netlify.app) |
| 💼 LinkedIn | [linkedin.com/in/amit-pal](https://linkedin.com/in/amit-pal) |
| 🐙 GitHub | [github.com/Amitpal261](https://github.com/Amitpal261) |
| 📧 Email | amit.pal336900@gmail.com |

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ If you found this project helpful or impressive, please consider giving it a star!**

Built with ❤️ by [Amit Kumar](https://ammiit.netlify.app)

</div>
