import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import classnames from "classnames";

import logo from "./logo.svg";
import "./Login.css";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, sePasswordErr] = useState(false);

  function handleSubmit(event) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
    if (!email && !password) {
      sePasswordErr(true);
      setEmailErr(true);
    } else if (!email || !emailRegex.test(String(email).toLowerCase())) {
      setEmailErr(true);
    } else if (!password || !passwordRegex.test(password)) {
      sePasswordErr(true);
    } else {
      sePasswordErr(false);
      setEmailErr(false);
    }
    event.preventDefault();
  }

  return (
    <div className="Login">
      <p>
        <img src={logo} alt="pied piper logo" />
      </p>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            className={classnames("email", { err: emailErr })}
            id="exampleEmail"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailErr && <p className="errors">{"Please enter valid email"}</p>}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            className={classnames("password", { err: passwordErr })}
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="examplePassword"
            placeholder="Enter password"
          />
          {passwordErr && (
            <p className="errors">{"Please enter valid password"}</p>
          )}
        </FormGroup>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
