import "../styles/pages/login.css";
import GoogleButton from "react-google-button";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-top">
        <h1>Connect your account.</h1>
        <p>
          If you don't have an account yet, you can select a provider and create
          one now.
        </p>
      </div>
      <ul className="provider-list">
        <li className="list-item">
          <GoogleButton />
        </li>
        <li>
          <p>More providers are coming soon.</p>
        </li>
      </ul>
    </div>
  );
}
