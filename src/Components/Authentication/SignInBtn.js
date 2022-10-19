import React, { /*useEffect*/ } from 'react';
import { UserAuth } from '../../context/AuthContext';
//import { useNavigate } from 'react-router-dom';
import "../../styles/Authentication/signInBtn.css"

const SignInBtn = () => {
  const { googleSignIn } = UserAuth();
  //const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect(() => {
   // if (user != null) {
   //   navigate('/account');
    //}
 // }, [user]);

  return (
      <button onClick={handleGoogleSignIn} className="signInBtn">Sign In</button>  
  );
};

export default SignInBtn;