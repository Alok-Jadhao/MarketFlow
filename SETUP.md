# MarketFlow - Setup Guide

## Quick Start Guide

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4.4 or higher)

### Step-by-Step Installation

#### 1. Set Up MongoDB

**Option A: Local MongoDB**
```bash
# Ubuntu/Debian
sudo apt-get install -y mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb

# macOS (using Homebrew)
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Windows
# Download and install from: https://www.mongodb.com/try/download/community
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Whitelist your IP address

#### 2. Install Backend Dependencies
```bash
cd /home/alok/Desktop/SE/implementation
npm install
```

#### 3. Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

#### 4. Configure Environment Variables
```bash
# Copy the example env file
cp .env.example .env

# Edit the .env file with your configuration
nano .env  # or use your preferred editor
```

**Required Environment Variables:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/marketflow
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:3000
```

#### 5. Seed the Database (Optional)

Create a seed file to populate initial data:

```bash
# Run the seed script
node backend/seed.js
```

#### 6. Start the Application

**Option A: Run Both Servers Simultaneously**
```bash
npm run dev:all
```

**Option B: Run Separately**

Terminal 1 (Backend):
```bash
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm start
```

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Test**: http://localhost:5000/api/products

### Default Admin Account

After seeding the database:
```
Email: admin@marketflow.com
Password: admin123
```

**⚠️ IMPORTANT: Change this password immediately in production!**

## Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
sudo systemctl status mongodb

# Check MongoDB logs
sudo tail -f /var/log/mongodb/mongodb.log
```

### Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

### Node Modules Issues
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Do the same for frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

## Development Tips

### Hot Reload
- Backend uses `nodemon` for automatic restart on file changes
- Frontend uses React's hot reload automatically

### Debugging
```bash
# Enable debug mode
NODE_ENV=development DEBUG=* npm run dev
```

### Testing API with cURL
```bash
# Test product listing
curl http://localhost:5000/api/products

# Test registration
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

## Production Deployment

### Backend (Node.js)
1. Set environment variables
2. Build if necessary
3. Use PM2 or similar for process management
```bash
npm install -g pm2
pm2 start backend/server.js --name marketflow-api
```

### Frontend (React)
```bash
cd frontend
npm run build
# Deploy the build folder to your hosting service
```

## Next Steps

1. Customize the product categories
2. Add product images
3. Configure email service for order confirmations
4. Set up Stripe for payment processing
5. Add more features as needed

## Support

For issues and questions:
- Check the documentation
- Review error logs
- Contact: support@marketflow.com
