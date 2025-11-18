import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaStore, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { isAuthenticated, user, logout, isAdmin } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaStore size={28} />
          MarketFlow
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/products" className="navbar-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-link">
              <FaShoppingCart size={20} />
              Cart
              {cart.totalItems > 0 && (
                <span className="cart-badge">{cart.totalItems}</span>
              )}
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              {isAdmin && (
                <li>
                  <Link to="/admin" className="navbar-link">
                    Admin
                  </Link>
                </li>
              )}
              <li>
                <Link to="/orders" className="navbar-link">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/profile" className="navbar-link">
                  <FaUser size={18} />
                  {user?.name}
                </Link>
              </li>
              <li>
                <button onClick={logout} className="btn btn-primary btn-sm">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="navbar-link">
                  <FaSignInAlt size={18} />
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="btn btn-primary btn-sm">
                  <FaUserPlus size={18} />
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
