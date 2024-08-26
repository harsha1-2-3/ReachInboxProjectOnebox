import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./index.css";

const Login = () => (
  <div className="bgLogin">
    <div className="loginNav">
      <h1 className="navHead">
        <img className="mIcon" src="https://media.licdn.com/dms/image/v2/D560BAQEmo1aZIhVtlQ/company-logo_200_200/company-logo_200_200/0/1700158687336/reachinbox_ai_logo?e=2147483647&v=beta&t=P9A8YrpLwheo1VGFRXN4eb7gF1P0JhgY2wS7dQ_affc" alt="micon" />
        REACHINBOX
      </h1>
    </div>
    <div className="loginCont">
      <div className="loginForm">
        <h1 className="loginHead">Create a new account</h1>
        <Link to="/home" className="link">
          <button className="loginGoogleBtn">
            <FcGoogle className="googleIcon" /> Sign Up with Google
          </button>
        </Link>
        <button className="loginCreateBtn">Create an Account</button>
        <p className="loginPara">
          Already have an account?
          <span className="signInPara">
            <Link className="link" to="/home">
              Sign In
            </Link>
          </span>
        </p>
      </div>
    </div>
  </div>
);
export default Login;
