import React from "react";
import "./App.scss";
import { LoginPage } from "./pages/Login/LoginPage";
import { RegisterPage } from "./pages/Register/RegisterPage";
function App() {
  return (
    <div className="App">
      {/**
        <LoginPage />
     */}
      <RegisterPage />
    </div>
  );
}

export default App;
