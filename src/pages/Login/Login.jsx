import { useState } from "react";
import { signUp } from "../../config/fireBase.js";
import { login,resetPass } from "../../config/fireBase.js";
import "./Login.css";
import assets from "../../assets/assets.js";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (currState === "Sign Up") {
      signUp(username, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2>{currState}</h2>

        {currState === "Sign Up" ? (
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            className="form-input"
            value={username}
            required
          />
        ) : null}

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
          className="form-input"
          value={email}
          required
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="form-input"
          value={password}
          required
        />

        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login now"}
        </button>

        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>

        <div className="login-forget">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrState("Sign Up")}>click here</span>
            </p>
          )}
          {currState==="Login"?<p className="login-toggle">
              Forgot Password ?{" "}
              <span onClick={() =>resetPass(email)}>reset here</span>
            </p>:null}
        </div>
      </form>
    </div>
  );
};

export default Login;
