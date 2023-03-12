import React from "react";
import { useProducts } from "../Context/ProductProvider";
import TopNavbar from "../navBar/TopNavbar";
import { actionTypes } from "../State/ProductState/actionTypes";
import "./CartPage.css";
const CartPage = () => {
  const { state, dispatch } = useProducts() || {};
    console.log(state)
    
  
  // ------Total Product Incart and Total Price of cart
  const cartTotalQty = state.cart.reduce((acc, data) => acc + data.quantity, 0);
  const cartTotalAmount = state.cart.reduce(
    (acc, data) => acc + data.price * data.quantity,
    0
  );

  return (
    <>
      <TopNavbar></TopNavbar>

      <div className="row justify-content-center mt-5 mx-0">
        <div className="col-md-12 col-sm-12 col-lg-12 mt-5 mb-5">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">
                  Cart Calculation{" "}
                  {state.cart.length > 0 ? `(${state.cart.length})` : ""}
                </h5>
                {/* {
                                products.length > 0 ? <button className="btn btn-danger mt-0 btn-sm" onClick={() => emptycart()}><i className="fa fa-trash-alt mr-2"></i><span>Empty Cart</span></button> : ''} */}
              </div>
            </div>
            <div className="card-body p-0">
              {state.cart.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan="6">
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p>Your Cart Is empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <div className="table-responsive">
                  <table className="table cart-table mb-0">
                    <thead>
                      <tr>
                        <th>Action</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th className="text-right">
                          <span id="amount" className="amount">
                            Total Amount
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.cart.map((data, index) => {
                        const {
                          id,
                          thumbnail,
                          title,
                          price,
                          quantity,
                          totalPrice,
                        } = data;
                        return (
                          <tr key={index}>
                            <td>
                              <button
                                className="prdct-delete"
                                onClick={() =>
                                  dispatch({
                                    type: actionTypes.REMOVEPCART,
                                    payload: id,
                                  })
                                }
                              >
                                <i className="fa fa-trash-alt"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={thumbnail} alt="" />
                              </div>
                            </td>
                            <td>
                              <div className="product-name text-start">
                                <p>{title}</p>
                              </div>
                            </td>
                            <td>${price}</td>
                            <td>
                              <div className="prdct-qty-container d-flex justify-content-center">
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={() =>
                                    dispatch({
                                      type: actionTypes.DECREMENT,
                                      payload: id,
                                    })
                                  }
                                >
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  name="qty"
                                  className="qty-input-box"
                                  value={quantity}
                                  disabled
                                />
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={() =>
                                    dispatch({
                                      type: actionTypes.INCREMENT,
                                      payload: id,
                                    })
                                  }
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right">
                              ${totalPrice.toFixed(0)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>&nbsp;</th>
                        <th colSpan="3">&nbsp;</th>
                        <th>
                          Items in Cart<span className="ml-2 mr-2">:</span>
                          <span className="text-danger">{cartTotalQty}</span>
                        </th>
                        <th className="text-right">
                          Total Price<span className="ml-2 mr-2">:</span>
                          <span className="text-danger">
                            $ {cartTotalAmount.toFixed(0)}
                          </span>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-danger text-white border-0 px-5 py-2 rounded-3"
                      onClick={() =>
                          dispatch({
                              type: actionTypes.ADDTOORDER
                          }) }
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
