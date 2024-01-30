import React from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="bottomCheck">
          <FaBars color="#ffffff" />
        </label>

        <section className="sectionFlex">
          <img className="logoGameHut" src="assets/img/logoGameHut.png" alt="logo-Game-Hut" />
          <h3 className="logoTitle">GameHut</h3>
          <section className="search-section">
            <form>
              <FaSearch color="#ffffff" />
              <input type="text" name="" id="search-item" placeholder="Search" />
            </form>
          </section>
          <section className="icons-section">
            <a href="#" className="shoppingCart">
              <FaShoppingCart color="#ffffff" />
            </a>
            <a href="#" className="wishlist">
              <FaHeart color="#ffffff" />
            </a>
            <a href="#" className="login-register">
              <p>Login/Register</p>
            </a>
            <a href="#" className="userIcon">
              <FaUser color="#ffffff" />
            </a>
          </section>
        </section>
      </header>
    );
  }
}

export default Header;