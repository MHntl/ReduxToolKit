import { useSelector } from "react-redux";
import { CartIcon } from "../icons";
import React from "react";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux ToolKit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p style={{ color: "pink" }} className="total-amount">
              {amount}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;