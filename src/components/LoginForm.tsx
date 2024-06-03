import React, { useState, ChangeEvent, FormEvent } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-form__container">
        <label htmlFor="email" className="login-form__label">
          Email
        </label>
        <input
          className="login-form__input"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="login-form__container">
        <label htmlFor="password" className="login-form__label">
          Password
        </label>
        <input
          className="login-form__input"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="flex-row">
        <p className="login-form__txt">Forgot Password?</p>
        <button type="submit" className="login-form__sign-in">
          SIGIN IN
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
