import React from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import config from "../aws-exports.js";
import SignIn from "./login.jsx";
Amplify.configure(config);

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
