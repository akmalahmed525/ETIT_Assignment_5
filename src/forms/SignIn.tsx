import React from "react";
import { Link } from "react-router-dom";

import Button from "src/components/Button";
import Input from "src/components/Input";
import Background from "src/components/Background";
import CheckBox from "src/components/CheckBox";

import "./styles/form.css";

type Props = {};
const SignIn: React.FC<Props> = () => {
  return (
    <div className="form-container">
      <Background>
        <h1 className="heading">Sign In</h1>
        <Input inputLabel="Email address" name="email" type="email" />
        <Input inputLabel="Password" name="password" type="password" />
        <CheckBox inputLabel="Remember Me" name="rememberMe" />
        <Button title="Submit" />
        <h5 className="remarks">Forgot <Link to="/">password</Link></h5>
      </Background>
    </div>
  );
};

export default SignIn;
