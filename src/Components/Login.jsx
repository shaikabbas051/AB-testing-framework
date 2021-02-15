import React, { useState } from "react";
export default function Login(props) {
  const [isChecked, setChecked] = useState(false);
  const [name, setName] = useState("");
  return (
    <div className="login-container">
      <div className="form">
        <div className="input-field">
          <label htmlFor="name">Enter Name</label>
          <input
            placeholder="Ex: John"
            id="email"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={"abuser-cont"}>
          <label className="switch">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setChecked(!isChecked)}
            />
            <span className="slider round"></span>
          </label>
          <span>AB Testing User</span>
        </div>
        <div className="action">
          <button
            id="btn"
            className="btn"
            onClick={() => props.handleLogin({ isABUser: isChecked, name })}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
