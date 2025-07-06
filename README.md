# 🛍️ E-Shop

**E-Shop** is a modern and responsive e-commerce web application built with the MERN (MongoDB, Express, React, Node.js) stack. It includes full authentication, product browsing, cart management, admin dashboard, and order processing features.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 🛒 Product Listing & Filtering
- 🧺 Cart & Checkout Flow
- 📦 Order Management
- 📊 Admin Dashboard
- 🖼️ Product Image Uploads (Multer + Cloudinary)
- ⚙️ Role-based Access Control
- 📱 Fully Responsive UI

---

## 🛠️ Tech Stack

- **Frontend:** React, Redux Toolkit, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT, bcrypt
- **File Uploads:** Multer, Cloudinary
- **Payments (Optional):** Stripe Integration Ready

---

## 📁 Project Structure
E-shop/
├── backend/ # Node.js + Express API
├── frontend/ # React + Redux client
├── uploads/ # Image uploads
├── .env.example # Environment variable template
├── package.json # Root metadata


---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/E-shop.git
cd E-shop

2. Setup Backend
bash
Copy
Edit
cd backend
npm install
npm run dev
3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm start
4. Configure Environment Variables
Create .env files in both backend/ and frontend/ directories.

Use .env.example as a reference.

🧪 Sample Credentials
text
Copy
Edit
Admin:
Email: admin@example.com
Password: admin123

User:
Email: user@example.com
Password: user123
