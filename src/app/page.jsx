"use client";

import SignIn from "@/pages/login";

// import SignIn from "../components/SignIn";
// import React, { useState, useEffect } from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import config from "../aws-exports.js";
// import { useRouter } from "next/navigation";
Amplify.configure(config);
export default function Main() {
  return (
    <div>
      <SignIn />
    </div>
  );
}
