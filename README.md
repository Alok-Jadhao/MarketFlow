# MarketFlow - Complete E-Commerce System

![MarketFlow Logo](https://via.placeholder.com/800x200/4F46E5/ffffff?text=MarketFlow+E-Commerce+System)

## 🚀 Overview

**MarketFlow** is a complete, production-ready e-commerce platform built with modern web technologies. It provides a seamless shopping experience for customers and powerful management tools for administrators.

## ✨ Features

### Customer Features
- 🛍️ Browse products with advanced filtering and search
- 🛒 Shopping cart management
- 👤 User authentication and profile management
- 💳 Secure checkout and payment processing
- 📦 Order tracking and history
- ⭐ Product reviews and ratings
- 🔐 Secure password reset functionality

### Admin Features
- 📊 Comprehensive dashboard with analytics
- 📦 Product management (CRUD operations)
- 👥 User management
- 📋 Order management and fulfillment
- 📈 Sales reports and statistics
- 🏷️ Category management
- 📸 Image upload and management

### Technical Features
- 🔒 JWT-based authentication
- 🗄️ MongoDB database with Mongoose ODM
- 🎨 Responsive React frontend
- 🚀 RESTful API architecture
- 📱 Mobile-friendly design
- 🔄 Real-time updates
- 🧪 Comprehensive error handling
- 📝 Input validation
- 🔐 Security best practices

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Stripe** - Payment processing
- **Multer** - File uploads
- **Nodemailer** - Email notifications

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **Context API** - State management
- **CSS3** - Styling
- **React Icons** - Icon library

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Step 1: Clone the Repository
```bash
cd /home/alok/Desktop/SE/implementation
```

### Step 2: Install Backend Dependencies
```bash
npm install
```

### Step 3: Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

### Step 4: Configure Environment Variables
```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:
- MongoDB connection string
- JWT secret key
- Email credentials
- Stripe API keys

### Step 5: Start MongoDB
```bash
# If using local MongoDB
sudo systemctl start mongodb
# or
mongod
```

### Step 6: Run the Application

#### Development Mode (Both servers)
```bash
npm run dev:all
```

#### Backend Only
```bash
npm run dev
```

#### Frontend Only
```bash
npm run client
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api/docs

## 👤 Default Admin Credentials

After seeding the database:
```
Email: admin@marketflow.com
Password: admin123
```

**⚠️ Change these credentials immediately in production!**

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password/:token` - Reset password

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:itemId` - Update cart item
- `DELETE /api/cart/:itemId` - Remove cart item
- `DELETE /api/cart` - Clear cart

### Orders
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update order status (Admin)

### Users (Admin)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Reviews
- `POST /api/products/:id/reviews` - Add review
- `GET /api/products/:id/reviews` - Get product reviews

## 🗂️ Project Structure

```
marketflow/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   ├── Cart.js
│   │   └── Review.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   ├── cart.js
│   │   └── users.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── error.js
│   │   └── upload.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── utils/
│   │   ├── email.js
│   │   └── helpers.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🧪 Testing

Run tests:
```bash
npm test
```

## 🚀 Deployment

### Backend (Node.js)
- Deploy to Heroku, DigitalOcean, AWS, or similar
- Set environment variables
- Configure MongoDB Atlas for production database

### Frontend (React)
- Build production bundle: `cd frontend && npm run build`
- Deploy to Netlify, Vercel, or serve from Express

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- HTTP-only cookies
- Input validation and sanitization
- Rate limiting
- CORS configuration
- XSS protection
- SQL injection prevention
- Secure headers with helmet

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📧 Contact

For questions or support, please contact: support@marketflow.com

## 🙏 Acknowledgments

- Built as a case study for Software Engineering
- Inspired by modern e-commerce best practices
- Thanks to all contributors and testers

---

**MarketFlow** - Where Commerce Flows Seamlessly 🛍️✨
