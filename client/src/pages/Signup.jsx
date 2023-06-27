import React from "react";
import style from "../assets/css/Signup.module.css";
import { Form, redirect } from "react-router-dom";
import { signup } from "../api/auth";

export const signupAction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const response = await signup(data);
  const body = await response.json();
  return redirect("/");
};

export default function Signup() {
  return (
    <>
      <div className={style.login}>
        <div className={style.containerBg} />
        <div className={style.containerForm}>
          <h1>Sign Up</h1>

          <Form
            className={style.form}
            id="loginForm"
            method="post"
          >
            <input
              id="username"
              type="text"
              placeholder="username"
              required={true}
              name="username"
            />
            <input
              id="password"
              type="password"
              placeholder="password"
              required={true}
              name="password"
            />
            <button type="submit">Signup</button>
          </Form>
        </div>
      </div>
    </>
  );
}
