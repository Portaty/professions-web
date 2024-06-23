import React from "react";
import SignIn from "./login.jsx";


const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100vw',
        height: '100vh'
      }}
    >
      <SignIn />
    </div>
  );
};

export default Main;
