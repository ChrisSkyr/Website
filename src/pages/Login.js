import "../styles/pages/login.css";
import GoogleButton from "react-google-button";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Login() {
  return (
    <Protected>
      <div className="login-container">
        <div className="login-top">
          <h1>Connect your account.</h1>
          <p>
            If you don't have an account yet, you can select a provider and
            create one now.
          </p>
        </div>
        <ul className="provider-list">
          <li className="list-item">
            <GButton />
          </li>
          <li>
            <p>More providers are coming soon.</p>
          </li>
        </ul>
      </div>
    </Protected>
  );
}

const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (user) {
    return <Navigate to="/account" />;
  }

  return children;
};

const GButton = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return <GoogleButton onClick={handleGoogleSignIn} />;
};
