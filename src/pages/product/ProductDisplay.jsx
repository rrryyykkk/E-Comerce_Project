/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slice";

/* eslint-disable react/prop-types */
const ProductDisplay = ({ item }) => {
  const { title, id, price, rating = {}, description, quantity, stock } = item;
  const { rate = 0, count = 0 } = rating;

  const dispatch = useDispatch();
  const [prequantity, setPreQuantity] = useState(1);
  const [coupon, setCoupun] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  //   function
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleIncrement = () => {
    setPreQuantity((prev) => Math.min(prev + 1, stock));
  };
  const handleDecrement = () => {
    setPreQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        id,
        quantity: prequantity,
      })
    );

    // reset form fields
    setPreQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupun("");
  };
  return (
    <div>
      <div>
        <h4>{title}</h4>
        <p className="rating">
          {rate} <i className="icofont-star"></i> ({count} review)
        </p>
        <h4>${price}</h4>

        <p>{description}</p>

        {/* cart Component */}
        <div>
          <form onSubmit={handleSubmit}>
            {/* size */}
            <div className="select-product size">
              <select value={size} onChange={handleSizeChange}>
                <option>Select Size</option>
                <option value="SM">SM</option>
                <option value="MD">MD</option>
                <option value="LG">LG</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              <i className="icofont-rounded-down"></i>
            </div>
            {/* color */}
            <div className="select-product color">
              <select value={color} onChange={handleColorChange}>
                <option>Select Color</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Dark">Dark</option>
                <option value="White">White</option>
              </select>
              <i className="icofont-rounded-down"></i>
            </div>

            {/* cart plus minus */}
            <div className="cart-plus-minus">
              <div className="dec qtybutton" onClick={handleDecrement}>
                -
              </div>
              <input
                type="text"
                name="qtybutton"
                id="qtybutton"
                value={prequantity}
                onChange={(e) => {
                  const value = parseInt.apply(e.target.value) || 1;
                  setPreQuantity(Math.max(1, Math.min(e.target.value, 10)));
                }}
                className="cart-plus-minus-box"
                disabled
              />
              <div className="inc qtybutton" onClick={handleIncrement}>
                +
              </div>
            </div>
            {/* coupun field */}
            <div className="discount-code mb-2">
              <input
                type="text"
                placeholder="Enter Discount Code"
                onChange={(e) => setCoupun(e.target.value)}
              />
            </div>
            {/* button */}
            <button type="submit" className="lab-btn text-white">
              Add To Cart
            </button>
            <Link to={"/cart-page"} className="lab-btn bg-primary text-white">
              Check-Out
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
