import React from "react";
import { Link } from "react-router-dom";

import Button from "src/components/Button";
import Input from "src/components/Input";
import Background from "src/components/Background";

import "./styles/form.css";

type Props = {};
const SignUp: React.FC<Props> = () => {
  return (
    <div className="form-container">
      <Background>
        <h1 className="heading">Sign Up</h1>
        <Input inputLabel="First Name" name="firstName" />
        <Input inputLabel="Last Name" name="lastName" />
        <Input inputLabel="Email address" name="email" />
        <Input inputLabel="Password" name="password" type="password" />
        <Button title="Sign Up" />
        <h5 className="remarks">
          Already registered <Link to="/signin">sign in?</Link>
        </h5>
      </Background>
    </div>
  );
};

export default SignUp;
