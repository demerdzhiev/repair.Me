import React, { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import Path from "../../paths";
import { Link } from "react-router-dom";

const RegisterFormKeys = {
  Email: "email",
  Username: "username",
  Password: "password",
  ConfirmPassword: "confirmPassword",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>registration FORM</h1>

          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="Username"
            onChange={onChange}
            value={values[RegisterFormKeys.Username]}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremailhere@email.com"
            onChange={onChange}
            value={values[RegisterFormKeys.Email]}
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="register-password"
            onChange={onChange}
            value={values[RegisterFormKeys.Password]}
          />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            id="confirm-password"
            onChange={onChange}
            value={values[RegisterFormKeys.ConfirmPassword]}
          />

          <input className="btn submit" type="submit" value="Register" />
        </div>
      </form>

      <div className="back-link-container">
        <Link to={Path.Home}>
          <img src="../../images/home_icon.png" alt="Go Back" className="home-icon" />
        </Link>
      </div>
    </section>
  );
}
