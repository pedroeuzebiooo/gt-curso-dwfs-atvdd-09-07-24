import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import "../index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log("Usuário:", username);
    console.log("Senha:", password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <span className="p-float-label">
          <InputText
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">Username</label>
        </span>
        <span className="p-float-label">
          <Password
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleMask
          />
          <label htmlFor="password">Password</label>
        </span>
        <Button label="Login" icon="pi pi-check" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
