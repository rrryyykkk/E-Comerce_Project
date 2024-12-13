import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../auth/AuthProvider";
import "../assets/css/icofont.min.css"; // Import IcoFont
import "animate.css";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // authInfo
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  // AddEventListener untuk header tetap
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  // handleLogout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged out Successfully");
      })
      .catch((error) => {
        console.log("Logout error:", error.message);
        alert(error.message);
      });
  };

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* Header Top */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            {!user ? (
              <>
                <Link to={"/signup"} className="lab-btn me-3">
                  <span>Create Account</span>
                </Link>
                <Link to={"login"}>Login</Link>
              </>
            ) : (
              <span>Welcome, {user?.displayName || "user"}!</span>
            )}
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>

            {/* Menu */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to={"/"}>HOME</Link>
                  </li>
                  <li>
                    <Link to={"/shop"}>SHOP</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>BLOG</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>ABOUT</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>CONTACT</Link>
                  </li>
                </ul>
              </div>

              {/* Profil atau Login */}
              {user ? (
                <div className="dropdown d-none d-md-block">
                  <button
                    className="btn btn-primary dropdown-toggle d-flex align-items-center rounded-circle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="icofont-user"></i>
                  </button>

                  <ul
                    className="dropdown-menu dropdown-menu-end animate__animated animate__fadeIn"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <Link
                        className="dropdown-item d-flex align-items-center"
                        to={"/cart-page"}
                      >
                        <i className="icofont-cart me-2 text-primary"></i>
                        My Cart
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        className="dropdown-item d-flex align-items-center text-danger"
                        onClick={handleLogOut}
                      >
                        <i className="icofont-logout me-2"></i>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link
                    to={"/signup"}
                    className="lab-btn bg-primary me-3 d-none d-md-block text-white"
                  >
                    Create Account
                  </Link>
                  <Link to={"/login"} className="btn d-none d-md-block">
                    Log in
                  </Link>
                </>
              )}

              {/* Menu Toggle (Mobile) */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Social Toggler */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
