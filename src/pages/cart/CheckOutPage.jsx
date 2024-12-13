import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../components/modal.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/slice";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");
  const dispatch = useDispatch();

  // handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // direct to homePage
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("Your Order is placed successfully!");
    localStorage.removeItem("cart");
    dispatch(resetCart());
    navigate(from, { replace: true });
  };
  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Procceed to CheckOut
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Methode</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul
                  className="nav nav-tabs d-flex justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item mx-3" role="presentation">
                    <a
                      href="#visa"
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                    >
                      {/* from google pinterest*/}
                      {/* visa */}
                      <img
                        src="https://i.pinimg.com/474x/e0/9c/aa/e09caaee2bc37880b7b00a39d1036025.jpg"
                        alt=""
                        width="80"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#paypal"
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypalId"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                    >
                      {/* from google pinterest */}
                      {/* paypal */}
                      <img
                        src="https://i.pinimg.com/474x/7c/81/52/7c8152cb8959cd0155c5f8d6cc3c7cd6.jpg"
                        alt=""
                        width="100"
                      />
                    </a>
                  </li>
                </ul>
                {/* content */}
                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tab-panel"
                    aria-labelledby="visa-tab"
                  >
                    {/* visa tab-content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Cardholder Name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            min={1}
                            max={999}
                            required
                          />
                          <span>Card Number</span>
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              min={1}
                              max={999}
                              required
                            />
                            <span>Expired Date</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              min={1}
                              max={999}
                              required
                            />
                            <span>CVV</span>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button
                            className="btn btn-success btn-block"
                            onClick={handleOrderConfirm}
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* paypal content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                    id="paypal"
                    role="tab-panel"
                    aria-labelledby="paypal-tab"
                  >
                    {/* Paypal tab-content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Acount Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Enter your email</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            min={1}
                            max={999}
                            required
                          />
                          <span>Your Name</span>
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            min={1}
                            max={999}
                            required
                          />
                          <span>Extra Info</span>
                        </div>
                        <div className="px-5 pay">
                          <button
                            className="btn btn-success btn-block"
                            onClick={handleOrderConfirm}
                          >
                            Add Palypal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* payment desclaimer */}
                <p className="mt-3 px-4 p-Disclaimer">
                  <em>Payment Disclaimer : </em>
                  In no event shall payment or patial payment by owner for any
                  material or service
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
