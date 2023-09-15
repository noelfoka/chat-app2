import React from "react";

const login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Numie Registration</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default login;
