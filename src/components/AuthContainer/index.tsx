import { useState } from "react";
import Login from "../Login";
import SignUp from "../SignUp";

const AuthContainer: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div>
      {isSignUp ? (
        <SignUp toggleAuth={toggleAuth} />
      ) : (
        <Login toggleAuth={toggleAuth} />
      )}
    </div>
  );
};

export default AuthContainer;
