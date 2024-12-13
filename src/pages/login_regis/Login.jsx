/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login, signUpWithGmail } from "../../redux/auth";

const title = "login";
const btnText = "Login Now";
const acountBott = "Don't Have an Account";

const Login = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [errorMessage, setErrorMessage] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  //   Eye password
  const [type, setType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeIcon = () => {
    setShowPassword((prev) => !prev);
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        alert("Login Succesfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage("Please Provide valid email & password");
      });
  };

  const handleRegister = () => {
    dispatch(signUpWithGmail())
      .unwrap()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage("Google login failed");
      });
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className="form-group input-group">
                <input
                  type={type} // Tipe input mengikuti state type
                  name="password"
                  id="password"
                  placeholder="Password*"
                  required
                />
                <div className="input-group-append mt-2">
                  <span
                    className="input-group-text"
                    onClick={handleEyeIcon}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              {/* showing message */}
              <div>
                {errorMessage && (
                  <div className="error-message text-danger mb-1">
                    {errorMessage}
                  </div>
                )}
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to={"#"}>Forget Password</Link>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="d-block lab-btn bg-primary">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            {/* google methode */}
            <div className="account-bottom">
              <span className="d-blok cate pt-10">
                {acountBott}?<Link to={"/signup"}>Sign-Up</Link>
              </span>
              <span className="or">
                <span>Or</span>
              </span>
              <span>Login With Google</span>
              <ul className="lab-ul social-icons justify-content-center mt-3 ">
                <li>
                  <button
                    className="github bg-success rounded"
                    onClick={handleRegister}
                  >
                    <span>
                      <i className="icofont-github text-white"></i>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
