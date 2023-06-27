import React from "react";
import style from "../assets/css/Signin.module.css";
import { Form, redirect } from "react-router-dom";
import { signin } from "../api/auth";

export const signinAction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const response = await signin(data);
  const body = await response.json();
  return redirect("/");
};

export default function Signin() {
  return (
    <>
      <div className={style.login}>
        <div className={style.containerBg} />
        <div className={style.containerForm}>
          <h1>Sign In</h1>

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
            <button type="submit">Signin</button>
          </Form>
        </div>
      </div>
    </>
  );
}
