import React, { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import Path from "../../paths";
import { Link } from "react-router-dom";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>registration FORM</h1>

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
            name="confirm-password"
            placeholder="Confirm Password"
            id="confirm-password"
            onChange={onChange}
            value={values[RegisterFormKeys.ConfirmPassword]}
          />

          <input className="btn submit" type="submit" value="Register" />
        </div>
      </form>

      <div className="btn btn-register">
        <Link to={Path.Register }>go BACK</Link>
      </div>
    </section>
  );
}

