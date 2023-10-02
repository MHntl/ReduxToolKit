import React, { useState } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cart/CartSlice";

const CartContainer = () => {
  const [btnStatus, setBtnStatus] = useState(false);
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />

        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <div>
          {!btnStatus ? (
            <div>
              <button
                className="btn clear-btn"
                onClick={() => setBtnStatus(!btnStatus)}
              >
                Clear Cart
              </button>
            </div>
          ) : (
            <div>
              <button
                style={{ background: "red" }}
                className="btn"
                onClick={() => dispatch(clearCart())}
              >
                Confirm
              </button>
              <button
                style={{ marginLeft: "10px" }}
                className="btn"
                onClick={() => setBtnStatus(!btnStatus)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
