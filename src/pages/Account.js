import React from "react";
import { UserAuth } from "../context/AuthContext";
import "../styles/pages/account.css";

const Account = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-container">
      <ul className="side-bar">
        <li className="settingsP">
          <h1>Settings</h1>
        </li>
        <li className="accountBtn">
          <button>Account</button>
        </li>
        <li>
          <button>Notifications</button>
        </li>
      </ul>
      <div className="account-container">
        <h1>Account</h1>
        <div>
          <p>Welcome, {user?.displayName}</p>
        </div>
        <button onClick={handleSignOut} className="logoutBtn">
          logOut
        </button>
      </div>
    </div>
  );
};

export default Account;
