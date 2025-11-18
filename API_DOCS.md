# MarketFlow API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## Authentication Endpoints

### Register User
**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Login
**POST** `/auth/login`

Login to an existing account.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Current User
**GET** `/auth/me`

Get the currently authenticated user's information.

**Headers:** Requires authentication

---

## Product Endpoints

### Get All Products
**GET** `/products`

Get a list of products with optional filtering and pagination.

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 12)
- `search` - Search term
- `category` - Filter by category
- `brand` - Filter by brand
- `minPrice` - Minimum price
- `maxPrice` - Maximum price
- `sort` - Sort field (createdAt, price, rating, name)
- `order` - Sort order (asc, desc)
- `featured` - Filter featured products (true/false)

**Example:**
```
GET /products?category=Electronics&minPrice=100&maxPrice=500&sort=price&order=asc
```

**Response:**
```json
{
  "success": true,
  "count": 12,
  "total": 45,
  "page": 1,
  "pages": 4,
  "data": [
    {
      "_id": "product_id",
      "name": "Product Name",
      "description": "Product description",
      "price": 299.99,
      "category": "Electronics",
      "brand": "Brand Name",
      "stock": 50,
      "rating": 4.5,
      "numReviews": 24
    }
  ]
}
```

### Get Single Product
**GET** `/products/:id`

Get detailed information about a specific product.

### Create Product (Admin Only)
**POST** `/products`

**Headers:** Requires authentication and admin role

**Request Body:**
```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 299.99,
  "category": "Electronics",
  "brand": "Brand Name",
  "stock": 100,
  "thumbnail": "image_url"
}
```

### Update Product (Admin Only)
**PUT** `/products/:id`

**Headers:** Requires authentication and admin role

### Delete Product (Admin Only)
**DELETE** `/products/:id`

**Headers:** Requires authentication and admin role

---

## Cart Endpoints

### Get Cart
**GET** `/cart`

Get the current user's shopping cart.

**Headers:** Requires authentication

### Add to Cart
**POST** `/cart`

Add an item to the cart.

**Headers:** Requires authentication

**Request Body:**
```json
{
  "productId": "product_id",
  "quantity": 2
}
```

### Update Cart Item
**PUT** `/cart/:itemId`

Update the quantity of a cart item.

**Headers:** Requires authentication

**Request Body:**
```json
{
  "quantity": 3
}
```

### Remove from Cart
**DELETE** `/cart/:itemId`

Remove an item from the cart.

**Headers:** Requires authentication

### Clear Cart
**DELETE** `/cart`

Remove all items from the cart.

**Headers:** Requires authentication

---

## Order Endpoints

### Create Order
**POST** `/orders`

Create a new order from cart items.

**Headers:** Requires authentication

**Request Body:**
```json
{
  "orderItems": [
    {
      "product": "product_id",
      "name": "Product Name",
      "quantity": 2,
      "price": 299.99,
      "image": "image_url"
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA",
    "phone": "555-1234"
  },
  "paymentMethod": "Card",
  "itemsPrice": 599.98,
  "taxPrice": 59.99,
  "shippingPrice": 9.99,
  "totalPrice": 669.96
}
```

### Get User Orders
**GET** `/orders/myorders`

Get all orders for the current user.

**Headers:** Requires authentication

### Get Single Order
**GET** `/orders/:id`

Get details of a specific order.

**Headers:** Requires authentication

### Get All Orders (Admin Only)
**GET** `/orders`

Get all orders in the system.

**Headers:** Requires authentication and admin role

**Query Parameters:**
- `page` - Page number
- `limit` - Items per page
- `status` - Filter by order status

### Update Order Status (Admin Only)
**PUT** `/orders/:id/status`

Update the status of an order.

**Headers:** Requires authentication and admin role

**Request Body:**
```json
{
  "status": "Shipped",
  "trackingNumber": "TRACK123456"
}
```

### Cancel Order
**PUT** `/orders/:id/cancel`

Cancel an order (only for Pending/Processing orders).

**Headers:** Requires authentication

---

## User Management Endpoints (Admin Only)

### Get All Users
**GET** `/users`

**Headers:** Requires authentication and admin role

### Get Single User
**GET** `/users/:id`

**Headers:** Requires authentication and admin role

### Update User
**PUT** `/users/:id`

**Headers:** Requires authentication and admin role

### Delete User
**DELETE** `/users/:id`

**Headers:** Requires authentication and admin role

---

## Review Endpoints

### Get Product Reviews
**GET** `/products/:productId/reviews`

Get all reviews for a specific product.

### Add Review
**POST** `/products/:productId/reviews`

Add a review for a product.

**Headers:** Requires authentication

**Request Body:**
```json
{
  "rating": 5,
  "title": "Great product!",
  "comment": "This product exceeded my expectations."
}
```

---

## Error Responses

All endpoints return error responses in this format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

**Common Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

---

## Rate Limiting

The API may implement rate limiting to prevent abuse. If you exceed the rate limit, you'll receive a `429 Too Many Requests` response.

---

## Pagination

Endpoints that return lists use pagination:

```json
{
  "count": 12,
  "total": 45,
  "page": 1,
  "pages": 4,
  "data": [...]
}
```

---

## Testing with Postman

1. Import the API collection
2. Set the base URL variable
3. Login to get a token
4. Set the token in the authorization header
5. Test the endpoints

---

For more information, visit: http://localhost:5000
