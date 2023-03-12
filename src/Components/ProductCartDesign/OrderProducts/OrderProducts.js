import React from 'react';
import { useProducts } from '../Context/ProductProvider';
import TopNavbar from '../navBar/TopNavbar';

const OrderProducts = () => {
    const { state, dispatch } = useProducts() || {};

    console.log(state);
    return (
      <>
        <style>
          {
            ".hovereffect{color:#DC3545} .hovereffect:hover{background-color:#DC3545;color:white}"
          }
        </style>
        <TopNavbar></TopNavbar>
        <div className="container my-5 pt-5">
          {state.order.length ? (
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {state.order?.length &&
                state.order?.map((item) => (
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={item.thumbnail}
                        className="card-img-top "
                        style={{ height: "300px" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text text-start">
                          {item.description}
                        </p>
                      </div>
                     <div>
                        <div className="text-dark mx-2 d-flex justify-content-between">
                          <div className="fw-bold">
                            Quantity: {item.quantity}
                          </div>
                          <div className="mt-2 fw-bold">
                            Total Price :{item.totalPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div class="spinner-border text-danger text-center" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </>
    );
};

export default OrderProducts;