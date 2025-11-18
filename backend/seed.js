const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Product = require('./models/Product');

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');

    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();

    console.log('Cleared existing data...');

    // Create admin user
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@marketflow.com',
      password: 'admin123',
      role: 'admin',
    });

    console.log('Admin user created');

    // Create sample products with real images
    const sampleProducts = [
      {
        name: 'Wireless Bluetooth Headphones',
        description: 'Premium noise-canceling wireless headphones with 30-hour battery life. Features active noise cancellation, premium sound quality, and comfortable over-ear design.',
        price: 199.99,
        comparePrice: 249.99,
        category: 'Electronics',
        brand: 'AudioTech',
        stock: 50,
        thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800', alt: 'Wireless Headphones' }
        ],
        rating: 4.5,
        numReviews: 128,
        isFeatured: true,
        createdBy: admin._id,
      },
      {
        name: 'Smart Fitness Watch',
        description: 'Track your fitness goals with heart rate monitoring, GPS, sleep tracking, and waterproof design. Compatible with iOS and Android.',
        price: 149.99,
        category: 'Electronics',
        brand: 'FitTech',
        stock: 75,
        thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800', alt: 'Smart Watch' }
        ],
        rating: 4.3,
        numReviews: 89,
        isFeatured: true,
        createdBy: admin._id,
      },
      {
        name: 'Organic Cotton T-Shirt',
        description: 'Comfortable and sustainable 100% organic cotton t-shirt. Available in multiple colors. Perfect for everyday wear with a modern fit.',
        price: 29.99,
        category: 'Clothing',
        brand: 'EcoWear',
        stock: 200,
        thumbnail: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800', alt: 'Cotton T-Shirt' }
        ],
        rating: 4.7,
        numReviews: 256,
        isFeatured: false,
        createdBy: admin._id,
      },
      {
        name: 'Stainless Steel Water Bottle',
        description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours. BPA-free and leak-proof design.',
        price: 24.99,
        category: 'Sports',
        brand: 'HydroLife',
        stock: 200,
        thumbnail: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800', alt: 'Water Bottle' }
        ],
        rating: 4.7,
        numReviews: 143,
        isFeatured: false,
        createdBy: admin._id,
      },
      {
        name: 'Wireless Gaming Mouse',
        description: 'High-precision optical sensor with 16,000 DPI, customizable RGB lighting, and programmable buttons. Perfect for competitive gaming.',
        price: 79.99,
        category: 'Electronics',
        brand: 'GamePro',
        stock: 100,
        thumbnail: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800', alt: 'Gaming Mouse' }
        ],
        rating: 4.8,
        numReviews: 312,
        isFeatured: true,
        createdBy: admin._id,
      },
      {
        name: 'Leather Laptop Backpack',
        description: 'Premium genuine leather backpack with padded laptop compartment (fits up to 15.6"). Multiple pockets for organization and water-resistant.',
        price: 89.99,
        category: 'Other',
        brand: 'UrbanCarry',
        stock: 60,
        thumbnail: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800', alt: 'Leather Backpack' }
        ],
        rating: 4.4,
        numReviews: 94,
        isFeatured: false,
        createdBy: admin._id,
      },
      {
        name: 'Smart Home Security Camera',
        description: '1080p Full HD security camera with color night vision, two-way audio, motion detection alerts, and cloud storage. Easy setup with mobile app.',
        price: 129.99,
        category: 'Electronics',
        brand: 'SecureHome',
        stock: 45,
        thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800', alt: 'Security Camera' }
        ],
        rating: 4.2,
        numReviews: 67,
        isFeatured: true,
        createdBy: admin._id,
      },
      {
        name: 'Yoga Mat with Carrying Strap',
        description: 'Premium non-slip eco-friendly TPE yoga mat with excellent cushioning. Includes carrying strap and alignment marks. Perfect for all yoga styles.',
        price: 39.99,
        category: 'Sports',
        brand: 'ZenFit',
        stock: 120,
        thumbnail: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800', alt: 'Yoga Mat' }
        ],
        rating: 4.5,
        numReviews: 203,
        isFeatured: false,
        createdBy: admin._id,
      },
      {
        name: 'Wireless Mechanical Keyboard',
        description: 'RGB mechanical keyboard with hot-swappable switches, wireless connectivity, and 80-hour battery life. Perfect for gaming and productivity.',
        price: 159.99,
        category: 'Electronics',
        brand: 'TechKeys',
        stock: 35,
        thumbnail: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800', alt: 'Mechanical Keyboard' }
        ],
        rating: 4.7,
        numReviews: 156,
        isFeatured: true,
        createdBy: admin._id,
      },
      {
        name: 'Running Shoes - Pro Series',
        description: 'Lightweight performance running shoes with responsive cushioning and breathable mesh upper. Ideal for marathons and daily training.',
        price: 129.99,
        comparePrice: 159.99,
        category: 'Sports',
        brand: 'RunPro',
        stock: 85,
        thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800', alt: 'Running Shoes' }
        ],
        rating: 4.6,
        numReviews: 234,
        isFeatured: true,
        createdBy: admin._id,
      },
      {
        name: 'Minimalist Desk Lamp',
        description: 'Modern LED desk lamp with adjustable brightness, USB charging port, and eye-caring technology. Perfect for home office or bedroom.',
        price: 49.99,
        category: 'Home & Garden',
        brand: 'LightSpace',
        stock: 110,
        thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800', alt: 'Desk Lamp' }
        ],
        rating: 4.4,
        numReviews: 98,
        isFeatured: false,
        createdBy: admin._id,
      },
      {
        name: 'Portable Bluetooth Speaker',
        description: '360-degree sound, waterproof design (IPX7), 20-hour battery life. Perfect for outdoor adventures and home entertainment.',
        price: 89.99,
        category: 'Electronics',
        brand: 'SoundWave',
        stock: 65,
        thumbnail: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800', alt: 'Bluetooth Speaker' }
        ],
        rating: 4.5,
        numReviews: 187,
        isFeatured: false,
        createdBy: admin._id,
      },
      {
        name: 'Classic Denim Jacket',
        description: 'Timeless denim jacket made from premium cotton. Classic fit with button closure. Available in multiple washes.',
        price: 79.99,
        category: 'Clothing',
        brand: 'UrbanStyle',
        stock: 95,
        thumbnail: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800', alt: 'Denim Jacket' }
        ],
        rating: 4.6,
        numReviews: 142,
        isFeatured: false,
        createdBy: admin._id,
      },
      {
        name: 'Professional Camera Bag',
        description: 'Padded camera bag with customizable dividers, weather-resistant exterior, and space for DSLR, lenses, and accessories.',
        price: 119.99,
        category: 'Electronics',
        brand: 'PhotoGear',
        stock: 40,
        thumbnail: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800', alt: 'Camera Bag' }
        ],
        rating: 4.7,
        numReviews: 76,
        isFeatured: false,
        createdBy: admin._id,
      },
      {
        name: 'Plant-Based Protein Powder',
        description: 'Organic vegan protein powder with 25g protein per serving. Available in chocolate and vanilla flavors. Non-GMO and gluten-free.',
        price: 44.99,
        category: 'Food',
        brand: 'GreenLife',
        stock: 200,
        thumbnail: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500',
        images: [
          { url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800', alt: 'Protein Powder' }
        ],
        rating: 4.3,
        numReviews: 312,
        isFeatured: false,
        createdBy: admin._id,
      },
    ];

    await Product.insertMany(sampleProducts);

    console.log('Sample products created');
    console.log('\n=================================');
    console.log('Database seeded successfully!');
    console.log('=================================');
    console.log('\nAdmin Login Credentials:');
    console.log('Email: admin@marketflow.com');
    console.log('Password: admin123');
    console.log('=================================\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
