import React, { useEffect, useState } from 'react';
import { useProducts } from '../Context/ProductProvider';
import TopNavbar from '../navBar/TopNavbar';
import "./CartPage.css"
const CartPage = () => {
    const { state,dispatch } = useProducts() || {};
// console.log(state)

const [products, SetProducts] = useState([]);

useEffect(()=>{

    const data=state.cart;
 
    SetProducts(data);


},[])
// console.log(products)
      // add quantity property to each product
products.forEach(function(product) {
    product.quantity = 0; // initialize quantity to zero
    product.totalPrice=product.price;
  });

   

    // -----Increment Event------
    const increaseQuantity = (i) => {

  SetProducts((preValue) =>
            preValue.map((data, o) => {

                if (i === o) {
               return { ...data, quantity: data.quantity + 1,totalPrice:data.price * data.quantity };
                   
                }
                return data;
            })
        );




//         products.map((data, index) => {

// if(i=== index){

//     products[index].quantity = products[index].quantity+1;
//     products[index].totalPrice = products[index].price * products[index].quantity;
// }

       

// })
        // console.log(products)
    };
console.log(products)
    // -----Decrement Event------
    const decreaseQuantity = (i) => {
        // SetProducts((preValue) =>
        //     preValue.map((data, o) => {

        //         if (i === o) {

        //             if (data.quantity > 1) {
        //                 return { ...data, quantity: data.quantity - 1 };
        //             } else {
        //                 return data;
        //             }
        //         }
        //         return data;
        //     })
        // );
    };



    // -----Remove Event------
    const removeFromCart = (i) => {
        if (window.confirm("Are you sure you want to remove into your cart?")) {
            SetProducts(prevCart =>
                prevCart.filter((item, o) => {
                    return i !== o;
                })
            );

        } else {
            // alert('No');
        }
    };


    // -empty-cart--------
    // const emptycart = () => {
    //     if (window.confirm("Remove all items into your cart?")) {
    //         SetProducts([]);
    //     } else {
    //         // alert('No');
    //     }
    // }

    // ------Total Product Incart and Total Price of cart
    const cartTotalQty = products.reduce((acc, data) => acc + data.quantity, 0);
    const cartTotalAmount = products.reduce((acc, data) => acc + data.price * data.quantity, 0);



    return (
<>
<TopNavbar></TopNavbar>

<div className="row justify-content-center mt-5 mx-0">
            <div className="col-md-12 col-sm-12 col-lg-12 mt-5 mb-5">
                <div className="card">
                    <div className="card-header bg-dark p-3">
                        <div className="card-header-flex">
                            <h5 className="text-white m-0">Cart Calculation {products.length > 0 ? `(${products.length})` : ''}</h5>
                            {/* {
                                products.length > 0 ? <button className="btn btn-danger mt-0 btn-sm" onClick={() => emptycart()}><i className="fa fa-trash-alt mr-2"></i><span>Empty Cart</span></button> : ''} */}
                        </div>
                    </div>
                    <div className="card-body p-0">
                        {
                            products.length === 0 ? <table className="table cart-table mb-0">
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
                            </table> :
                                <table className="table cart-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th>Product</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th className="text-right"><span id="amount" className="amount">Total Amount</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map((data, index) => {
                                                const { id, thumbnail, title, price, quantity ,totalPrice} = data;
                                                return (
                                                    <tr key={index}>
                                                        <td><button className="prdct-delete" onClick={() => removeFromCart(index)}><i className="fa fa-trash-alt"></i></button></td>
                                                        <td><div className="product-img"><img src={thumbnail} alt="" /></div></td>
                                                        <td><div className="product-name text-start"><p>{title}</p></div></td>
                                                        <td>${price}</td>
                                                        <td >
                                                            <div className="prdct-qty-container d-flex justify-content-center">
                                                                <button className="prdct-qty-btn" type="button" onClick={() => decreaseQuantity(index)}>
                                                                    <i className="fa fa-minus"></i>
                                                                </button>
                                                                <input type="text" name="qty" className="qty-input-box" defaultValue={quantity} disabled />
                                                                <button className="prdct-qty-btn" type="button" onClick={() => increaseQuantity(index)}>
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="text-right">${(totalPrice).toFixed(0)}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>&nbsp;</th>
                                            <th colSpan="3">&nbsp;</th>
                                            {/* <th>Items in Cart<span className="ml-2 mr-2">:</span><span className="text-danger">{cartTotalQty}</span></th> */}
                                            {/* <th className="text-right">Total Price<span className="ml-2 mr-2">:</span><span className="text-danger">$ {cartTotalAmount.toFixed(0)}</span></th> */}
                                        </tr>
                                    </tfoot>
                                </table>
                        }
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='bg-danger text-white border-0 px-5 py-2 rounded-3'>Submit</button>
            </div>
        </div>
</>
      

    );
}

export default CartPage;