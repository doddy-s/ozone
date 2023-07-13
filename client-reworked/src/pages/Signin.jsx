import React, { useRef, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { signin } from "../api/auth";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export const Signin = () => {
  const navigate = useNavigate();

  const formData = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData.current;
    const response = await signin({
      username: username.value,
      password: password.value,
    });

    // console.table(response);

    if (response.status === "OK") {
      localStorage.setItem("userId", JSON.stringify(response.data.userId));
      navigate("/");
      return;
    }

    setSnackBarOpen(true);
  };

  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false);
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <form
          ref={formData}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            className="h-12 w-64 px-2 border-b-2 border-black"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="h-12 w-64 px-2 border-b-2 border-black"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 rounded-full text-white"
          >
            Sign In
          </button>
          <p>
            Don't have account? <Link className="text-blue-600">Sign up!</Link>
          </p>
        </form>
      </div>

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Invalid username or password
        </Alert>
      </Snackbar>
    </>
  );
};
