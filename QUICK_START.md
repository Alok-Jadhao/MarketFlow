# MarketFlow - Quick Reference Guide

## 🚀 Getting Started in 5 Minutes

### Prerequisites Check
```bash
node --version   # Should be v14+
npm --version    # Should be v6+
mongod --version # Should be v4.4+
```

### Installation & Setup
```bash
# 1. Navigate to project directory
cd /home/alok/Desktop/SE/implementation

# 2. Install all dependencies
npm install
cd frontend && npm install && cd ..

# 3. Create environment file
cp .env.example .env

# 4. Edit .env (minimal setup)
# Add: MONGODB_URI=mongodb://localhost:27017/marketflow
# Add: JWT_SECRET=your_secret_key_here

# 5. Start MongoDB
sudo systemctl start mongodb  # or `mongod`

# 6. Seed database
node backend/seed.js

# 7. Run application
npm run dev:all
```

### Access Points
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **Admin**: admin@marketflow.com / admin123

---

## 📋 Common Commands

### Development
```bash
# Run both frontend and backend
npm run dev:all

# Run backend only
npm run dev

# Run frontend only
cd frontend && npm start

# Run in production mode
npm start
```

### Database
```bash
# Seed database with sample data
node backend/seed.js

# Connect to MongoDB shell
mongo marketflow

# View collections
show collections

# View users
db.users.find().pretty()

# Clear database
mongo marketflow --eval "db.dropDatabase()"
```

### Useful Scripts
```bash
# Install all dependencies
npm run install:all

# Run tests
npm test

# Check for errors
npm run lint
```

---

## 🔑 Default Credentials

### Admin Account
```
Email: admin@marketflow.com
Password: admin123
Role: admin
```

### Test User Account
```
Create via registration page
or use seed script output
```

---

## 📚 Quick API Reference

### Base URL
```
http://localhost:5000/api
```

### Authentication
```bash
# Register
POST /auth/register
Body: { "name": "...", "email": "...", "password": "..." }

# Login
POST /auth/login
Body: { "email": "...", "password": "..." }

# Get current user
GET /auth/me
Headers: { "Authorization": "Bearer <token>" }
```

### Products
```bash
# Get all products
GET /products

# Get single product
GET /products/:id

# Create product (admin)
POST /products
Headers: { "Authorization": "Bearer <token>" }

# Update product (admin)
PUT /products/:id

# Delete product (admin)
DELETE /products/:id
```

### Cart
```bash
# Get cart
GET /cart

# Add to cart
POST /cart
Body: { "productId": "...", "quantity": 1 }

# Update cart item
PUT /cart/:itemId
Body: { "quantity": 2 }

# Remove from cart
DELETE /cart/:itemId

# Clear cart
DELETE /cart
```

### Orders
```bash
# Create order
POST /orders

# Get my orders
GET /orders/myorders

# Get order by ID
GET /orders/:id

# Update order status (admin)
PUT /orders/:id/status
Body: { "status": "Shipped" }
```

---

## 🎯 Feature Checklist

### ✅ Implemented Features
- [x] User registration & login
- [x] JWT authentication
- [x] Product listing with filters
- [x] Product search
- [x] Product details page
- [x] Shopping cart
- [x] Checkout process
- [x] Order management
- [x] User profile
- [x] Admin dashboard
- [x] Product management (admin)
- [x] Order management (admin)
- [x] User management (admin)
- [x] Role-based access control
- [x] Password hashing
- [x] Input validation
- [x] Error handling
- [x] Responsive design

### 🔜 Potential Enhancements
- [ ] Payment gateway (Stripe/PayPal)
- [ ] Email notifications
- [ ] Image upload
- [ ] Product reviews UI
- [ ] Wishlist
- [ ] Product recommendations
- [ ] Search autocomplete
- [ ] Order tracking
- [ ] Inventory alerts
- [ ] Sales analytics

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check if MongoDB is running
sudo systemctl status mongodb

# Start MongoDB
sudo systemctl start mongodb

# Check logs
sudo tail -f /var/log/mongodb/mongodb.log
```

### Port Already in Use
```bash
# Find process on port 5000
lsof -i :5000

# Kill process
kill -9 <PID>

# Or change port in .env
PORT=5001
```

### Module Not Found
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install

# For frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### JWT Token Errors
```bash
# Clear browser localStorage
# Open browser console:
localStorage.clear()
# Then refresh page
```

### CORS Errors
```bash
# Ensure CLIENT_URL is set correctly in .env
CLIENT_URL=http://localhost:3000

# Restart backend server
npm run dev
```

---

## 📁 Important File Locations

### Configuration
```
/.env                    # Environment variables
/backend/config/db.js    # Database config
/frontend/src/services/api.js  # API config
```

### Models
```
/backend/models/User.js
/backend/models/Product.js
/backend/models/Order.js
/backend/models/Cart.js
/backend/models/Review.js
```

### API Routes
```
/backend/routes/auth.js
/backend/routes/products.js
/backend/routes/cart.js
/backend/routes/orders.js
/backend/routes/users.js
```

### Frontend Pages
```
/frontend/src/pages/Home.js
/frontend/src/pages/Products.js
/frontend/src/pages/Cart.js
/frontend/src/pages/Checkout.js
/frontend/src/pages/admin/Dashboard.js
```

---

## 🔍 Testing Scenarios

### Test User Flow
1. Register new user → Login
2. Browse products → View details
3. Add to cart → Update quantity
4. Checkout → Place order
5. View order history

### Test Admin Flow
1. Login with admin credentials
2. View dashboard statistics
3. Add new product
4. Update product details
5. Change order status
6. Manage users

### API Testing with cURL
```bash
# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"test123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@marketflow.com","password":"admin123"}'

# Get products
curl http://localhost:5000/api/products
```

---

## 📊 Database Schema Quick Ref

### Users
```javascript
{ name, email, password, role, phone, address, avatar }
```

### Products
```javascript
{ name, description, price, category, brand, stock, images, rating }
```

### Orders
```javascript
{ user, orderItems[], shippingAddress, paymentMethod, totalPrice, status }
```

### Cart
```javascript
{ user, items[{ product, quantity, price }], totalPrice }
```

---

## 🎨 UI Components

### Reusable Components
- `Navbar` - Site navigation
- `Footer` - Site footer
- `ProductCard` - Product display
- `PrivateRoute` - Auth protection
- `AdminRoute` - Admin protection

### Pages
- Home, Products, ProductDetails
- Cart, Checkout
- Login, Register, Profile
- Orders, OrderDetails
- Admin: Dashboard, Products, Orders, Users

---

## 💡 Development Tips

1. **Always start MongoDB first** before running the app
2. **Use seed.js** to populate test data
3. **Check browser console** for frontend errors
4. **Check terminal** for backend errors
5. **Use React DevTools** for debugging state
6. **Test API with Postman** before frontend integration
7. **Clear localStorage** if authentication issues occur
8. **Use environment variables** for sensitive data

---

## 📞 Need Help?

1. **Check documentation**: README.md, SETUP.md, API_DOCS.md
2. **Review logs**: Backend terminal, browser console
3. **Verify setup**: MongoDB running, .env configured
4. **Test API**: Use cURL or Postman
5. **Check file structure**: FILE_STRUCTURE.md

---

## 🎓 Project Highlights for Presentation

1. **Full-Stack Implementation** - Complete MERN application
2. **Security** - JWT, password hashing, role-based access
3. **Scalability** - RESTful API, modular architecture
4. **User Experience** - Responsive design, intuitive navigation
5. **Documentation** - Comprehensive guides and API docs
6. **Best Practices** - Error handling, validation, code organization

---

**MarketFlow** - Your Complete E-Commerce Solution! 🛍️✨

For detailed information, refer to:
- README.md - Full project overview
- SETUP.md - Installation guide
- API_DOCS.md - API endpoints
- ARCHITECTURE.md - System design
- PROJECT_SUMMARY.md - Project highlights
