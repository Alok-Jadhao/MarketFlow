# MarketFlow - Architecture Overview

## System Architecture

MarketFlow follows a modern **MERN Stack** architecture with clear separation of concerns:

```
┌─────────────────────────────────────────────────────┐
│                    Client Layer                      │
│              (React + React Router)                  │
│   ┌──────────────────────────────────────────────┐  │
│   │  Pages: Home, Products, Cart, Checkout, etc. │  │
│   │  Components: Navbar, Footer, ProductCard     │  │
│   │  Context: Auth, Cart (State Management)      │  │
│   └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                         │
                    HTTP/REST
                         │
┌─────────────────────────────────────────────────────┐
│                   API Layer                          │
│                (Express.js)                          │
│   ┌──────────────────────────────────────────────┐  │
│   │  Routes: /auth, /products, /cart, /orders   │  │
│   │  Controllers: Business Logic                 │  │
│   │  Middleware: Auth, Error Handling, Upload   │  │
│   └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                         │
                    Mongoose ODM
                         │
┌─────────────────────────────────────────────────────┐
│                  Data Layer                          │
│                  (MongoDB)                           │
│   ┌──────────────────────────────────────────────┐  │
│   │  Collections: users, products, orders,       │  │
│   │               carts, reviews                 │  │
│   └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

## Key Design Patterns

### 1. **MVC (Model-View-Controller)**
- **Models**: Database schemas (User, Product, Order, Cart, Review)
- **Views**: React components and pages
- **Controllers**: Business logic handlers for each route

### 2. **RESTful API Design**
- Standard HTTP methods (GET, POST, PUT, DELETE)
- Resource-based URLs (/products, /orders)
- Stateless communication

### 3. **Authentication Flow**
```
User Login → Verify Credentials → Generate JWT Token → 
Store in LocalStorage → Include in Request Headers → 
Verify Token → Grant Access
```

### 4. **State Management**
- **React Context API** for global state (auth, cart)
- **Local State** for component-specific data

## Technology Stack Details

### Frontend
- **React 18**: UI library with hooks
- **React Router v6**: Client-side routing
- **Axios**: HTTP client
- **Context API**: State management
- **CSS3**: Styling with custom properties

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication tokens
- **Bcrypt**: Password hashing
- **Multer**: File uploads

## Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: user, admin),
  phone: String,
  address: Object,
  avatar: String,
  createdAt: Date
}
```

### Product Collection
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  category: String,
  brand: String,
  stock: Number,
  images: Array,
  rating: Number,
  numReviews: Number,
  isFeatured: Boolean,
  createdBy: ObjectId (ref: User),
  createdAt: Date
}
```

### Order Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  orderItems: Array,
  shippingAddress: Object,
  paymentMethod: String,
  totalPrice: Number,
  orderStatus: String,
  isPaid: Boolean,
  isDelivered: Boolean,
  createdAt: Date
}
```

## Security Features

1. **Password Security**
   - Bcrypt hashing with salt rounds
   - Minimum password length enforcement

2. **Authentication**
   - JWT tokens with expiration
   - Token verification middleware
   - Protected routes

3. **Authorization**
   - Role-based access control (user/admin)
   - Resource ownership verification

4. **Input Validation**
   - Express-validator for request validation
   - Mongoose schema validation

5. **Error Handling**
   - Centralized error handler
   - Consistent error responses

## API Request Flow

```
1. Client makes request
2. Express receives request
3. CORS middleware allows request
4. Body parser parses request data
5. Authentication middleware verifies token
6. Authorization middleware checks permissions
7. Controller processes request
8. Model interacts with database
9. Response sent back to client
10. Error handler catches any errors
```

## Performance Optimizations

1. **Database Indexing**
   - Text indexes for product search
   - Unique indexes on email
   - Compound indexes for queries

2. **Pagination**
   - Limit results per page
   - Skip/limit pattern

3. **Selective Population**
   - Only populate needed references
   - Avoid over-fetching

4. **Frontend Optimization**
   - Code splitting
   - Lazy loading routes
   - Image optimization

## Scalability Considerations

1. **Horizontal Scaling**
   - Stateless API design
   - JWT tokens (no server sessions)

2. **Caching** (Future Enhancement)
   - Redis for session storage
   - Product catalog caching

3. **Load Balancing** (Production)
   - Multiple API instances
   - Reverse proxy (Nginx)

4. **Database Optimization**
   - Indexes for frequent queries
   - Connection pooling

## Development Workflow

```
1. Feature Branch → 
2. Local Development → 
3. Testing → 
4. Code Review → 
5. Merge to Main → 
6. Deploy to Staging → 
7. Production Deployment
```

## Testing Strategy

### Unit Tests
- Controller logic
- Helper functions
- Validation logic

### Integration Tests
- API endpoints
- Database operations
- Authentication flow

### E2E Tests
- User registration and login
- Product browsing
- Cart and checkout
- Order management

## Deployment Architecture

```
[User] → [CDN/Netlify (React Build)] 
              ↓
         [Load Balancer]
              ↓
    [API Servers (Node.js)]
              ↓
     [MongoDB Atlas/Cloud]
```

## Future Enhancements

1. **Performance**
   - Implement Redis caching
   - Add CDN for static assets
   - Optimize database queries

2. **Features**
   - Real-time notifications (Socket.io)
   - Advanced search (Elasticsearch)
   - Recommendation engine
   - Wishlist functionality

3. **Security**
   - Rate limiting
   - Two-factor authentication
   - CAPTCHA for registration

4. **DevOps**
   - CI/CD pipeline
   - Automated testing
   - Monitoring and logging
   - Docker containerization

---

This architecture is designed to be:
- **Scalable**: Can handle growing user base
- **Maintainable**: Clear separation of concerns
- **Secure**: Multiple layers of security
- **Performant**: Optimized for speed
- **Testable**: Easy to write and run tests
