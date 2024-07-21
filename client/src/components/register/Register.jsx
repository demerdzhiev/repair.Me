import React from "react";
import { Link } from "react-router-dom";
import Path from "../../paths";

export default function Register() {
  return (
    <div>
      <h1>Registration Form</h1>
      <section className="registration-section">
        <div className="btn btn-register">
          <Link to={Path.RegisterCustomer}>register AS CUSTOMER</Link>
        </div>
        <div className="btn btn-register">
          <Link to={Path.RegisterProvider}>register AS PROVIDER</Link>
        </div>
      </section>
      <div className="btn btn-register">
        <Link to={Path.Home}>go BACK</Link>
      </div>
    </div>
  );
}
