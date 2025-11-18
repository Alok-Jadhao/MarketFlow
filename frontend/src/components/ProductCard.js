import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />);
    }

    return stars;
  };

  const imageUrl = product.thumbnail.startsWith('http')
    ? product.thumbnail
    : `http://localhost:5000/${product.thumbnail}`;

  return (
    <Link to={`/products/${product._id}`} className="product-card">
      <img
        src={imageUrl}
        alt={product.name}
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/250x250/4F46E5/ffffff?text=Product';
        }}
      />
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-rating">
          {renderStars(product.rating)}
          <span>({product.numReviews})</span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {product.stock > 0 ? (
          <span className="badge badge-success">In Stock</span>
        ) : (
          <span className="badge badge-danger">Out of Stock</span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
