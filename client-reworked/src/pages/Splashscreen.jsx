import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const Splashscreen = () => {
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 1000);
  return redirectNow ? (
    <Navigate to="/home" />
  ) : (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <img
          src="https://cdn.discordapp.com/attachments/1126661998063652924/1126666124772249630/ozone-icon.svg"
          alt="Splah"
          className="h-20 w-20"
        />
      </div>
    </>
  );
};
