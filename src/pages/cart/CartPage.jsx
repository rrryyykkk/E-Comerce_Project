import { useState } from "react";
import PageHeaders from "../../components/PageHeaders";
import { Link } from "react-router-dom";
import delImgUrl from "../../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, updateQuantity } from "../../redux/slice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.product.cart);
  const [errorMessages, setErrorMessages] = useState({});

  // calculated prices
  const calculatedTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Increment
  const handleIncrement = (item) => {
    if (item.quantity < item.stock) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
      setErrorMessages((prev) => ({ ...prev, [item.id]: "" }));
    } else {
      setErrorMessages((prev) => ({
        ...prev,
        [item.id]: `Pesanan melebihi stock (stock: ${item.stock})`,
      }));
    }
  };

  // Decrement
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
      setErrorMessages((prev) => ({ ...prev, [item.id]: "" }));
    }
  };

  // delete
  const handleDeleteItem = (item) => {
    dispatch(removeCart(item.id));
    setErrorMessages((prev) => {
      const newErrors = { ...prev };
      delete newErrors[item.id];
      return newErrors;
    });
  };

  // cart subtotal
  const cartSubTotal = cartItem.reduce((total, item) => {
    return total + calculatedTotalPrice(item);
  }, 0);

  // order Total
  const orderCartTotal = cartSubTotal;

  return (
    <div>
      <PageHeaders title="Shop Cart" curPage="Cart Page" />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* Cart Table*/}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cart-product">Product</th>
                    <th className="cart-price">Price</th>
                    <th className="cart-quantity">Quantity</th>
                    <th className="cart-toprice">Total</th>
                    <th className="cart-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem.map((item, i) => (
                    <tr key={i}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to={"/shop"}>
                            <img src={item.image}></img>
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to={"/shop"}>{item.title}</Link>
                        </div>
                        {errorMessages[item.id] && (
                          <p className="text-danger">
                            {errorMessages[item.id]}
                          </p>
                        )}
                      </td>
                      <td className="cart-price">${item.price}</td>
                      <td className="cart-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrement(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                            min={1}
                            max={item.stock}
                            onChange={(e) => {
                              const newQuantity = Number(e.target.value);
                              if (
                                newQuantity >= 1 &&
                                newQuantity <= item.stock
                              ) {
                                dispatch(
                                  updateQuantity({
                                    id: item.id,
                                    quantity: newQuantity,
                                  })
                                );
                                setErrorMessages((prev) => ({
                                  ...prev,
                                  [item.id]: "",
                                }));
                              } else if (newQuantity > item.stock) {
                                setErrorMessages((prev) => ({
                                  ...prev,
                                  [item.id]: `Pesanan melebihi stock (stock: ${item.stock})`,
                                }));
                              }
                            }}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrement(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="cat-toprice">
                          ${calculatedTotalPrice(item)}
                        </div>
                      </td>
                      <td className="cart-edit">
                        <a href="#" onClick={() => handleDeleteItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* cart Table-end */}

            {/* cart botton */}
            <div className="cart-bottom">
              {/* check box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupun code ...."
                    className="cart-page-input-text"
                  />
                  <input type="submit" value={"Apply Coupon"} />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value={"Update Cart"} />
                  <div>
                    <CheckOutPage />
                  </div>
                </form>
              </div>
              {/* check box-end */}

              {/* shoping box */}
              <div className="shiping-box">
                <div className="row ">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculated Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="us">United State (US)</option>
                          <option value="ina">Indonesia (INA)</option>
                          <option value="sgp">Singapore (SGP)</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shipping-select">
                        <select>
                          <option value="nyk">New York</option>
                          <option value="jkt">Jakarta</option>
                          <option value="nvn">Novena</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="Postcode/ZIP"
                        className="cart-page-input-text"
                      />
                      <button type="submit">Updated Addres</button>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">${cartSubTotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            ${orderCartTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* cart bottom-end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
