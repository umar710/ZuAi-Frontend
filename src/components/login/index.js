import { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../login/index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);

  const navigate = useNavigate();

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwtToken", jwtToken, { expires: 30 });
    navigate("/blogs-timeline");
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError({ showSubmitError: true });
    setErrorMsg(errorMsg);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const userDetails = { email, password };
    console.log(userDetails);
    const apiUrl = "https://zuai-backend-fk6h.onrender.com/user/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(apiUrl, options);
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.ok === true) {
      onSubmitSuccess(data.jwtToken);
    } else {
      onSubmitFailure(data.error_msg);
    }
  };

  const onChangeUserEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const userEmailField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USER EMAIL
      </label>
      <input
        type="text"
        id="username"
        className="username-input-filed"
        onChange={onChangeUserEmail}
        value={email}
      />
    </>
  );

  const passwordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        USER PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-filed"
        onChange={onChangePassword}
        value={password}
      />
    </>
  );

  const jwtToken = Cookies.get("jwtToken");
  if (jwtToken !== undefined) {
    return <Navigate to="/blogs-timeline" />;
  }

  return (
    <div>
      <div className="login-form-container">
        <div>
          <img
            src="https://www.zuai.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdorable%20cartoon%20teen%20reading.7bd56251.webp&w=828&q=75"
            className="login-image"
            alt="website login"
          />
        </div>
        <form className="form-container" onSubmit={onSubmitForm}>
          <img
            src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230622084446.jpg"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{userEmailField()}</div>
          <div className="input-container">{passwordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}

          <div>
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
