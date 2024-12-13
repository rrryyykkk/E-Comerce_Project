/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createUser, signUpWithGmail } from "../../redux/auth";

const title = "Register";
const btnText = "Signup Now";
const acountBott = "Have an Account";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);
  const from = location.state?.from?.pathName || "/";

  //   Eye password
  const [type, setType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeIcon = () => {
    setShowPassword((prev) => !prev);
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(email, password);

    if (confirmPassword !== password) {
      setErrorMessage(
        "Password doesn't matc! Please, Provide a correct password"
      );
      return;
    }

    setErrorMessage("");
    try {
      const result = await dispatch(createUser({ email, password })).unwrap();
      alert("Account created successfully !");
      navigate(from, { replace: true });
    } catch (error) {
      setErrorMessage(error || "Failed to create account.");
    }
  };

  const handleRegister = async () => {
    try {
      const result = await dispatch(signUpWithGmail()).unwrap();
      navigate(from, { replace: true });
    } catch (error) {
      setErrorMessage("failed to sign up with Google. Please try again");
    }
  };
  return (
    <div>
      <div>
        <div className="login-section padding-tb section-bg">
          <div className="container">
            <div className="account-wrapper">
              <h3 className="title">{title}</h3>
              <form className="account-form" onSubmit={handleSignUp}>
                <div className="form-group">
                  <input
                    type="name"
                    name="user"
                    id="user"
                    placeholder="Full Name"
                    required
                  />
                </div>
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
                    type={type}
                    name="password"
                    id="password"
                    placeholder="Password*"
                    required
                  />
                  <input
                    type={type}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    className="mt-2"
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
                    <Link to={"/forgetpass"}>Forget Password</Link>
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
                  {acountBott}? <Link to={"/login"}>Login</Link>
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
    </div>
  );
};

export default SignUp;
