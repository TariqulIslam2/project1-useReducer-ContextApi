import React from 'react';

const TopNavbar = () => {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
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
              <a className="navbar-brand fw-bold fs-2 text-white" href="">
                TechNLogy
              </a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                
                  <a className="nav-link active" aria-current="page" href="#">
                                    <i class="fa-sharp fa-solid fa-cart-plus fs-3 text-white"></i> <sup className='text-white'>{state.cart.length }</sup>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default TopNavbar;