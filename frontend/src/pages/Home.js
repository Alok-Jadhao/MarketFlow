import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShippingFast, FaLock, FaHeadset } from 'react-icons/fa';
import api from '../services/api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    try {
      const response = await api.get('/products?featured=true&limit=4');
      setFeaturedProducts(response.data.data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to MarketFlow</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <Link to="/products" className="btn btn-primary">
            Shop Now <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-3">
        <div className="container">
          <div className="grid grid-3">
            <div className="card text-center">
              <FaShippingFast size={48} color="#4F46E5" />
              <h3 className="mt-1">Fast Shipping</h3>
              <p>Free shipping on orders over $50</p>
            </div>
            <div className="card text-center">
              <FaLock size={48} color="#4F46E5" />
              <h3 className="mt-1">Secure Payment</h3>
              <p>100% secure payment processing</p>
            </div>
            <div className="card text-center">
              <FaHeadset size={48} color="#4F46E5" />
              <h3 className="mt-1">24/7 Support</h3>
              <p>We're here to help anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-3">
        <div className="container">
          <h2 className="text-center mb-2">Featured Products</h2>
          {loading ? (
            <div className="loading">Loading products...</div>
          ) : (
            <>
              <div className="grid grid-4">
                {featuredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
              <div className="text-center mt-2">
                <Link to="/products" className="btn btn-primary">
                  View All Products <FaArrowRight />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero" style={{ padding: '60px 20px' }}>
        <div className="container">
          <h2>Start Shopping Today!</h2>
          <p>Join thousands of satisfied customers</p>
          <Link to="/register" className="btn btn-secondary">
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
