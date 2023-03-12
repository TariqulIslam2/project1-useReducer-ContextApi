import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../Context/ProductProvider';

const TopNavbar = () => {
  const { state,dispatch } = useProducts()
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-danger">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link to={"/"}>
                {" "}
                <a className="navbar-brand fw-bold fs-2 text-white" href="">
                  TechNLogy
                </a>
              </Link>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/products"}>
                    <a
                      className="nav-link active me-5 fs-5 text-white"
                      aria-current="page"
                      href="#"
                    >
                      Products
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/myOrders"}>
                    <a
                      className="nav-link active me-5 fs-5 text-white"
                      aria-current="page"
                      href="#"
                    >
                      Order Product
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/cart"}>
                    <a className="nav-link active" aria-current="page" href="#">
                      <i class="fa-sharp fa-solid fa-cart-plus fs-3 text-white"></i>{" "}
                      <sup className="text-white fs-3">{state.cart.length}</sup>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default TopNavbar;