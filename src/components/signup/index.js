import { useState } from "react";
import { Link } from "react-router-dom";
import "../login/index.css";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError({ showSubmitError: true });
    setErrorMsg(errorMsg);
  };

  const onSubmitSignUp = async (event) => {
    event.preventDefault();
    const userDetails = { username, email, password };
    const apiUrl = "https://zuai-backend-fk6h.onrender.com/user/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corrected the typo here
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(apiUrl, options);
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.ok === false) {
      onSubmitFailure(data.error_msg);
    }
  };

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const onChangeUserEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const userNameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-filed"
        onChange={onChangeUserName}
        value={username}
      />
    </>
  );

  const userEmailField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USER EMAIL
      </label>
      <input
        type="text"
        id="useremail"
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
        <form className="form-container" onSubmit={onSubmitSignUp}>
          <img
            src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230622084446.jpg"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{userNameField()}</div>
          <div className="input-container">{userEmailField()}</div>
          <div className="input-container">{passwordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <div>
            <p>
              Have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
