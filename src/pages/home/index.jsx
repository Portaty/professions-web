import React, { useState, useEffect } from "react";
import { API, withSSRContext } from "aws-amplify";
import Navbar from "../../components/Navbar";

const Home = () => {
  // const getUser = async () => {
  //   const api = "api-portaty";
  //   const path = "/admin/getUsers";
  //   const params = {
  //     headers: {},
  //     response: true,
  //     queryStringParameters: {
  //       limit: 10,
  //       nextToken: null,
  //     },
  //   };
  //   try {
  //     const response = await API.get(api, path, params);
  //     console.log("response: ", response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    // getUser();
  }, []);

  return (
    <div style={{}}>
      <Navbar />
    </div>
  );
};

export default Home;
