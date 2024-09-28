import React from "react";
import "./Login.css";
import { Button } from "@mui/material";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    // do clever google login here
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://blog.logomyway.com/wp-content/uploads/2020/12/discord-logo-4.jpg"
          alt="Discord Logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
