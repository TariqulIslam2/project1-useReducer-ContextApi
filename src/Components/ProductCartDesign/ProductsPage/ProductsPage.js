
import { RatingStar } from "rating-star";
import React from "react";
import { useProducts } from "../Context/ProductProvider";
import TopNavbar from "../navBar/TopNavbar";
import { actionTypes } from "../State/ProductState/actionTypes";

const ProductsPage = () => {
  const { state,dispatch } = useProducts() || {};
   
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
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {state.data?.length &&
            state.data?.map((item) => (
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
                    <p className="card-text text-start">{item.description}</p>
                  </div>
                  <div className="">
                    <div className="text-white d-flex justify-content-between">
                      <div>Price: {item.price}</div>
                      <div> Stock :{item.stock}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-white d-flex justify-content-between">
                      <div>
                        {" "}
                        <RatingStar
                          clickable
                          maxScore={5}
                          id="123"
                          rating={item.rating}
                        />
                      </div>
                      <div className="mt-2">
                        {" "}
                        <span
                          className=" px-2 py-1 me-1 "
                          style={{
                            background: "linear-gradient(45deg, red, green)",
                          }}
                        >
                          Discount :{" "}
                          <span className="fw-bold">
                            {item.discountPercentage}%
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-danger ">
                      <button className="border-0 w-100 hovereffect py-2 fw-bold" onClick={()=>{dispatch({type:actionTypes.ADDTOCART,payload:item})}}>
                        {" "}
                        <i class="fa-sharp fa-solid fa-cart-plus fs-6 me-2"></i>
                        Add To cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
